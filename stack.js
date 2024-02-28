/**
 * A Stack is a linear data structure that follows the Last In First Out (LIFO) principle.
 * @author Emilio Butzlaff
 * @version 1.0
 */

class Stack {
  _size = 0;

  constructor(...items) {
    this._items = items || [];
    this._size = items.length || 0;
  }

  /**
   * Adds one or more items to the Stack.
   * @param {any} items
   * New items to add to the Stack.
   */
  Queue(...items) {
    this._items.push(...items);
    this._size = this._items.length;
  }

  /**
   * Removes the last item from an Stack and returns it. 
   * If the Stack is empty, undefined is returned and the Stack is not modified.
   */
  Dequeue() {
    if(this.isEmpty()){
      return undefined;
    }
    this._size--;
    return this._items.pop();
  }

  /**
   * 
   * @returns {any} The last element of the stack
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._items[this._size - 1];
  };

  /**
   * 
   * @returns {boolean} True if the stack is empty, false otherwise
   */
  isEmpty() {
    return this._size === 0;
  }

  /**
   * 
   * @returns {number} The size of the stack
   */
  size() {
    return this._size;
  }

  /**
   * Clear the stack.
   */
  clear() {
    this._items = [];
    this._size = 0;
  }

  /**
   * Print the stack into console.
   */
  print() {
    let reversedItems = this._items.map(i => i).reverse();
    console.log(reversedItems.toString() || 'The stack is empty');
    reversedItems = null;
  };

  /**
   *  
   * @param {any} item
   * @returns {boolean} True if the stack contains the item, false otherwise
   */ 
  contains(item) {
    return this._items.includes(item);
  };
}

module.exports = Stack;