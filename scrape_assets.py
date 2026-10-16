import os
import re
import ssl
import json
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
import xml.etree.ElementTree as ET

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def fetch_url(url, timeout=12):
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=timeout) as resp:
            return url, resp.read().decode('utf-8', errors='ignore'), None
    except Exception as e:
        return url, None, str(e)

def download_file(url, target_path, timeout=20):
    try:
        if os.path.exists(target_path) and os.path.getsize(target_path) > 0:
            return url, target_path, True, 'Already exists'
        os.makedirs(os.path.dirname(target_path), exist_ok=True)
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=timeout) as resp:
            content = resp.read()
            with open(target_path, 'wb') as f:
                f.write(content)
            return url, target_path, True, f'Downloaded {len(content)} bytes'
    except Exception as e:
        return url, target_path, False, str(e)

def main():
    print("1. Discovering URLs from Sitemaps...", flush=True)
    sitemaps = [
        'https://www.michaelsbackdoor.com/sitemap.xml',
        'https://www.michaelsbackdoor.com/pages-sitemap.xml',
        'https://www.michaelsbackdoor.com/blog-posts-sitemap.xml',
        'https://www.michaelsbackdoor.com/blog-categories-sitemap.xml'
    ]

    urls_to_crawl = set()
    direct_media = set()

    for sm in sitemaps:
        u, text, err = fetch_url(sm)
        if text:
            try:
                root = ET.fromstring(text)
                for loc in root.findall('.//{*}loc'):
                    t = loc.text.strip()
                    if t.endswith('.xml'):
                        sitemaps.append(t)
                    elif any(t.lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp', '.svg']):
                        direct_media.add(t)
                    else:
                        urls_to_crawl.add(t)
            except Exception as e:
                print(f"Error parsing sitemap {sm}: {e}", flush=True)

    print(f"Found {len(urls_to_crawl)} web pages and {len(direct_media)} direct media links from sitemaps.", flush=True)

    print("2. Crawling pages concurrently...", flush=True)
    thunderbolt_urls = set()
    pdf_docs = set()

    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = {executor.submit(fetch_url, u): u for u in urls_to_crawl}
        for future in as_completed(futures):
            u, text, err = future.result()
            if err:
                print(f"Failed {u}: {err}", flush=True)
                continue
            # Extract image filenames (e.g. de5e90_... or c63e76_...)
            imgs = re.findall(r'([a-zA-Z0-9_]{6,}_[a-zA-Z0-9]{32}[~a-zA-Z0-9_.-]*\.(?:jpg|jpeg|png|webp|svg))', text, re.I)
            for img in imgs:
                direct_media.add(f"https://static.wixstatic.com/media/{img}")

            # Extract full wixstatic urls
            wix_full = re.findall(r'https?://static\.wixstatic\.com/media/[a-zA-Z0-9_%~.-]+', text)
            for w in wix_full:
                base = w.split('/v1/')[0]
                direct_media.add(base)

            # Extract documents / pdfs
            docs = re.findall(r'https?://[^\"]*wixstatic\.com/ugd/[a-zA-Z0-9_%~.-]+', text)
            docs += re.findall(r'https?://[^\"]*\.pdf', text, re.I)
            for d in docs:
                pdf_docs.add(d)

            # Thunderbolt urls
            tbs = re.findall(r'https://siteassets\.parastorage\.com/pages/pages/thunderbolt\?[^\"]+', text)
            for tb in tbs:
                thunderbolt_urls.add(tb)

    print(f"Found {len(thunderbolt_urls)} Thunderbolt endpoints.", flush=True)
    print("3. Fetching Thunderbolt JSON models...", flush=True)

    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = {executor.submit(fetch_url, tb): tb for tb in thunderbolt_urls}
        for future in as_completed(futures):
            u, text, err = future.result()
            if text:
                imgs = re.findall(r'([a-zA-Z0-9_]{6,}_[a-zA-Z0-9]{32}[~a-zA-Z0-9_.-]*\.(?:jpg|jpeg|png|webp|svg))', text, re.I)
                for img in imgs:
                    direct_media.add(f"https://static.wixstatic.com/media/{img}")
                ugds = re.findall(r'ugd/([a-zA-Z0-9_%~.-]+)', text)
                for ug in ugds:
                    pdf_docs.add(f"https://www.michaelsbackdoor.com/_files/ugd/{ug}")

    print(f"Discovered {len(direct_media)} unique media assets and {len(pdf_docs)} PDFs/documents.", flush=True)

    # Save manifest
    manifest = {
        'total_media': len(direct_media),
        'total_docs': len(pdf_docs),
        'media': sorted(list(direct_media)),
        'docs': sorted(list(pdf_docs))
    }
    with open('assets_manifest.json', 'w') as f:
        json.dump(manifest, f, indent=2)

    print("assets_manifest.json written successfully.", flush=True)

if __name__ == '__main__':
    main()
