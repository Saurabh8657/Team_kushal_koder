let destinations =[
    {
      "id": 1,
      "imageURL": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2514/singapore1.jpg?crop=156:227&downsize=156:227",
      "city": "📍 Singapore",
      "country": "Australia",
      "description": "Experience the breathtaking beauty of Sydney, with its iconic Opera House and stunning harbor views.",
      "price": 1400,
      "offerPrice": 1199,
      "date": {
        "start": "2024-07-10",
        "end": "2024-07-18"
      },
      "ratings": 4.5,
      "package": "7 Days / 6 Nights",
      "lovedBy": 82
    },
    {
      "id": 2,
      "imageURL": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/ZF.jpg?crop=134:207&downsize=134:207",
      "city": "Goa",
      "country": "Italy",
      "description": "Immerse yourself in the rich history of Rome, exploring ancient ruins and indulging in delicious Italian cuisine.",
      "price": 1600,
      "offerPrice": 1399,
      "date": {
        "start": "2024-08-05",
        "end": "2024-08-15"
      },
      "ratings": 4.8,
      "package": "8 Days / 7 Nights",
      "lovedBy": 90
    },
    {
      "id": 3,
      "imageURL": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3067/I.jpg?crop=156:227&downsize=156:227",
      "city": "Thiland",
      "country": "Asia",
      "description": "Explore the stunning landscapes and vibrant culture of Cape Town, known for its Table Mountain and diverse wildlife.",
      "price": 1800,
      "offerPrice": 1599,
      "date": {
        "start": "2024-09-01",
        "end": "2024-09-10"
      },
      "ratings": 4.7,
      "package": "9 Days / 8 Nights",
      "lovedBy": 88
    },
    {
      "id": 4,
      "imageURL": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1971/PetronasTwinTowersAndKLCCPark.jpg?crop=156:227&downsize=156:227",
      "city": "Malaysia",
      "country": "Malaysia",
      "description": "Experience the vibrant street life and cultural richness of Bangkok, from ancient temples to bustling markets.",
      "price": 1300,
      "offerPrice": 1099,
      "date": {
        "start": "2024-10-15",
        "end": "2024-10-22"
      },
      "ratings": 4.6,
      "package": "7 Days / 6 Nights",
      "lovedBy": 85
    },
    {
      "id": 5,
      "imageURL": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/majestic-mauritus-and-dubai.jpg?crop=156:227&downsize=156:227",
      "city": "Dubai",
      "country": "United Arab Emirates",
      "description": "Indulge in luxury in the modern metropolis of Dubai, home to stunning skyscrapers and desert adventures.",
      "price": 2000,
      "offerPrice": 1799,
      "date": {
        "start": "2024-11-10",
        "end": "2024-11-18"
      },
      "ratings": 4.9,
      "package": "8 Days / 7 Nights",
      "lovedBy": 95
    },
    {
      "id": 6,
      "imageURL": "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbmFkYXxlbnwwfHwwfHx8MA%3D%3D",
      "city": "Toronto",
      "country": "Canada",
      "description": "Discover the natural beauty of Vancouver, surrounded by mountains and the Pacific Ocean.",
      "price": 1500,
      "offerPrice": 1299,
      "date": {
        "start": "2024-12-05",
        "end": "2024-12-12"
      },
      "ratings": 4.7,
      "package": "7 Days / 6 Nights",
      "lovedBy": 89
    },
    {
      "id": 7,
      "imageURL": "https://plus.unsplash.com/premium_photo-1673241100156-2e04fca1a4af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "city": "Prague",
      "country": "Czech Republic",
      "description": "Step into the fairy-tale charm of Prague, with its medieval architecture and picturesque streets.",
      "price": 1700,
      "offerPrice": 1499,
      "date": {
        "start": "2025-01-10",
        "end": "2025-01-18"
      },
      "ratings": 4.6,
      "package": "8 Days / 7 Nights",
      "lovedBy": 87
    },
    {
      "id": 8,
      "imageURL": "https://images.unsplash.com/photo-1513564774965-ac25ddf81e1e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "city": "Rio de Janeiro",
      "country": "Brazil",
      "description": "Experience the vibrant energy of Rio de Janeiro, with its famous beaches, samba music, and iconic Carnival.",
      "price": 1900,
      "offerPrice": 1699,
      "date": {
        "start": "2025-02-15",
        "end": "2025-02-25"
      },
      "ratings": 4.8,
      "package": "10 Days / 9 Nights",
      "lovedBy": 92
    },
    {
      "id": 9,
      "imageURL": "https://images.unsplash.com/photo-1619995745882-f4128ac82ad6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzdGluYXRpb25zfGVufDB8fDB8fHww",
      "city": "Seoul",
      "country": "South Korea",
      "description": "Immerse yourself in the dynamic culture and modern technology of Seoul, the bustling capital of South Korea.",
      "price": 1500,
      "offerPrice": 1299,
      "date": {
        "start": "2025-03-10",
        "end": "2025-03-18"
      },
      "ratings": 4.7,
      "package": "7 Days / 6 Nights",
      "lovedBy": 91
    },
    {
      "id": 10,
      "imageURL": "https://images.unsplash.com/photo-1588178197976-5818ee7fb0fc?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "city": "Amsterdam",
      "country": "Netherlands",
      "description": "Explore the charming canals and historic architecture of Amsterdam, known for its artistic heritage.",
      "price": 1600,
      "offerPrice": 1399,
      "date": {
        "start": "2025-04-05",
        "end": "2025-04-15"
      },
      "ratings": 4.6,
      "package": "8 Days / 7 Nights",
      "lovedBy": 86
    },
  {
      "id": 11,
      "imageURL": "https://images.unsplash.com/photo-1565523925028-812f891b0e8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "city": "Buenos Aires",
      "country": "Argentina",
      "description": "Experience the vibrant culture and tango rhythms of Buenos Aires, set against a backdrop of historic architecture.",
      "price": 1700,
      "offerPrice": 1499,
      "date": {
        "start": "2025-05-10",
        "end": "2025-05-18"
      },
      "ratings": 4.7,
      "package": "8 Days / 7 Nights",
      "lovedBy": 88
    },
    {
      "id": 12,
      "imageURL": "https://images.unsplash.com/photo-1570398166023-9e9463d87c68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "city": "Marrakech",
      "country": "Morocco",
      "description": "Immerse yourself in the exotic sights and sounds of Marrakech, with its bustling souks and historic palaces.",
      "price": 1500,
      "offerPrice": 1299,
      "date": {
        "start": "2025-06-15",
        "end": "2025-06-25"
      },
      "ratings": 4.6,
      "package": "6 Days / 5 Nights",
      "lovedBy": 90
    },
    {
      "id": 13,
      "imageURL": "https://images.unsplash.com/photo-1579454091757-05ccc063cc49?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "city": "Hanoi",
      "country": "Vietnam",
      "description": "Discover the charm of Hanoi, with its ancient temples, delicious street food, and unique water puppetry.",
      "price": 1300,
      "offerPrice": 1099,
      "date": {
        "start": "2025-07-10",
        "end": "2025-07-18"
      },
      "ratings": 4.8,
      "package": "7 Days / 6 Nights",
      "lovedBy": 92
    },
    {
      "id": 14,
      "imageURL": "https://images.unsplash.com/photo-1594661745200-810105bcf054?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "city": "Stockholm",
      "country": "Sweden",
      "description": "Explore the beauty of Stockholm, a city spread across 14 islands, with its historic buildings and modern design.",
      "price": 1800,
      "offerPrice": 1599,
      "date": {
        "start": "2025-08-05",
        "end": "2025-08-15"
      },
      "ratings": 4.7,
      "package": "8 Days / 7 Nights",
      "lovedBy": 86
    },
    {
      "id": 15,
      "imageURL": "https://images.unsplash.com/photo-1584812261582-efe582e4c124?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "city": "Cairo",
      "country": "Egypt",
      "description": "Step back in time and explore the ancient wonders of Cairo, including the Pyramids and Sphinx.",
      "price": 1900,
      "offerPrice": 1699,
      "date": {
        "start": "2025-09-01",
        "end": "2025-09-10"
      },
      "ratings": 4.5,
      "package": "9 Days / 8 Nights",
      "lovedBy": 94
    },
    {
      "id": 16,
      "imageURL": "https://images.unsplash.com/photo-1597371629705-ea7520b8ab31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "city": "Vienna",
      "country": "Austria",
      "description": "Experience the classical elegance of Vienna, with its imperial palaces, classical music, and vibrant coffee culture.",
      "price": 1600,
      "offerPrice": 1399,
      "date": {
        "start": "2025-10-15",
        "end": "2025-10-22"
      },
      "ratings": 4.9,
      "package": "7 Days / 6 Nights",
      "lovedBy": 91
    },
    {
      "id": 17,
      "imageURL": "https://example.com/destination17.jpg",
      "city": "Copenhagen",
      "country": "Denmark",
      "description": "Explore the charming streets and historic landmarks of Copenhagen, a city known for its cycling culture.",
      "price": 1400,
      "offerPrice": 1199,
      "date": {
        "start": "2025-11-10",
        "end": "2025-11-18"
      },
      "ratings": 4.6,
      "package": "8 Days / 7 Nights",
      "lovedBy": 89
    },
    {
      "id": 18,
      "imageURL": "https://example.com/destination18.jpg",
      "city": "Istanbul",
      "country": "Turkey",
      "description": "Immerse yourself in the vibrant blend of East and West in Istanbul, with its historic mosques and bustling bazaars.",
      "price": 2000,
      "offerPrice": 1799,
      "date": {
        "start": "2025-12-05",
        "end": "2025-12-12"
      },
      "ratings": 4.7,
      "package": "7 Days / 6 Nights",
      "lovedBy": 87
    },
    {
      "id": 19,
      "imageURL": "https://example.com/destination19.jpg",
      "city": "Edinburgh",
      "country": "Scotland",
      "description": "Discover the historic charm of Edinburgh, with its medieval architecture, Royal Mile, and stunning views.",
      "price": 1700,
      "offerPrice": 1499,
      "date": {
        "start": "2026-01-10",
        "end": "2026-01-18"
      },
      "ratings": 4.8,
      "package": "8 Days / 7 Nights",
      "lovedBy": 93
    },
    {
      "id": 20,
      "imageURL": "https://example.com/destination20.jpg",
      "city": "Reykjavik",
      "country": "Iceland",
      "description": "Experience the otherworldly landscapes of Reykjavik, with its geysers, hot springs, and the stunning Northern Lights.",
      "price": 1500,
      "offerPrice": 1299,
      "date": {
        "start": "2026-02-15",
        "end": "2026-02-25"
      },
      "ratings": 4.6,
      "package": "10 Days / 9 Nights",
      "lovedBy": 90
    },
  {
      "id": 21,
      "imageURL": "https://example.com/destination21.jpg",
      "city": "Singapore",
      "country": "Singapore",
      "description": "Explore the modern and futuristic city-state of Singapore, known for its iconic skyline and diverse culinary scene.",
      "price": 1600,
      "offerPrice": 1399,
      "date": {
        "start": "2026-03-10",
        "end": "2026-03-18"
      },
      "ratings": 4.7,
      "package": "7 Days / 6 Nights",
      "lovedBy": 88
    },
    {
      "id": 22,
      "imageURL": "https://example.com/destination22.jpg",
      "city": "Athens",
      "country": "Greece",
      "description": "Immerse yourself in the ancient history and culture of Athens, with its iconic Acropolis and historic ruins.",
      "price": 1800,
      "offerPrice": 1599,
      "date": {
        "start": "2026-04-05",
        "end": "2026-04-15"
      },
      "ratings": 4.6,
      "package": "8 Days / 7 Nights",
      "lovedBy": 91
    },
    {
      "id": 23,
      "imageURL": "https://example.com/destination23.jpg",
      "city": "Krakow",
      "country": "Poland",
      "description": "Discover the historical charm of Krakow, with its well-preserved medieval architecture and vibrant cultural scene.",
      "price": 1400,
      "offerPrice": 1199,
      "date": {
        "start": "2026-05-10",
        "end": "2026-05-18"
      },
      "ratings": 4.8,
      "package": "8 Days / 7 Nights",
      "lovedBy": 94
    },
    {
      "id": 24,
      "imageURL": "https://example.com/destination24.jpg",
      "city": "Kyoto",
      "country": "Japan",
      "description": "Experience the traditional beauty of Kyoto, with its ancient temples, tea houses, and serene gardens.",
      "price": 2000,
      "offerPrice": 1799,
      "date": {
        "start": "2026-06-15",
        "end": "2026-06-25"
      },
      "ratings": 4.9,
      "package": "6 Days / 5 Nights",
      "lovedBy": 90
    },
    {
      "id": 25,
      "imageURL": "https://example.com/destination25.jpg",
      "city": "Dublin",
      "country": "Ireland",
      "description": "Explore the friendly and lively atmosphere of Dublin, known for its historic pubs, castles, and literary heritage.",
      "price": 1700,
      "offerPrice": 1499,
      "date": {
        "start": "2026-07-10",
        "end": "2026-07-18"
      },
      "ratings": 4.7,
      "package": "9 Days / 8 Nights",
      "lovedBy": 87
    },
    {
      "id": 26,
      "imageURL": "https://example.com/destination26.jpg",
      "city": "Munich",
      "country": "Germany",
      "description": "Experience the cultural richness and Oktoberfest spirit of Munich, surrounded by historic architecture and museums.",
      "price": 1500,
      "offerPrice": 1299,
      "date": {
        "start": "2026-08-05",
        "end": "2026-08-15"
      },
      "ratings": 4.6,
      "package": "7 Days / 6 Nights",
      "lovedBy": 89
    },
    {
      "id": 27,
      "imageURL": "https://example.com/destination27.jpg",
      "city": "Cape Town",
      "country": "South Africa",
      "description": "Explore the stunning landscapes and vibrant culture of Cape Town, known for its Table Mountain and diverse wildlife.",
      "price": 1900,
      "offerPrice": 1699,
      "date": {
        "start": "2026-09-01",
        "end": "2026-09-10"
      },
      "ratings": 4.8,
      "package": "10 Days / 9 Nights",
      "lovedBy": 93
    },
    {
      "id": 28,
      "imageURL": "https://example.com/destination28.jpg",
      "city": "Lisbon",
      "country": "Portugal",
      "description": "Discover the charm of Lisbon, with its historic neighborhoods, scenic views, and vibrant street life.",
      "price": 1600,
      "offerPrice": 1399,
      "date": {
        "start": "2026-10-15",
        "end": "2026-10-22"
      },
      "ratings": 4.7,
      "package": "8 Days / 7 Nights",
      "lovedBy": 92
    },
    {
      "id": 29,
      "imageURL": "https://example.com/destination29.jpg",
      "city": "Auckland",
      "country": "New Zealand",
      "description": "Experience the natural beauty and Maori culture of Auckland, surrounded by harbors, parks, and volcanic landscapes.",
      "price": 1700,
      "offerPrice": 1499,
      "date": {
        "start": "2026-11-10",
        "end": "2026-11-18"
      },
      "ratings": 4.6,
      "package": "8 Days / 7 Nights",
      "lovedBy": 95
    },
    {
      "id": 30,
      "imageURL": "https://example.com/destination30.jpg",
      "city": "Moscow",
      "country": "Russia",
      "description": "Immerse yourself in the rich history and grandeur of Moscow, exploring iconic landmarks and cultural treasures.",
      "price": 2000,
      "offerPrice": 1799,
      "date": {
        "start": "2026-12-05",
        "end": "2026-12-12"
      },
      "ratings": 4.9,
      "package": "7 Days / 6 Nights",
      "lovedBy": 86
    },
  {
      "id": 31,
      "imageURL": "https://example.com/destination31.jpg",
      "city": "Bali",
      "country": "Indonesia",
      "description": "Escape to the tropical paradise of Bali, with its pristine beaches, lush landscapes, and vibrant cultural scene.",
      "price": 1500,
      "offerPrice": 1299,
      "date": {
        "start": "2027-01-10",
        "end": "2027-01-18"
      },
      "ratings": 4.7,
      "package": "7 Days / 6 Nights",
      "lovedBy": 88
    },
    {
      "id": 32,
      "imageURL": "https://example.com/destination32.jpg",
      "city": "Vienna",
      "country": "Austria",
      "description": "Experience the classical elegance of Vienna, with its imperial palaces, classical music, and vibrant coffee culture.",
      "price": 1600,
      "offerPrice": 1399,
      "date": {
        "start": "2027-02-15",
        "end": "2027-02-25"
      },
      "ratings": 4.9,
      "package": "10 Days / 9 Nights",
      "lovedBy": 91
    },
    {
      "id": 33,
      "imageURL": "https://example.com/destination33.jpg",
      "city": "Cape Town",
      "country": "South Africa",
      "description": "Explore the stunning landscapes and vibrant culture of Cape Town, known for its Table Mountain and diverse wildlife.",
      "price": 1900,
      "offerPrice": 1699,
      "date": {
        "start": "2027-03-10",
        "end": "2027-03-18"
      },
      "ratings": 4.8,
      "package": "8 Days / 7 Nights",
      "lovedBy": 93
    },
    {
      "id": 34,
      "imageURL": "https://example.com/destination34.jpg",
      "city": "Amsterdam",
      "country": "Netherlands",
      "description": "Explore the charming canals and historic architecture of Amsterdam, known for its artistic heritage.",
      "price": 1700,
      "offerPrice": 1499,
      "date": {
        "start": "2027-04-05",
        "end": "2027-04-15"
      },
      "ratings": 4.6,
      "package": "8 Days / 7 Nights",
      "lovedBy": 86
    },
    {
      "id": 35,
      "imageURL": "https://example.com/destination35.jpg",
      "city": "Cancun",
      "country": "Mexico",
      "description": "Relax on the pristine beaches of Cancun, known for its turquoise waters, vibrant nightlife, and ancient Mayan ruins.",
      "price": 2000,
      "offerPrice": 1799,
      "date": {
        "start": "2027-05-10",
        "end": "2027-05-18"
      },
      "ratings": 4.7,
      "package": "9 Days / 8 Nights",
      "lovedBy": 87
    },
    {
      "id": 36,
      "imageURL": "https://example.com/destination36.jpg",
      "city": "Oslo",
      "country": "Norway",
      "description": "Discover the modern and cultural delights of Oslo, surrounded by fjords, museums, and scenic parks.",
      "price": 1400,
      "offerPrice": 1199,
      "date": {
        "start": "2027-06-15",
        "end": "2027-06-25"
      },
      "ratings": 4.8,
      "package": "7 Days / 6 Nights",
      "lovedBy": 94
    },
    {
      "id": 37,
      "imageURL": "https://example.com/destination37.jpg",
      "city": "Havana",
      "country": "Cuba",
      "description": "Immerse yourself in the vibrant culture and historic charm of Havana, with its colorful streets and lively music scene.",
      "price": 1500,
      "offerPrice": 1299,
      "date": {
        "start": "2027-07-10",
        "end": "2027-07-18"
      },
      "ratings": 4.7,
      "package": "8 Days / 7 Nights",
      "lovedBy": 92
    },
    {
      "id": 38,
      "imageURL": "https://example.com/destination38.jpg",
      "city": "Krakow",
      "country": "Poland",
      "description": "Discover the historical charm of Krakow, with its well-preserved medieval architecture and vibrant cultural scene.",
      "price": 1600,
      "offerPrice": 1399,
      "date": {
        "start": "2027-08-05",
        "end": "2027-08-15"
      },
      "ratings": 4.6,
      "package": "8 Days / 7 Nights",
      "lovedBy": 91
    },
    {
      "id": 39,
      "imageURL": "https://example.com/destination39.jpg",
      "city": "Bangkok",
      "country": "Thailand",
      "description": "Experience the vibrant street life and cultural richness of Bangkok, from ancient temples to bustling markets.",
      "price": 1800,
      "offerPrice": 1599,
      "date": {
        "start": "2027-09-01",
        "end": "2027-09-10"
      },
      "ratings": 4.7,
      "package": "7 Days / 6 Nights",
      "lovedBy": 95
    },
    {
      "id": 40,
      "imageURL": "https://example.com/destination40.jpg",
      "city": "Dubrovnik",
      "country": "Croatia",
      "description": "Explore the historic walls and scenic beauty of Dubrovnik, a city known for its medieval architecture and coastal views.",
      "price": 1300,
      "offerPrice": 1099,
      "date": {
        "start": "2027-10-15",
        "end": "2027-10-22"
      },
      "ratings": 4.8,
      "package": "7 Days / 6 Nights",
      "lovedBy": 89
    }
  ]
  module.exports = destinations;