import React from "react";

const WebPageSchema = ({
    name,
    description,
    url,
    type = "WebPage"
}) => {

    const schema = {
        "@context": "https://schema.org",

        "@type": type,

        "@id": `${url}#webpage`,

        "url": url,

        "name": name,

        "description": description,

        "isPartOf": {
            "@id": "https://www.codetrios.com/#website"
        },

        "about": {
            "@id": "https://www.codetrios.com/#organization"
        },

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

export default WebPageSchema;