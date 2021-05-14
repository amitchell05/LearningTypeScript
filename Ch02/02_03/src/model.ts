let displayName: string = "Jess's standing desk";
let inventoryType: string = 'furniture';
let trackingNumber: string = 'FD123455';
let createDate: Date = new Date();
let originalCost = 425;

// To limit values to the only ones you expect, use one of these two approaches

// Approach 1: Define an enum
// enum => a strongly typed object that defines a set of named values

// Example of an enum type with two possible values: Computer and Furniture

// Unlike interfaces, an enum produces code that can be evaluated at runtime

enum InventoryItemType {
  // TypeScript allows us to assign our own string values to enums
  // Ensures we get exactly what we need
  Computer = 'computer',
  Furniture = 'furniture',
}

interface InventoryItem {
  displayName: string;
  // Update your InventoryItem interface to use this enum instead of a string
  inventoryType: InventoryItemType;
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
  // When you want to use one of the values, refer to it as if it's a property of the enum
  inventoryType: InventoryItemType.Computer,
  trackingNumber: 'MBP123456',
  createDate: new Date(),
});
