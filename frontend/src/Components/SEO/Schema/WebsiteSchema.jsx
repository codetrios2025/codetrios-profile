import React from "react";

const WebsiteSchema = () => {

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",

        "@id": "https://www.codetrios.com/#website",

        "url": "https://www.codetrios.com/",

        "name": "CodeTrios",

        "description":
            "CodeTrios is a web design and development company providing professional website design, web development, UI/UX, React, ecommerce, SEO and GEO services.",

        "publisher": {
            "@id": "https://www.codetrios.com/#organization"
        },

        "inLanguage": "en-IN"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema)
            }}
        />
    );
};

export default WebsiteSchema;