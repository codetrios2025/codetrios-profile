import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import OfferMain from './whatWeOffer/OfferMain';
import ServiceTab from './whatWeOffer/ServiceTab';
import ServiceImage from './whatWeOffer/ServiceImage'

const WhatWeOfferRoutes = () => {
    const [activeTab, setActiveTab] = useState('main'); // Set default active tab to 'main'

    const handleSelect = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="mt-4">
            <Button
                variant="primary"
                onClick={() => handleSelect('main')}
                className={activeTab === 'main' ? 'mr-2 active' : 'mr-2'}
            >
                Main
            </Button>
            <Button
                variant="primary"
                onClick={() => handleSelect('service')}
                className={activeTab === 'service' ? 'mr-2 active' : 'mr-2'}
            >
                Main Service
            </Button>
            <Button
                variant="primary"
                onClick={() => handleSelect('serviceimage')}
                className={activeTab === 'serviceimage' ? 'active' : ''}
            >
                Service Image
            </Button>

            <div className="mt-4">
                {activeTab === 'main' && <OfferMain />}
                {activeTab === 'service' && <ServiceTab />}
                {activeTab === 'serviceimage' && (
                    <ServiceImage/>
                )}
            </div>
        </div>
    );
};

export default WhatWeOfferRoutes;
