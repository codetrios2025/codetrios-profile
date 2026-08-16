import React from "react";
import { Helmet } from "react-helmet-async";

const HomeServiceSchema = () => {

    const schema = {
        "@context": "https://schema.org",

        "@type": "Service",

        "@id": "https://www.codetrios.com/#services",

        "name": "Software & IT Development Services",

        "provider": {
            "@type": "Organization",
            "@id": "https://www.codetrios.com/#organization",
            "name": "CodeTrios",
            "url": "https://www.codetrios.com/"
        },

        "serviceType": [
            "Web Development",
            "Website Design",
            "Mobile App Development",
            "MERN Stack Development",
            "SaaS Product Development",
            "Custom Software Development",
            "E-Commerce Development",
            "AI Automation",
            "Chatbot Development",
            "Cloud & DevOps Services"
        ],

        "url": "https://www.codetrios.com/",

        "areaServed": [
            {
                "@type": "Country",
                "name": "India"
            },
            {
                "@type": "Country",
                "name": "United States"
            },
            {
                "@type": "Country",
                "name": "United Kingdom"
            },
            {
                "@type": "Country",
                "name": "Canada"
            },
            {
                "@type": "Country",
                "name": "Australia"
            },
            {
                "@type": "Country",
                "name": "United Arab Emirates"
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default HomeServiceSchema;