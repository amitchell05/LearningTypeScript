let displayName: string = "Jess's standing desk";
let inventoryType: string = 'furniture';
let trackingNumber: string = 'FD123455';
let createDate: Date = new Date();
let originalCost: number = 425;

// Type inference => TypeScript is able to figure out the type of many variables w/o you having to provide any info at all

// Type inference allows TypeScript to find errors in your code at compile time by automatically discovering type info

// let originalCost = 425 as number;
// originalCost = "A LOT of money!";

// Gradual typing => allows you to choose when and how TypeScript applies type to your code

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
