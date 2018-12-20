'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) {     // Big O value is O(n)

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;
    }

    // If we have stuff, we add to the end
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;

  }

  prepend(value) {    // Big O value is O(2)

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;      
    }

    // If we have stuff, we add to the beginning
    node.next = this.head;
    this.head = node;
    return this;
  }
  

  insertBefore(value, newVal) {   // Big O value is O(n)

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;      
    }

    // We add a new value before the value in the linked list
    let currentNode = this.head;
    while(currentNode.next.value != value) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  insertAfter(value, newVal) {    // Big O value is O(n)

    let node = new Node(newValue);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;      
    }

    // We add a new value before the value in the linked list
    let currentNode = this.head;
    while(currentNode.next.value != value) {
      currentNode = currentNode.next;
    }
    currentNode = currentNode.next;
    currentNode.next = node;
    return this;
  }

  mergeLists(value1, value2) {

    let A = new Node(value1);
    let B = new Node(value2);
    let C = value1.head;

    if(A && B) {
      C.head = A.head;
      C.next = B.head;
    }
    while(A.next || B.next) {
      if(A.next) {
        C.next = A.next;
        A.head = A.next;
      }
      if(B.next) {
        C.next = B.next;
        B.head = B.next;
      }
    }
    return C;
  }

/*
  reverse() {}

  remove(offset) {}

  serialize() {}

  deserialize() {}
*/
}

module.exports = LinkedList;