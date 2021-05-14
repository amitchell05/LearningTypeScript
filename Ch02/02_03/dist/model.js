var displayName = "Jess's standing desk";
var inventoryType = 'furniture';
var trackingNumber = 'FD123455';
var createDate = new Date();
var originalCost = 425;
// To limit values to the only ones you expect, use one of these two approaches
// Approach 1: Define an enum
// enum => a strongly typed object that defines a set of named values
// Example of an enum type with two possible values: Computer and Furniture
// Unlike interfaces, an enum produces code that can be evaluated at runtime
var InventoryItemType;
(function (InventoryItemType) {
    // TypeScript allows us to assign our own string values to enums
    // Ensures we get exactly what we need
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) { }
var inventoryItem = getInventoryItem(trackingNumber);
var updatedInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: 'MacBook Pro 15 Retina',
    // When you want to use one of the values, refer to it as if it's a property of the enum
    inventoryType: InventoryItemType.Computer,
    trackingNumber: 'MBP123456',
    createDate: new Date(),
});
