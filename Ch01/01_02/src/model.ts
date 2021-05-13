let displayName: string = "Jess's standing desk";
let inventoryType: string = 'furniture';
let trackingNumber: string = 'FD123455';
let createDate: Date = new Date();
let originalCost: number = 425;

// Example of an inline type definition
function getInventoryItem(trackingNumber: string): {
  displayName: string;
  inventoryType: string;
  trackingName: string;
  createDate: Date;
  originalCost: number;
} {
  return null;
}

function saveInventoryItem(item) {}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);
