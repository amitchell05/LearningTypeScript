let displayName: string = "Jess's standing desk";
let inventoryType: string = 'furniture';
let trackingNumber: string = 'FD123455';
let createDate: Date = new Date();

type Cost = number | string;

let originalCost: Cost;

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
  inventoryType: 'computer',
  trackingNumber: 'MBP123456',
  createDate: new Date(),
});

// Define a generic type parameter to represent any given type using the following syntax

// This syntax introduces a type variable to the function definition
// Similar to a function parameter introducing a variable to a function

// 'T' stands for any type that you want it to; can be used anywhere you'd use a regular type name at
// function clone<T>(source: T): T {
//   const serialized = JSON.stringify(source);
//   return JSON.parse(serialized);
// }

// You can add mutiple type parameters named anything by separating them with a comma
// Then, use each to describe the type of the next parameter
function clone<T, U>(source: T, options: U): T {
  const serialized = JSON.stringify(source);
  return JSON.parse(serialized);
}

// To consume a function with a generic type parameter, there are two options

// Approach 1: Use the same syntax as above, but specify the type
// const cloned = clone<InventoryItem>(inventoryItem);

// Approach 2: Omit the type parameter and rely on TypeScript's type inference to figure it out for you
// This will work for this example because TypeScript is able to look at the type of the parameter we're passing in (i.e. 'T') and what will be return (i.e. 'T')
// const cloned = clone<InventoryItem>(inventoryItem);

const cloned = clone(inventoryItem, { deep: true });

// You can use the same syntax to decorate interfaces and classes

// Ex. This interface defines two type parameters, TKey and TValue

// interface KeyValuePair<TKey, TValue> {
//   // Use the type parameters to describe the types of properties inside of the interface
//   Key: TKey;
//   Value: TValue;
// }

class KeyValuePair<TKey, TValue> {
  Key: TKey;
  Value: TValue;
}

// Then you can use it to describe a variable that is key:value pair of string and number
var keyValue: KeyValuePair<string, number> = {
  Key: 'something',
  Value: 1234,
};
// You can use it to describe a variable that is key:value pair of string and number
var keyValue2: KeyValuePair<number, boolean> = {
  Key: 1234,
  Value: true,
};
