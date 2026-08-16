import React from "react";
import { Helmet } from "react-helmet-async";

const WebsiteSchema = () => {

    const schema = {
        "@context": "https://schema.org",

        "@type": "WebSite",

        "@id": "https://www.codetrios.com/#website",

        "name": "CodeTrios",

        "url": "https://www.codetrios.com/",

        "description":
            "CodeTrios provides web development and digital solutions for businesses, startups, and enterprises."
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default WebsiteSchema;