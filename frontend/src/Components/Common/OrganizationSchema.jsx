import React from "react";
import { Helmet } from "react-helmet-async";

const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.codetrios.com/#organization",

        "name": "CodeTrios",

        "url": "https://www.codetrios.com/",

        "logo": {
            "@type": "ImageObject",
            "url": "https://www.codetrios.com/codetrios_logo.webp"
        },

        "description":
            "CodeTrios is a web development and digital solutions company providing website design, web development, custom software, AI solutions, automation, SEO, mobile applications, and SaaS development services.",

        "sameAs": [
            "https://www.linkedin.com/in/code-trio-90ba31385",
            "https://www.facebook.com/people/Code-Trios/pfbid02whPZXSYAjnNyUsKyWvppyBDPZayTvuozN6c3XdBFyLSSEuM7PCXAr1QEPCQZipgVl/",
            "https://www.instagram.com/codetrios/"
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

export default OrganizationSchema;