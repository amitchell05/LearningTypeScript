// class definition with 'class' keyword in front of the class's name, InventoryStore

class InventoryStore {
  // Inside, the class contains all of its members

  // Lines 9-21 = three property definitions
  // These are functions preceded by the 'get' keyword
  // Getters behave like properties

  /** the inventory categories */
  get categories() {
    return this._categories;
  }

  /** the inventory items */
  get items() {
    return this._items;
  }

  // To be able to assign values to these properties, add setters to them

  // set items(value) {
  //   this._items = value;
  // }

  // In this case, we're using getters to create readonly properties
  // So, we will not need setters right now

  /** promise indicating whether the store has been initialized */
  get isInitialized() {
    return this._isInitialized;
  }

  // The result of the class syntax is a constructor function
  // It's called immediately after the object is created
  // Holds any initialization logic you might have
  constructor() {
    // define and initialize properties (which happen to be "private")

    // the underscore (_) indicates they're private, but doesn't change how JavaScript works (only a naming convention that discourages consumers from modifying these values)
    // private = no one other than the members of this class should be interacting with them

    this._categories = [];
    this._items = [];

    // Access getter properties like this
    // this.items

    // load initial set of data
    this._isInitialized = this._load();
  }

  /**
   * Locates a specific item from inventory
   *
   * @param {string} trackingNumber the item's tracking number
   * @returns the inventory item with the given tracking number, or null
   */
  getItem(trackingNumber) {
    return this._items.find((x) => x.trackingNumber === trackingNumber);
  }

  /**
   * Adds an item to inventory
   *
   * @param {InventoryItem} item the item to add to inventory
   * @returns {Promise<InventoryItem>} promise containing the updated item after it's been saved
   */
  addItem(item) {
    const errors = this.validateItem(item);

    if (errors.length) {
      return Promise.reject(errors);
    }

    const trackingNumber = Math.random().toString(36).substr(2, 9);

    item.trackingNumber = trackingNumber;

    this._items.push(item);

    return this._save().then(() => item);
  }

  /**
   * validate an inventory item
   *
   * @param {InventoryItem} item the inventory item to validate
   * @returns {ValidationError[]} an array of validation errors
   */
  validateItem(item) {
    let errors = [];

    function addError(field, message) {
      errors.push({ field, message });
    }

    //#region Validation logic applying to any/all types of inventory items

    if (item == null) {
      addError('', 'item is null');
      return errors;
    }

    if (!item.inventoryType) {
      addError('inventoryType', 'Please select a valid Category');
    }

    if (!item.name) {
      addError('name', 'Name must be greater then 5 characters long');
    }

    if (!item.assignedTo) {
      addError('assignedTo', 'Please select the person this is assigned to');
    }

    if (!item.subCategory) {
      addError('assignedTo', 'Please select a Sub-Category');
    }

    //#endregion

    switch (item.inventoryType) {
      // Computer-specific validation
      case 'computer':
        if (item.year > new Date().getFullYear()) {
          addError('name', 'Please select a year (future years are not valid)');
        }

        if (!item.serialNumber) {
          addError('serialNumber', 'Please specify a valid serial number');
        }
        break;

      // Furniture-specific validation
      case 'furniture':
        if (!item.model) {
          addError(
            'model',
            'Please provide a model, serial number, or description'
          );
        }

        if (!item.manufacturer) {
          addError('manufacturer', "Please identify the item's manufacturer");
        }
        break;
    }

    return errors;
  }

  /**
   * Removes an item from inventory
   *
   * @param {InventoryItem} item the item to remove from inventory
   * @returns {Promise<void>} a promise which resolves once the task is complete
   *
   */
  removeItem(item) {
    this._items.splice(this._items.findIndex(item), 1);
    return this._save();
  }

  // Below are the class's methods => functions that contain logic
  // Methods vs. normal functions => methods have access to all the internals of a class, which is represented by the 'this' keyword
  // Use underscore (_) to indicate that the methods are protected methods (naming convention) = non one outside of the class should be calling them

  //#region Protected methods

  /*  NOTE:
   *  This demo uses local storage to save and load inventory items,
   *  but in a real app these would be AJAX calls to a server.
   */

  /**
   * Load the current inventory items.
   *
   * @returns {Promise<boolean>} a promise with the loading state
   *
   * @private  <-- just information, doesn't actually do anything at runtime
   */
  _load() {
    return Promise.all([
      getFromStorage('Categories'),
      getFromStorage('Inventory'),
    ]).then(([categories, items]) => {
      this._categories = categories;
      this._items = items;
    });
  }

  /**
   * Save the inventory items to the data source
   *
   * @returns {Promise<void>} a promise which resolves once the task is complete
   *
   * @private  <-- just information, doesn't actually do anything at runtime
   */
  _save() {
    return saveToStorage('Inventory', this._items);
  }

  //#endregion
}

// Call the constructor to create a new instance of the class (line 183)
// Assigns a property to the class itself to ensure there's only one instance of this property in the whole application regardless of how many instances of the InventoryStore class are created

// Create a "static" singleton instance for the entire application to use
InventoryStore.instance = new InventoryStore();

// Expose the singleton in its own variable
const inventoryStore = InventoryStore.instance;
