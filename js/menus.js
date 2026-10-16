// MICHAEL'S BACK DOOR RESTAURANT — COMPREHENSIVE MENU DATABASE
// Audited from michaelsbackdoor.com & official wine/event menus

const MENU_DATA = {
  categories: [
    { id: 'all', name: 'All Dishes' },
    { id: 'antipasti', name: 'Antipasti & Insalate' },
    { id: 'pasta', name: 'Handcrafted Pasta' },
    { id: 'carne-pesce', name: 'Carne & Pesce' },
    { id: 'dolci', name: 'Dolci (Desserts)' },
    { id: 'wines', name: 'Curated Wine List' },
    { id: 'event-menus', name: 'Private Event Banquets' }
  ],
  items: [
    // ANTIPASTI, ZUPPE, INSALATE
    {
      id: 'bruschetta',
      category: 'antipasti',
      name: 'Bruschetta',
      italianName: 'Bruschetta Classica',
      description: 'Crostini, marinated tomatoes, sweet red onions, garlic, fresh basil, extra virgin olive oil.',
      price: '$7.99',
      image: 'assets/interior_and_ambience/table-setting-olive-oil-wine-glasses.jpg',
      tags: ['Vegetarian', 'Classic'],
      badge: 'Favorite'
    },
    {
      id: 'calamari-griglia',
      category: 'antipasti',
      name: 'Calamari alla Griglia',
      italianName: 'Calamari alla Griglia con Chorizo',
      description: 'Tender grilled calamari, spicy chorizo sausage, fire-roasted sweet red peppers, lemon herb emulsion.',
      price: '$19.99',
      image: 'assets/culinary_and_dishes/charcuterie-antipasto-board-highres.jpg',
      tags: ['Seafood', 'Gluten-Free Option'],
      badge: "Guest Favorite"
    },
    {
      id: 'bruschetta-trio',
      category: 'antipasti',
      name: 'Artisan Bruschetta Trio',
      italianName: 'Tris di Bruschette Artigianali',
      description: 'Calabrese toastini spread with whipped citrus ricotta, sautéed wild mushrooms, and house tomato jam.',
      price: '$14.99',
      image: 'assets/interior_and_ambience/dining-table-flatlay-herringbone-floor.jpg',
      tags: ['Vegetarian', 'Artisan'],
      badge: null
    },
    {
      id: 'rapini-fagioli',
      category: 'antipasti',
      name: 'Rapini e Fagioli Perle di Campo',
      italianName: 'Rapini e Fagioli all’Olio Santo',
      description: 'Steamed bitter rapini, tender white navy beans, cold-pressed EVOO, fresh lemon, roasted garlic.',
      price: '$13.99',
      image: 'assets/interior_and_ambience/table-setting-olive-oil-wine-glasses.jpg',
      tags: ['Vegetarian', 'Gluten-Free', 'Rustic Italian'],
      badge: null
    },
    {
      id: 'polpette-cinghiale',
      category: 'antipasti',
      name: 'Polpette di Cinghiale',
      italianName: 'Polpette di Cinghiale in Umido',
      description: 'Handmade wild boar meatballs, 24-month aged Parmigiano Reggiano, slow-simmered San Marzano tomato broth.',
      price: '$17.99',
      image: 'assets/culinary_and_dishes/gourmet-pasta-plating-sauce.jpg',
      tags: ['Chef Special', 'Game'],
      badge: "Chef's Craft"
    },
    {
      id: 'cozze-marinara',
      category: 'antipasti',
      name: 'Cozze alla Marinara',
      italianName: 'Cozze Fresche in Guazzetto',
      description: 'Steamed Prince Edward Island mussels, minced garlic, crisp Pinot Grigio white wine, marinara sauce.',
      price: '$16.99',
      image: 'assets/culinary_and_dishes/linguine-pescatore-seafood-pasta-highres.jpg',
      tags: ['Seafood', 'Gluten-Free Option'],
      badge: null
    },
    {
      id: 'gamberi-diavola',
      category: 'antipasti',
      name: 'Gamberi Diavola',
      italianName: 'Gamberoni alla Diavola',
      description: 'Sautéed black tiger shrimps, fiery Calabrian chili tomato sauce, fresh Italian parsley, grilled crostini.',
      price: '$19.99',
      image: 'assets/culinary_and_dishes/capelli-dangeli-lobster-angel-hair-wide.jpg',
      tags: ['Seafood', 'Spicy'],
      badge: null
    },
    {
      id: 'charcuterie-board',
      category: 'antipasti',
      name: 'Artisan Charcuterie Board',
      italianName: 'Tagliere di Salumi e Formaggi',
      description: 'Imported cured Italian meats (Prosciutto di Parma, Genoa salami, Soppressata), grilled seasonal vegetables, sun-dried tomatoes, Castelvetrano olives, artisan cheese, balsamic glazed crostini.',
      price: '$24.99',
      image: 'assets/culinary_and_dishes/charcuterie-antipasto-board-highres.jpg',
      tags: ['Sharable', 'Cured Meats', 'Artisan Cheese'],
      badge: 'Perfect for Two'
    },
    {
      id: 'artichoke-arancini',
      category: 'antipasti',
      name: 'Artichoke Arancini',
      italianName: 'Arancini di Carciofi al Basilico',
      description: 'Crispy panko-breaded artichoke and arborio risotto balls, melted mozzarella heart, aromatic sweet basil tomato sauce.',
      price: '$15.99',
      image: 'assets/culinary_and_dishes/antipasto-wooden-board-wine-bottle.jpg',
      tags: ['Vegetarian', 'Crispy'],
      badge: null
    },
    {
      id: 'zuppa-giorno',
      category: 'antipasti',
      name: 'Zuppa del Giorno',
      italianName: 'Zuppa Artigianale della Casa',
      description: 'Chef Mark D’Souza’s seasonal soup crafted from scratch daily with fresh market ingredients.',
      price: '$9.99',
      image: 'assets/interior_and_ambience/main-dining-room-burgundy-sconces.jpg',
      tags: ['Daily Feature'],
      badge: null
    },
    {
      id: 'insalata-casa',
      category: 'antipasti',
      name: 'Insalata della Casa',
      italianName: 'Insalata Mista di Stagione',
      description: 'Medley of crisp organic field greens, julienne of seasonal vegetables, Michael’s signature house balsamic vinaigrette.',
      price: '$9.99',
      image: 'assets/interior_and_ambience/table-setting-olive-oil-wine-glasses.jpg',
      tags: ['Vegetarian', 'Gluten-Free'],
      badge: null
    },
    {
      id: 'insalata-cesare',
      category: 'antipasti',
      name: 'Insalata alla Cesare',
      italianName: 'Cesare Classica con Crostini',
      description: 'Crisp romaine hearts, house creamy garlic dressing, toasted herb croutons, shaved 24-month Parmigiano Reggiano, lemon wedge.',
      price: '$14.99',
      image: 'assets/interior_and_ambience/dining-table-flatlay-herringbone-floor.jpg',
      tags: ['Classic'],
      badge: 'House Staple'
    },
    {
      id: 'insalata-caprese',
      category: 'antipasti',
      name: 'Insalata Caprese',
      italianName: 'Caprese Tradizionale con Fior di Latte',
      description: 'Ripe beefsteak tomatoes, fresh Fior di Latte mozzarella, grilled sweet onions, extra virgin olive oil, basil pesto drizzle.',
      price: '$17.99',
      image: 'assets/interior_and_ambience/solarium-dining-room-sunlight.jpg',
      tags: ['Vegetarian', 'Gluten-Free'],
      badge: null
    },
    {
      id: 'insalata-arugula',
      category: 'antipasti',
      name: 'Insalata Arugula',
      italianName: 'Rucola Selvatica con Caprino e Noci',
      description: 'Organic baby arugula, frisée, candied pecans, crumbled creamy goat cheese, julienne of crisp apple, honey Dijon mustard vinaigrette.',
      price: '$15.99',
      image: 'assets/interior_and_ambience/dining-table-wood-slat-feature-wall.jpg',
      tags: ['Vegetarian', 'Gluten-Free'],
      badge: null
    },

    // PASTA DISHES
    {
      id: 'capelli-dangeli',
      category: 'pasta',
      name: 'Capelli D’Angeli con Aragosta',
      italianName: 'Capelli D’Angeli all’Aragosta',
      description: 'Delicate angel hair pasta, generous succulent Atlantic lobster meat, velvety tomato cream rosé reduction, fresh chives.',
      price: '$39.99',
      image: 'assets/culinary_and_dishes/capelli-dangeli-lobster-angel-hair-wide.jpg',
      tags: ['House Signature', 'Seafood', 'Since 1981'],
      badge: '#1 Most Ordered'
    },
    {
      id: 'linguine-frutti-mare',
      category: 'pasta',
      name: 'Linguine Frutti di Mare',
      italianName: 'Linguine al Pescatoré',
      description: 'Bronze-die cut linguine, PEI mussels, Littleneck clams, tiger shrimp, sea scallops, white wine, garlic and San Marzano tomato sauce.',
      price: '$30.99',
      image: 'assets/culinary_and_dishes/linguine-pescatore-seafood-pasta-highres.jpg',
      tags: ['Seafood', 'Fresh Catch'],
      badge: 'Signature Seafood'
    },
    {
      id: 'penne-trasteverina',
      category: 'pasta',
      name: 'Penne Trasteverina',
      italianName: 'Penne alla Trasteverina',
      description: 'Al dente penne rigate, crispy smoked bacon, tender chicken breast strips, rich vodka rosé cream sauce.',
      price: '$24.99',
      image: 'assets/culinary_and_dishes/gourmet-pasta-plating-sauce.jpg',
      tags: ['Comfort Italian', 'Guest Favorite'],
      badge: 'Top Rated'
    },
    {
      id: 'gnocchi-napolitana',
      category: 'pasta',
      name: 'Gnocchi Napolitana',
      italianName: 'Gnocchi di Patate Fatti a Mano',
      description: 'Scratch-made pillowy potato dumplings, fresh basil, San Marzano plum tomato sauce, freshly shaved Parmigiano Reggiano.',
      price: '$24.99',
      image: 'assets/culinary_and_dishes/fresh-pasta-ravioli-craft.jpg',
      tags: ['Handmade', 'Vegetarian'],
      badge: 'Scratch Pasta'
    },
    {
      id: 'orecchiette',
      category: 'pasta',
      name: 'Orecchiette con Salsiccia e Rapini',
      italianName: 'Nonna’s Orecchiette Pugliesi',
      description: 'Pugliese ear-shaped pasta, crumbled Italian fennel sausage, sautéed rapini, sweet caramelized onions, roasted garlic brodo.',
      price: '$25.99',
      image: 'assets/culinary_and_dishes/gourmet-pasta-plating-sauce.jpg',
      tags: ['Regional Italian', 'Rustic'],
      badge: null
    },
    {
      id: 'agnolotti',
      category: 'pasta',
      name: 'Agnolotti di Ricotta e Spinaci',
      italianName: 'Agnolotti Fatti in Casa',
      description: 'Handmade folded pasta filled with creamy whole-milk ricotta and baby spinach, mascarpone white wine cream, toasted aromatic pangrattato herbs.',
      price: '$26.99',
      image: 'assets/culinary_and_dishes/fresh-pasta-ravioli-craft.jpg',
      tags: ['Handmade', 'Vegetarian'],
      badge: null
    },

    // CARNE & PESCE (MAINS)
    {
      id: 'filetto-vitello',
      category: 'carne-pesce',
      name: 'Filetto di Vitello',
      italianName: 'Filetto di Vitello ai Funghi Selvatici',
      description: 'Pan-seared prime Provimi veal tenderloin, sautéed wild woodland mushrooms, caramelized Cipollini onions, rich Amarone red wine demi-glace.',
      price: '$41.99',
      image: 'assets/culinary_and_dishes/veal-tenderloin-wild-mushrooms.jpg',
      tags: ['Prime Cut', 'Gluten-Free Option'],
      badge: 'Chef Signature'
    },
    {
      id: 'vitello-sorrentina',
      category: 'carne-pesce',
      name: 'Vitello Sorrentina',
      italianName: 'Scaloppine di Vitello alla Sorrentina',
      description: 'Tender veal scaloppine layered with grilled Italian eggplant, artisan Capicola, melted mozzarella, fragrant basil tomato sauce.',
      price: '$30.99',
      image: 'assets/culinary_and_dishes/veal-tenderloin-wild-mushrooms.jpg',
      tags: ['Classic Veal'],
      badge: null
    },
    {
      id: 'vitello-limone',
      category: 'carne-pesce',
      name: 'Vitello al Limone',
      italianName: 'Piccata di Vitello al Limone',
      description: 'Thinly pounded tender veal scaloppine sautéed in a delicate Pinot Grigio white wine, fresh lemon butter sauce with capers.',
      price: '$28.99',
      image: 'assets/culinary_and_dishes/veal-tenderloin-wild-mushrooms.jpg',
      tags: ['Classic Veal'],
      badge: null
    },
    {
      id: 'agnello',
      category: 'carne-pesce',
      name: 'Agnello al Forno',
      italianName: 'Carré d’Agnello alle Erbe',
      description: 'Herb-crusted roasted rack of New Zealand lamb, rosemary garlic marinade, rich Chianti red wine pan reduction.',
      price: '$60.99',
      image: 'assets/interior_and_ambience/wine-room-private-dining-table.jpg',
      tags: ['Prime Cut', 'Gluten-Free'],
      badge: 'Sommelier Choice'
    },
    {
      id: 'bistecca-griglia',
      category: 'carne-pesce',
      name: 'Bistecca alla Griglia',
      italianName: 'Controfiletto AAA con Salsa al Cognac',
      description: 'Grilled 10oz Prime AAA New York Strip Loin steak, crushed green peppercorn and Cognac cream sauce, roasted fingerling potatoes.',
      price: '$43.99',
      image: 'assets/interior_and_ambience/main-dining-room-burgundy-sconces.jpg',
      tags: ['AAA Beef', 'Steakhouse'],
      badge: null
    },
    {
      id: 'cioppino',
      category: 'carne-pesce',
      name: 'Cioppino di Pesce Tradizionale',
      italianName: 'Cioppino Imperiale con Aragosta',
      description: 'Black tiger shrimp, tender calamari, PEI mussels, Manila clams, Pacific prime cod fillet, and a succulent 1/2 lobster tail in garlic white wine tomato broth.',
      price: '$43.99',
      image: 'assets/culinary_and_dishes/linguine-pescatore-seafood-pasta-highres.jpg',
      tags: ['Seafood Extravaganza', 'Gluten-Free Option'],
      badge: 'Grand Feast'
    },
    {
      id: 'branzino',
      category: 'carne-pesce',
      name: 'Branzino Mediterraneo',
      italianName: 'Filetto di Spigola con Olive e Salsa',
      description: 'Crispy skin-on European Sea Bass fillet, Kalamata olives, fresh tomato concassé salsa, cold-pressed Sicilian lemon olive oil.',
      price: '$36.99',
      image: 'assets/culinary_and_dishes/branzino-sea-bass-fillet.jpg',
      tags: ['Fresh Catch', 'Gluten-Free'],
      badge: 'Healthy Mediterranean'
    },
    {
      id: 'salmone',
      category: 'carne-pesce',
      name: 'Salmone Atlantico Glassato',
      italianName: 'Salmone all’Acero e Mele',
      description: 'Pan-blackened fresh Canadian Atlantic salmon fillet, Ontario pure maple glaze, crisp heirloom apple and cabbage slaw.',
      price: '$29.99',
      image: 'assets/culinary_and_dishes/branzino-sea-bass-fillet.jpg',
      tags: ['Seafood', 'Gluten-Free'],
      badge: null
    },
    {
      id: 'pollo-supreme',
      category: 'carne-pesce',
      name: 'Pollo Farcito ai Funghi',
      italianName: 'Suprema di Pollo con Funghi e Dragoncello',
      description: 'Oven-roasted bone-in chicken supreme stuffed with seasoned wild mushrooms, velvet French tarragon white wine cream sauce.',
      price: '$29.99',
      image: 'assets/culinary_and_dishes/stuffed-chicken-supreme-mushrooms.jpg',
      tags: ['Poultry', 'Signature'],
      badge: null
    },
    {
      id: 'fegato',
      category: 'carne-pesce',
      name: 'Fegato di Vitello alla Veneziana',
      italianName: 'Fegato Provimi con Cipolle Rosse',
      description: 'Tender Provimi calves liver, sweet caramelized Spanish onions, Valpolicella red wine reduction sauce.',
      price: '$25.99',
      image: 'assets/interior_and_ambience/dining-table-flatlay-herringbone-floor.jpg',
      tags: ['Traditional Classic'],
      badge: null
    },

    // DOLCI (DESSERTS)
    {
      id: 'tiramisu',
      category: 'dolci',
      name: 'Tiramisu Tradizionale',
      italianName: 'Il Vero Tiramisù di Treviso',
      description: 'Traditional layered dessert with espresso-dipped Savoiardi ladyfingers, velvety mascarpone cream, dark cocoa dust, splash of sweet Florio Marsala.',
      price: '$11.95',
      image: 'assets/culinary_and_dishes/classic-tiramisu-dessert-goblet.jpg',
      tags: ['Handmade', 'House Staple'],
      badge: 'Legendary'
    },
    {
      id: 'b52-cheesecake',
      category: 'dolci',
      name: 'B-52 Liqueur Cheesecake',
      italianName: 'Cheesecake al Liquore B-52',
      description: 'Decadent homemade New York style cheesecake infused with Amarula Cream Liqueur, Tia Maria coffee liqueur, and Grand Marnier orange essence.',
      price: '$10.95',
      image: 'assets/culinary_and_dishes/homemade-cheesecake-berry-coulis.jpg',
      tags: ['Specialty Dessert'],
      badge: 'Unique Creation'
    },
    {
      id: 'toblerone-mousse',
      category: 'dolci',
      name: 'Toblerone Chocolate Mousse Cake',
      italianName: 'Torta Mousse ai Tre Cioccolati Toblerone',
      description: 'A harmonious trio of white, milk, and bittersweet chocolate mousses with honey-almond nougat crunch, enveloped in dark chocolate mirror glaze.',
      price: '$10.95',
      image: 'assets/culinary_and_dishes/chocolate-lava-torta.jpg',
      tags: ['Decadent Chocolate'],
      badge: null
    },
    {
      id: 'delizia-caramello',
      category: 'dolci',
      name: 'Delizia al Caramello (Crème Caramel)',
      italianName: 'Flan di Crema al Caramello Caldo',
      description: 'Silky smooth baked vanilla egg custard finished with an amber caramelized sugar syrup glaze.',
      price: '$8.95',
      image: 'assets/culinary_and_dishes/creme-caramel-dessert.jpg',
      tags: ['Gluten-Free', 'Classic'],
      badge: null
    },
    {
      id: 'semifreddo',
      category: 'dolci',
      name: 'Semifreddo al Cioccolato',
      italianName: 'Semifreddo della Casa in Cialda di Cioccolato',
      description: 'Artisan homemade ice cream served inside a crisp dark chocolate cup, drizzled with warm sea salt caramel and wild berry coulis.',
      price: '$8.95',
      image: 'assets/culinary_and_dishes/classic-tiramisu-dessert-goblet.jpg',
      tags: ['House Specialty'],
      badge: null
    },
    {
      id: 'sticky-toffee',
      category: 'dolci',
      name: 'Sticky Toffee Date Pudding',
      italianName: 'Budino Caldo ai Datteri e Caramello',
      description: 'Warm, moist Medjool date sponge cake smothered in rich buttery toffee sauce with vanilla chantilly.',
      price: '$9.95',
      image: 'assets/culinary_and_dishes/creme-caramel-dessert.jpg',
      tags: ['Warm Comfort'],
      badge: null
    },
    {
      id: 'sorbetto-limone',
      category: 'dolci',
      name: 'Sorbetto al Limone di Sicilia',
      italianName: 'Sorbetto ai Limoni di Sicilia',
      description: 'Refreshing, palate-cleansing Italian lemon sorbet with candied lemon peel and mint.',
      price: '$8.95',
      image: 'assets/interior_and_ambience/solarium-dining-room-sunlight.jpg',
      tags: ['Dairy-Free', 'Gluten-Free', 'Vegan'],
      badge: null
    },
    {
      id: 'cheese-board',
      category: 'dolci',
      name: 'Assorted Artisan Italian Cheese Board',
      italianName: 'Gran Tagliere di Formaggi Italiani',
      description: 'Curated selection of aged Parmigiano Reggiano, creamy Gorgonzola Dolce, Pecorino Romano, and Piave cheese, served with honeycomb and crostini.',
      price: '3 Cheese: $21.95 • 5 Cheese: $28.95',
      image: 'assets/culinary_and_dishes/charcuterie-antipasto-board-highres.jpg',
      tags: ['Digestivo', 'Artisan Cheese'],
      badge: null
    },

    // WINE LIST & CELLAR HIGHLIGHTS
    {
      id: 'wine-montepulciano',
      category: 'wines',
      name: 'Montepulciano D’Abruzzo "Murelle"',
      italianName: 'Murelle Cantina Miglianico (Abruzzo, Italy)',
      description: 'Rich dark ruby color, fragrant notes of wild blackberries, violet, dried cherries, and subtle oak spice. Soft, rounded tannins.',
      price: '6oz: $10.25 | 9oz: $15.25 | 1/2L: $29.25 | Bottle: $44.00',
      image: 'assets/interior_and_ambience/wine-cellar-bottle-racks.jpg',
      tags: ['House Red', 'Italian DOC'],
      badge: 'Popular Red'
    },
    {
      id: 'wine-pinot-grigio',
      category: 'wines',
      name: 'Pinot Grigio "Rechtsteiner"',
      italianName: 'Rechtsteiner Estate DOC (Veneto, Italy)',
      description: 'Crisp, bright, and refreshing. Citrus blossom, green Anjou pear, golden delicious apple, and vibrant mineral finish.',
      price: '6oz: $10.50 | 9oz: $15.50 | 1/2L: $30.00 | Bottle: $45.00',
      image: 'assets/interior_and_ambience/bar-bottles-campari-blown-glass-pendants.jpg',
      tags: ['House White', 'Italian DOC'],
      badge: 'Popular White'
    },
    {
      id: 'wine-chianti-davide',
      category: 'wines',
      name: 'Chianti "Davide" Antica Marca',
      italianName: 'Antica Marca DOCG (Tuscany, Italy)',
      description: 'Traditional Tuscan Sangiovese. Red cherry, dried tobacco leaf, wild thyme, elegant acidity that cuts through rich tomato and veal sauces.',
      price: '6oz: $11.50 | 9oz: $17.00 | 1/2L: $30.00 | Bottle: $45.00',
      image: 'assets/interior_and_ambience/wine-cellar-wall-perspective.jpg',
      tags: ['Tuscan Red', 'DOCG'],
      badge: null
    },
    {
      id: 'wine-appassimento',
      category: 'wines',
      name: 'Appassimento Tagaro Passo Del Sud',
      italianName: 'Passo Del Sud IGT (Puglia, Italy)',
      description: 'Sun-dried grapes yield an opulent, velvety body. Ripe plum, fig compote, bittersweet chocolate, and sweet spice.',
      price: '6oz: $11.50 | 9oz: $17.00 | 1/2L: $30.00 | Bottle: $45.00',
      image: 'assets/interior_and_ambience/wine-room-private-dining-table.jpg',
      tags: ['Full Bodied Red', 'Puglia'],
      badge: null
    },
    {
      id: 'wine-gaja-sito-moresco',
      category: 'wines',
      name: 'Langhe "Sito Moresco" GAJA 2020',
      italianName: 'Angelo Gaja (Piemonte, Italy)',
      description: 'Sommelier Reserve. Prestigious blend of Nebbiolo, Barbera, and Cabernet Sauvignon from legendary winemaker Angelo Gaja. Ripe black fruit, graphite, structured velvety depth.',
      price: 'Bottle: $179.00',
      image: 'assets/interior_and_ambience/wine-cellar-bottle-racks.jpg',
      tags: ['Sommelier Cellar', 'Rare Vintage', 'Piemonte'],
      badge: 'Rare Cellar Vintages'
    },
    {
      id: 'wine-ornellaia-serre-nuove',
      category: 'wines',
      name: 'Le Serre Nuove Dell’Ornellaia Rosso Bolgheri 2020',
      italianName: 'Tenuta dell’Ornellaia (Tuscany, Italy)',
      description: 'Second vin of the iconic Super Tuscan Ornellaia. Bordeaux blend of Merlot, Cabernet Sauvignon, Cabernet Franc, and Petit Verdot. Silky, blackcurrant, cedar, tobacco.',
      price: 'Bottle: $169.00',
      image: 'assets/interior_and_ambience/wine-room-private-dining-table.jpg',
      tags: ['Super Tuscan', 'Bolgheri DOC'],
      badge: 'Collector Choice'
    },

    // EVENT & BANQUET PACKAGES (1 to 6)
    {
      id: 'event-package-1',
      category: 'event-menus',
      name: 'Private Event Banquet Menu 1',
      italianName: 'Menù Celebrazione Uno',
      description: '4-Course Celebration Dinner: Traditional Caesar Salad with garlic croutons and Parmigiano • Penne Trasteverina with smoked bacon and chicken in vodka rosé sauce • Main choice of Blackened Atlantic Salmon with maple glaze or Roast Chicken Supreme stuffed with mushrooms • Chef’s Dessert.',
      price: '$58.00 per guest',
      image: 'assets/interior_and_ambience/solarium-french-doors-and-balcony.jpg',
      tags: ['Banquet Package', 'Popular for Showers & Parties'],
      badge: '$58 / Guest'
    },
    {
      id: 'event-package-2',
      category: 'event-menus',
      name: 'Private Event Banquet Menu 2',
      italianName: 'Menù Tradizionale Due',
      description: '4-Course Dinner with Veal: Caesar Salad • Penne Trasteverina • Choice of Veal Scaloppine with mushroom Marsala wine sauce, Blackened Atlantic Salmon with apple slaw, or Roast Chicken Supreme • Choice of House Dessert with Coffee or Tea.',
      price: '$61.00 per guest',
      image: 'assets/interior_and_ambience/main-dining-room-burgundy-sconces.jpg',
      tags: ['Banquet Package', 'Corporate & Family'],
      badge: '$61 / Guest'
    },
    {
      id: 'event-package-3',
      category: 'event-menus',
      name: 'Private Event Banquet Menu 3',
      italianName: 'Menù Supremo Tre',
      description: 'Elevated 4-Course Dinner: Gourmet Mixed Salad • Fresh Pasta Course • Entrée choice including Roast Chicken Supreme stuffed with mushrooms in tarragon cream sauce and fresh catch • Traditional Dessert Course with Italian espresso.',
      price: '$75.00 per guest',
      image: 'assets/interior_and_ambience/upstairs-at-michaels-wood-slat-lounge.jpg',
      tags: ['Banquet Package', 'Executive Gathering'],
      badge: '$75 / Guest'
    },
    {
      id: 'event-package-4',
      category: 'event-menus',
      name: 'Private Event Banquet Menu 4',
      italianName: 'Menù Gran Riserva Quattro',
      description: 'Luxury 4-Course Dinner featuring Roast Veal Tenderloin with caramelized onions, wild mushrooms, and Amarone reduction • Fresh Blackened Atlantic Salmon • Stuffed Chicken Supreme • Deluxe Dolci Course.',
      price: '$88.00 per guest',
      image: 'assets/interior_and_ambience/wine-room-private-dining-table.jpg',
      tags: ['Banquet Package', 'Weddings & Anniversaries'],
      badge: '$88 / Guest'
    },
    {
      id: 'event-package-5',
      category: 'event-menus',
      name: 'Private Event Banquet Menu 5',
      italianName: 'Menù Sommelier Cinque',
      description: 'Fine Dining Event Menu: Pan-Seared Veal Tenderloin with red wine demi-glace and woodland mushrooms • Fresh Atlantic Salmon with maple glaze • Choice of Chef Pasta and Salad • Premium Tiramisu and dessert selections.',
      price: '$90.00 per guest',
      image: 'assets/interior_and_ambience/dining-table-wood-slat-feature-wall.jpg',
      tags: ['Premium Banquet', 'VIP Buyout'],
      badge: '$90 / Guest'
    },
    {
      id: 'event-package-6',
      category: 'event-menus',
      name: 'Private Event Banquet Menu 6',
      italianName: 'Menù Il Capolavoro Sei',
      description: 'The Ultimate Michael’s Experience: Traditional Caesar Salad • Signature Capelli D’Angeli Angel Hair with Lobster Meat in tomato cream • Main Choice of Prime Veal Tenderloin, Blackened Salmon, or Stuffed Chicken Supreme • Grand Dessert Platter.',
      price: '$85.00 per guest',
      image: 'assets/culinary_and_dishes/capelli-dangeli-lobster-angel-hair-wide.jpg',
      tags: ['Includes Lobster Pasta', 'Most Celebrated'],
      badge: 'Lobster Pasta Course'
    }
  ],

  // Canapés and Add-ons from official documents
  canapes: [
    { name: 'Siljan Cup with Goat Cheese, Heirloom Tomato & Fresh Basil', price: '$2.75 / piece' },
    { name: 'Smoked Salmon Canapé with Lemon Dill Mascarpone', price: '$2.75 / piece' },
    { name: 'Prosciutto di Parma with Sweet Honeydew Melon', price: '$2.75 / piece' },
    { name: 'Double Cream Brie with Toasted Walnuts & Honey', price: '$2.75 / piece' },
    { name: 'Colossal Black Tiger Shrimp Cocktail with Cocktail Sauce (90 pcs)', price: '$195.00' },
    { name: 'Shaved Prime Roast Beef Crostini with Horseradish Crème', price: '$3.50 / piece' },
    { name: 'Crispy Spanakopita Spinach & Feta Phyllo', price: '$19.00 / dozen' }
  ],

  eventAddOns: [
    { name: 'Soup of the Day', price: '$8.00 per guest' },
    { name: 'Garden House Salad with Balsamic Dressing', price: '$9.00 per guest' },
    { name: 'Traditional Caesar Salad with Parmigiano', price: '$14.00 per guest' },
    { name: 'Mixed Seafood Platter (Shrimp, Scallop, Calamari, Clam, Mussels)', price: '$24.00 per guest' },
    { name: 'Mixed Antipasto Platter (Prosciutto, Salami, Bocconcini, Olives)', price: '$14.00 per guest' },
    { name: 'Side Penne Tomato Basil', price: '$8.00 per guest' }
  ]
};
