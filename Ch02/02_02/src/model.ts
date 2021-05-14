let displayName: string = "Jess's standing desk";
let inventoryType: string = 'furniture';
let trackingNumber: string = 'FD123455';
let createDate: Date = new Date();
let originalCost = 425;

interface InventoryItem {
  displayName: string;
  inventoryType: string;

  // Define a readonly property to require that every InventoryItem object has a property name trackingNumber of type string
  // TypeScript will throw an error if you try to change its type later on in your code

  readonly trackingNumber: string;
  createDate: Date;
  originalCost?: number;

  // You can use the same syntax for defining properties of an object to define methods as well

  // Approach 1
  // addNote?(note: string): string;

  // Approach 2
  addNote?: (note: string) => string;

  // Both are the equivalent of each other
  // Each defines a method named addNote, which accepts a string parameter named note and returns a string value

  // Make variables/methods optional by placing a question mark (?) after them
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

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
