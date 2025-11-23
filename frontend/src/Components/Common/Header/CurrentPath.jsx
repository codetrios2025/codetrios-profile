const MenuPath = (menu, currentPageUrl) => {
    for (let item of menu) {
        // Check if the item's linkUrl matches the current page URL
        if (item.linkUrl === currentPageUrl) {
            return item;
        }
        // If the item has children, search within them
        if (item.children && item.children.length > 0) {
            const foundItem = MenuPath(item.children, currentPageUrl);
            if (foundItem) {
                return foundItem;
            }
        }
    }
    return null; // Return null if no match is found
};

export default MenuPath;