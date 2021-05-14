let displayName: string = "Jess's standing desk";
let inventoryType: string = 'furniture';
let trackingNumber: string = 'FD123455';
let createDate: Date = new Date();
let originalCost = 425;

// To limit values to the only ones you expect, use one of these two approaches

// Approach 2: Define a literal type (i.e. the simplier approach)

interface InventoryItem {
  displayName: string;
  // Define the list of possible values separated by the pipe character
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
  // TypeScript will give you the autocomplete options
  inventoryType: 'computer',
  trackingNumber: 'MBP123456',
  createDate: new Date(),
});
