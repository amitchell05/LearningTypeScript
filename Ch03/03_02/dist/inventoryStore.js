var InventoryStore = /** @class */ (function () {
    function InventoryStore() {
        // In JavaScript, it's common to assign values to properties in the constructor
        // In TypeScript, all possible properties must be defined at the class level
        // Enhance the property definitions by giving them a type
        // We can intialize the values of these properties when we define them, as opposed to in the constructor
        // _categories is an array of Category objects
        this._categories = [];
        // _items is an array of InventoryItem objects
        // Use the InventoryItem interface and append it with opening and closing brackets to indicate an array
        this._items = [];
        // define and initialize properties (which happen to be "private")
        // this._categories = [];
        // this._items = [];
        // load initial set of data
        this._isInitialized = this._load();
    }
    Object.defineProperty(InventoryStore.prototype, "categories", {
        /** the inventory categories */
        get: function () {
            return this._categories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InventoryStore.prototype, "items", {
        /** the inventory items */
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InventoryStore.prototype, "isInitialized", {
        /** promise indicating whether the store has been initialized */
        get: function () {
            return this._isInitialized;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Locates a specific item from inventory
     *
     * @param {string} trackingNumber the item's tracking number
     * @returns the inventory item with the given tracking number, or null
     */
    // Add types to methods as well
    InventoryStore.prototype.getItem = function (trackingNumber) {
        return this._items.find(function (x) { return x.trackingNumber === trackingNumber; });
    };
    /**
     * Adds an item to inventory
     *
     * @param {InventoryItem} item the item to add to inventory
     * @returns {Promise<InventoryItem>} promise containing the updated item after it's been saved
     */
    InventoryStore.prototype.addItem = function (item) {
        var errors = this.validateItem(item);
        if (errors.length) {
            return Promise.reject(errors);
        }
        var trackingNumber = Math.random().toString(36).substr(2, 9);
        item.trackingNumber = trackingNumber;
        this._items.push(item);
        return this._save().then(function () { return item; });
    };
    /**
     * validate an inventory item
     *
     * @param {InventoryItem} item the inventory item to validate
     * @returns {ValidationError[]} an array of validation errors
     */
    InventoryStore.prototype.validateItem = function (item) {
        var errors = [];
        function addError(field, message) {
            errors.push({ field: field, message: message });
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
                    addError('model', 'Please provide a model, serial number, or description');
                }
                if (!item.manufacturer) {
                    addError('manufacturer', "Please identify the item's manufacturer");
                }
                break;
        }
        return errors;
    };
    /**
     * Removes an item from inventory
     *
     * @param {InventoryItem} item the item to remove from inventory
     * @returns {Promise<void>} a promise which resolves once the task is complete
     *
     */
    InventoryStore.prototype.removeItem = function (item) {
        this._items.splice(this._items.findIndex(item), 1);
        return this._save();
    };
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
    InventoryStore.prototype._load = function () {
        var _this = this;
        return Promise.all([
            getFromStorage('Categories'),
            getFromStorage('Inventory'),
        ]).then(function (_a) {
            var categories = _a[0], items = _a[1];
            _this._categories = categories;
            _this._items = items;
        });
    };
    /**
     * Save the inventory items to the data source
     *
     * @returns {Promise<void>} a promise which resolves once the task is complete
     *
     * @private  <-- just information, doesn't actually do anything at runtime
     */
    InventoryStore.prototype._save = function () {
        return saveToStorage('Inventory', this._items);
    };
    //#endregion
    // Instead, we'll need to define property on the class itself rather than its instance
    // Define a property on a class using the 'static' keyword
    InventoryStore.instance = new InventoryStore();
    return InventoryStore;
}());
// Create a "static" singleton instance for the entire application to use
// TypeScript complains that we try to set a value on a property that has not been defined yet
// InventoryStore.instance = new InventoryStore();
// Expose the singleton in its own variable
var inventoryStore = InventoryStore.instance;
