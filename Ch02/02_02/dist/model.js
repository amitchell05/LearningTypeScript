var displayName = "Jess's standing desk";
var inventoryType = 'furniture';
var trackingNumber = 'FD123455';
var createDate = new Date();
var originalCost = 425;
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) { }
var inventoryItem = getInventoryItem(trackingNumber);
var updatedInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
// saveInventoryItem(inventoryItem);
// TypeScript will accept objects that have the same structure as the InventoryItem => doctyping
// doctyping => if two objects share the same structure, treat them as the same type (i.e. InventoryItem)
saveInventoryItem({
    displayName: 'MacBook Pro 15 Retina',
    inventoryType: 'computer',
    trackingNumber: 'MBP123456',
    createDate: new Date(),
});
