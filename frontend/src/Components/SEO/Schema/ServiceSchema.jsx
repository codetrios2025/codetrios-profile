import React from "react";
import { Helmet } from "react-helmet-async";

const ServiceSchema = ({
    name,
    description,
    url,
    serviceType,
    areaServed = [
        "India",
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "United Arab Emirates"
    ]
}) => {

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",

        "@id": `${url}#service`,

        "name": name,

        "description": description,

        "url": url,

        "serviceType": serviceType,

        "provider": {
            "@type": "Organization",
            "@id": "https://www.codetrios.com/#organization",
            "name": "CodeTrios",
            "url": "https://www.codetrios.com/",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.codetrios.com/codetrios_logo.webp"
            }
        },

        "areaServed": areaServed.map((country) => ({
            "@type": "Country",
            "name": country
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default ServiceSchema;