import React from "react";

const ItemListSchema = ({ name, description, url, items = [] }) => {

    if (!items.length) {
        return null;
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": name,
        "description": description,
        "url": url,
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            ...(item.url && {
                "url": item.url
            }),
            ...(item.description && {
                "description": item.description
            })
        }))
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

export default ItemListSchema;