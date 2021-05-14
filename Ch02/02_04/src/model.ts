let displayName: string = "Jess's standing desk";
let inventoryType: string = 'furniture';
let trackingNumber: string = 'FD123455';
let createDate: Date = new Date();

// Union types => tell TypeScript to accept multiple value types for a variable
// Use pipe character to separate the types it can accept

// let originalCost: number | string = 425;
// originalCost = 'A LOT of money!';

// If you want to save this combo of types to reuse somewhere else in the app, use the 'type' keyword to define a new type with a meaningful name

type Cost = number | string;

// let originalCost: Cost = 425;
// originalCost = 'A LOT of money!';

// Drawback => if you don't assign a value to the variable...

let originalCost: Cost;

// ...and you try to assign the value of the originalCost variable to a new variable

// let cost: number = originalCost;

// You'll get an error => Type 'Cost' is not assignable to type 'number'. Type 'string' is not assignable to type 'number'

// Because originalCost can be a number or string, it's not assignable to 'cost' if it's a string

// If you're dealing with primitive types and come across this situation, use an if conditional to check its type at runtime

if (typeof originalCost === 'number') {
  let cost: number = originalCost;
} else {
  let x = originalCost;
}

enum InventoryItemType {
  Computer = 'computer',
  Furniture = 'furniture',
}

interface InventoryItem {
  displayName: string;
  inventoryType: 'computer' | 'furniture';
  readonly trackingNumber: string;
  createDate: Date;
  originalCost?: number;

  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem({
  displayName: 'MacBook Pro 15 Retina',
  inventoryType: InventoryItemType.Computer,
  trackingNumber: 'MBP123456',
  createDate: new Date(),
});
