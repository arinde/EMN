export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EMN Fabrication Services",
    "description": "Professional marine fabrication, welding, ship hull maintenance, and valve servicing in Lagos and Agbara, Nigeria",
    "url": "https://emnfabricationservices.com",
    "telephone": "+234 803 697 5415",
    "email": "kunlemustapha27@yahoo.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Km 46, Black Signboard Badagry Expressway",
        "addressLocality": "Lagos",
        "addressCountry": "NG"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Agbara",
        "addressLocality": "Ogun",
        "addressCountry": "NG"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "No 14, Ago Yusuf Road, Shekolo Behind Oko-Afo Bus-stop, Badagry",
        "addressLocality": "Lagos",
        "addressCountry": "NG"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.4541",
      "longitude": "2.8770"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Nigeria"
      },
      {
        "@type": "State",
        "name": "Lagos State"
      },
      {
        "@type": "City",
        "name": "Lagos"
      },
      {
        "@type": "City",
        "name": "Badagry"
      },
      {
        "@type": "City",
        "name": "Agbara"
      }
    ],
    "priceRange": "$$",
    "serviceType": [
      "Marine Fabrication",
      "Industrial Fabrication",
      "Chemical Plant Construction",
      "Welding and Fabrication",
      "Ship Hull Maintenance",
      "Marine Valve Servicing",
      "Marine Construction",
      "Sand Blasting and Painting",
      "Equipment Rentals",
      "Certified Labour Supply",
      "Marine Logistics",
      "Tank Calibration"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marine Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Welding and Fabrication",
            "description": "Expert structural welding, pipe welding, and custom fabrication for marine applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ship Hull Maintenance",
            "description": "Comprehensive hull inspection, repair, and preventive maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marine Valve Servicing",
            "description": "Professional valve testing, repair, installation, and certification"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}