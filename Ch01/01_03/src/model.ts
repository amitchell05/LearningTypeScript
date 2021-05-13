let displayName: string = "Jess's standing desk";
let inventoryType: string = 'furniture';
let trackingNumber: string = 'FD123455';
let createDate: Date = new Date();
let originalCost: number = 425;
// let originalCost = 425 as number;

// Use any type only if you want to opt out of type safety
// let originalCost: any = 425;
// OR
// let originalCost = 425 as any;
// originalCost = "A LOT of money!";

function getInventoryItem(trackingNumber: string): {
  displayName: string;
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;
} {
  return null;
}

function saveInventoryItem(item) {}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);
