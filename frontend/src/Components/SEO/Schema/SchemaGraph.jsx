import React from "react";

import OrganizationSchema from "./OrganizationSchema";
import WebsiteSchema from "./WebsiteSchema";
import WebPageSchema from "./WebPageSchema";
import ServiceSchema from "./ServiceSchema";
import BreadcrumbSchema from "./BreadcrumbSchema";
import FAQSchema from "./FAQSchema";
import ItemListSchema from "./ItemListSchema";
const SchemaGraph = ({
    pageType = "website",

    pageName,
    pageDescription,
    pageUrl,

    serviceName,
    serviceDescription,
    serviceType,

    breadcrumbs = [],

    faqs = [],

    itemListName,
    itemListDescription,
    itemListItems = []
}) => {

    return (
        <>
            {/* Organization */}
            <OrganizationSchema />

            {/* Website */}
            <WebsiteSchema />

            {/* Page */}
            {pageName && pageDescription && pageUrl && (
                <WebPageSchema
                    name={pageName}
                    description={pageDescription}
                    url={pageUrl}
                />
            )}

            {/* Service */}
            {pageType === "service" &&
                serviceName &&
                serviceDescription &&
                serviceType && (
                    <ServiceSchema
                        name={serviceName}
                        description={serviceDescription}
                        url={pageUrl}
                        serviceType={serviceType}
                    />
                )}

            {/* Breadcrumb */}
            {breadcrumbs.length > 0 && (
                <BreadcrumbSchema
                    items={breadcrumbs}
                />
            )}
            {/* FAQ */}
            {faqs.length > 0 && (
                <FAQSchema faqs={faqs} />
            )}
            {/* ==============================
                ITEM LIST
            ============================== */}
            {itemListItems.length > 0 && (
                <ItemListSchema
                    name={itemListName}
                    description={itemListDescription}
                    url={pageUrl}
                    items={itemListItems}
                />
            )}
        </>
    );
};

export default SchemaGraph;