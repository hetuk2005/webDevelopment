let arr = [1, 2, 3, 4];

// push

Array.prototype.last_add = function (value) {
    let index = this.length;
    this[index] = value;
};

arr.last_add(5);
console.log(arr);

// pop

Array.prototype.last_remove = function () {
    let index = this.length-1;
    delete this[index];
    this.length = index;
};

arr.last_remove();
console.log(arr);

// unshift

Array.prototype.first_add = function (...values) {
    console.log('Values: ', values);

    let newLength = this.length + values.length;
    console.log('newLength: ', newLength); // 5 -> 5-1 = 4

    // Shift Existing Elements To The Right
    for (let i = newLength - 1; i >= values.length; i--) {
        this[i] = this[i - values.length];
    }

    // Add New Elements At The Beginning
    for (let i = 0; i < values.length; i++) {
        this[i] = values[i];
    }

    return this.length;
};

arr.first_add(5);
console.log(arr);

// shift

Array.prototype.first_remove = function () {
    if (this.length == 0) return undefined;
        let removed = this[0];
        for (let i = 1; i < this.length; i++) {
            this[i - 1] = this[i];
        }
        this.length = this.length - 1;
        return removed;
    };
    
arr.first_remove();
console.log(arr);