    // ----------------------------------------------------
    // 1. Ad Data Array (सभी 17 पार्टनर लिंक्स और विवरण)
    // ----------------------------------------------------
    const ad_data = [
        {
            id: 'myntra',
            image: "https://placehold.co/600x300/e91e63/ffffff?text=Myntra+EOSS", 
            link: "https://myntr.it/v4oXQI7",
            alt: "Myntra Fashion Sale",
            title: "Myntra End of Season Sale",
            description: "फैशन और स्टाइल पर 70% तक की छूट! टॉप ब्रांड्स, शानदार डील्स।",
            offer_tag: "MAX 70% OFF",
            cta: "अभी शॉपिंग करें",
            icon: "fas fa-shopping-bag" 
        },
        {
            id: 'flipkart',
            image: "https://placehold.co/600x300/2196f3/ffffff?text=Flipkart+Deals",
            link: "https://fktr.in/r3b34q7",
            alt: "Flipkart Big Saving Days",
            title: "Flipkart Big Saving",
            description: "इलेक्ट्रॉनिक्स, मोबाइल्स पर बड़ी बचत। क्रेज़ी डील्स और बैंक ऑफर्स!",
            offer_tag: "BANK OFFER",
            cta: "ऑफर देखें",
            icon: "fas fa-bolt" 
        },
        {
            id: 'jiomart',
            image: "https://placehold.co/600x300/ff9800/ffffff?text=JioMart+Grocery",
            link: "https://bitli.in/aOfpgsx",
            alt: "Jio Mart Grocery Offers",
            title: "Jio Mart: घर का राशन",
            description: "दैनिक राशन पर 50% तक की बचत। घर बैठे फ़ास्ट डिलीवरी पाएं।",
            offer_tag: "FRESH DEAL",
            cta: "किराना ऑर्डर करें",
            icon: "fas fa-utensils" 
        },
        {
            id: 'sbi',
            image: "https://placehold.co/600x300/00bcd4/ffffff?text=SBI+Card",
            link: "https://bitli.in/qLjpwq9",
            alt: "SBI Cashback Credit Card",
            title: "SBI Cashback Card",
            description: "हर ऑनलाइन ख़र्च पर अनलिमिटेड 5% कैशबैक! बेस्ट रिवॉर्ड पॉइंट स्कीम।",
            offer_tag: "5% UNLIMITED",
            cta: "अभी अप्लाई करें",
            icon: "fab fa-cc-visa" 
        },
        {
            id: 'oneplus',
            image: "https://placehold.co/600x300/e53935/ffffff?text=OnePlus+Flagship",
            link: "https://bitli.in/Tpa0IoE",
            alt: "One Plus Latest Phone",
            title: "OnePlus New Launch",
            description: "शानदार प्रोसेसर और 100W चार्जिंग वाला नया फ्लैगशिप स्मार्टफोन!",
            offer_tag: "NEW LAUNCH",
            cta: "खरीदें",
            icon: "fas fa-mobile-alt" 
        },
        {
            id: 'acer',
            image: "https://placehold.co/600x300/00bfa5/ffffff?text=Acer+Laptops",
            link: "https://bitli.in/eTa78II",
            alt: "Acer Laptop Deals",
            title: "Acer Power Laptops",
            description: "गेमिंग और वर्क के लिए हाई-परफॉर्मेंस लैपटॉप्स पर बड़ी छूट पाएं।",
            offer_tag: "FLAT DISCOUNT",
            cta: "डील्स देखें",
            icon: "fas fa-laptop"
        },
        {
            id: 'angelone',
            image: "https://placehold.co/600x300/4db6ac/ffffff?text=Angel+One+Demat",
            link: "https://bitli.in/X1lALD3",
            alt: "Angel One Demat Account",
            title: "Angel One Demat",
            description: "फ्री डीमैट अकाउंट खोलें और ₹0 ब्रोकरेज पर ट्रेडिंग शुरू करें।",
            offer_tag: "ZERO BROKERAGE",
            cta: "अकाउंट खोलें",
            icon: "fas fa-chart-line" 
        },
        {
            id: 'bajaj',
            image: "https://placehold.co/600x300/fbc02d/ffffff?text=Bajaj+Finserv",
            link: "https://bitli.in/CqNffsJ",
            alt: "Bajaj Finserv Personal Loan",
            title: "Bajaj Finserv Loan",
            description: "पर्सनल लोन तुरंत पाएं! कम ब्याज दर, आसान पेपरवर्क और फास्ट डिस्बर्सल।",
            offer_tag: "INSTANT LOAN",
            cta: "लोन अप्लाई करें",
            icon: "fas fa-hand-holding-usd" 
        },
        {
            id: 'noise',
            image: "https://placehold.co/600x300/3949ab/ffffff?text=Noise+Watch",
            link: "https://bitli.in/poYe0Iz",
            alt: "Noise Smartwatch Sale",
            title: "Noise Smartwatches",
            description: "स्टाइलिश स्मार्टवॉच पर 60% ऑफ। एडवांस हेल्थ ट्रैकिंग फीचर्स के साथ।",
            offer_tag: "60% OFF",
            cta: "अभी खरीदें",
            icon: "fas fa-stopwatch" 
        },
        {
            id: 'timesprime',
            image: "https://placehold.co/600x300/7e57c2/ffffff?text=Times+Prime",
            link: "https://bitli.in/KYO9Wty",
            alt: "Times Prime Membership Offer",
            title: "Times Prime Pass",
            description: "Netflix, Swiggy, Zomato, Gaana का कॉम्बो सब्सक्रिप्शन एक ही पास में।",
            offer_tag: "SUPER VALUE",
            cta: "ज्वाइन करें",
            icon: "fas fa-star" 
        },
        {
            id: 'hostinger',
            image: "https://placehold.co/600x300/ff7043/ffffff?text=Hostinger+Hosting",
            link: "https://bitli.in/q4Rxf0K",
            alt: "Hostinger Web Hosting",
            title: "Hostinger Hosting",
            description: "तेज और विश्वसनीय वेबसाइट होस्टिंग। 80% छूट + फ्री डोमेन पाएं!",
            offer_tag: "80% DISCOUNT",
            cta: "होस्टिंग खरीदें",
            icon: "fas fa-globe" 
        },
        {
            id: 'bhimupi',
            image: "https://placehold.co/600x300/81c784/ffffff?text=BHIM+UPI",
            link: "https://bitli.in/5ahqpRO",
            alt: "BHIM UPI App Download",
            title: "BHIM UPI App",
            description: "आसान और सुरक्षित डिजिटल भुगतान के लिए BHIM UPI ऐप डाउनलोड करें।",
            offer_tag: "FAST PAYMENTS",
            cta: "डाउनलोड करें",
            icon: "fas fa-mobile-alt" 
        },
        {
            id: 'bob',
            image: "https://placehold.co/600x300/aed581/ffffff?text=BOB+Card",
            link: "https://bitli.in/FqNu8jb",
            alt: "BOB Cashback Credit Card",
            title: "BOB Cashback Card",
            description: "बैंक ऑफ बड़ौदा कैशबैक क्रेडिट कार्ड! फ्यूल और बिल पेमेंट्स पर एक्स्ट्रा रिवॉर्ड्स।",
            offer_tag: "EXTRA REWARDS",
            cta: "अप्लाई करें",
            icon: "fas fa-credit-card" 
        },
        {
            id: 'oppo',
            image: "https://placehold.co/600x300/ffa726/ffffff?text=Oppo+New",
            link: "https://bitli.in/BvPQpfx",
            alt: "Oppo New Phone Series",
            title: "Oppo New Phone",
            description: "Oppo के नए फोन में 50MP AI कैमरा और 60W फास्ट चार्जिंग का सपोर्ट।",
            offer_tag: "CAMERA FOCUS",
            cta: "स्पेक्स देखें",
            icon: "fas fa-camera" 
        },
        {
            id: 'realme',
            image: "https://placehold.co/600x300/4dd0e1/ffffff?text=Realme+Series",
            link: "https://bitli.in/mRJDzfp",
            alt: "Realme Smartphone Offers",
            title: "Realme Offers",
            description: "पावरफुल बैटरी और लेटेस्ट फीचर्स के साथ Realme स्मार्टफोन्स पर एक्सचेंज ऑफर।",
            offer_tag: "EXCHANGE OFFER",
            cta: "ऑफर देखें",
            icon: "fas fa-exchange-alt" 
        },
        {
            id: 'kotak',
            image: "https://placehold.co/600x300/ff8a65/ffffff?text=Kotak+Bank",
            link: "https://bitli.in/tJiJG13",
            alt: "Kotak Saving Account",
            title: "Kotak Savings Account",
            description: "Kotak में ज़ीरो बैलेंस सेविंग अकाउंट खोलें और तुरंत Virtual Debit Card पाएं।",
            offer_tag: "ZERO BALANCE",
            cta: "अकाउंट खोलें",
            icon: "fas fa-university" 
        },
        {
            id: 'sbi_loan',
            image: "https://placehold.co/600x300/e0e0e0/000000?text=SBI+Personal+Loan",
            link: "https://bitli.in/qLjpwq9",
            alt: "SBI Personal Loan",
            title: "SBI Instant Loan",
            description: "एसबीआई से पर्सनल लोन तुरंत प्राप्त करें। कम से कम डॉक्यूमेंटेशन के साथ।",
            offer_tag: "LOW EMI",
            cta: "अप्लाई करें",
            icon: "fas fa-money-bill-wave" 
        }
    ];

    // ----------------------------------------------------
    // 2. Random Selection Logic (रैंडम 2 Ad चुनें)
    // ----------------------------------------------------
    function getRandomAds(arr, num) {
        if (arr.length < num) {
            return arr; 
        }
        
        // Array को shuffle (उलटना) करें
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        
        // पहले 'num' (यानी 2) elements चुनें
        return shuffled.slice(0, num);
    }

    const adsToShow = getRandomAds(ad_data, 2); 

    // ----------------------------------------------------
    // 3. Ad Rendering Function
    // ----------------------------------------------------
    function createAdHTML(ad) {
        return `
            <div class="ad-card">
                <a href="${ad.link}" target="_blank" rel="noopener noreferrer" class="ad-link">
                    <div class="ad-header">
                        <span class="ad-tag">${ad.offer_tag}</span>
                        <img 
                            src="${ad.image}" 
                            alt="${ad.alt}" 
                            onerror="this.onerror=null; this.src='https://placehold.co/600x300/616161/ffffff?text=Ad+Image+Missing';"
                        />
                    </div>
                    <div class="ad-content">
                        <h4>
                            <i class="${ad.icon} ad-icon"></i>
                            ${ad.title}
                        </h4>
                        <p class="ad-description">
                            ${ad.description} 
                        </p>
                        <span class="ad-cta">
                            ${ad.cta} 
                        </span>
                    </div>
                </a>
            </div>
        `;
    }

    // ----------------------------------------------------
    // 4. Injecting Ads into specific IDs
    // ----------------------------------------------------

    const injector1 = document.getElementById('ad-injector1');
    const injector2 = document.getElementById('ad-injector2');

    // सुनिश्चित करें कि हमें 2 Ads मिले हैं
    if (adsToShow.length === 2) {
        const ad1HTML = createAdHTML(adsToShow[0]);
        const ad2HTML = createAdHTML(adsToShow[1]);
        
        // Injecting Ad 1
        if (injector1) {
            injector1.innerHTML = `<div class="ad-container">${ad1HTML}</div>`;
        } else {
            // अगर ID मौजूद नहीं है, तो Fallback के लिए document.write का उपयोग करें 
            // या एक एरर लॉग करें
            console.warn("ad-injector1 ID not found. Injecting Ad 1 inline.");
            document.write(`<div class="ad-container">${ad1HTML}</div>`);
        }

        // Injecting Ad 2
        if (injector2) {
            injector2.innerHTML = `<div class="ad-container">${ad2HTML}</div>`;
        } else {
            console.warn("ad-injector2 ID not found. Injecting Ad 2 inline.");
            // अगर ad-injector1 inject हो गया है, तो Ad 2 को भी वहीं inject करें 
            // (यह कंटेनर के अंदर दूसरा ad बन जाएगा, जिससे वे साइड-बाय-साइड दिखेंगे)
            if (injector1) {
                injector1.querySelector('.ad-container').innerHTML += ad2HTML;
            } else {
                document.write(`<div class="ad-container">${ad2HTML}</div>`);
            }
        }
    } else if (adsToShow.length === 1) {
        // अगर array में केवल 1 ad है (array length check)
        const ad1HTML = createAdHTML(adsToShow[0]);
        if (injector1) {
            injector1.innerHTML = `<div class="ad-container">${ad1HTML}</div>`;
        } else {
            document.write(`<div class="ad-container">${ad1HTML}</div>`);
        }
    } else {
        console.error("Ad data is empty or insufficient.");
    }
