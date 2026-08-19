import React from "react";
import entity from '../Entity/CodeTriosEntity.json';

const OrganizationSchema = () => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(entity),
            }}
        />
    );
};

export default OrganizationSchema;