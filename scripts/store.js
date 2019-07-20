'use strict';
/* global Item */
// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(name) {
    this.items.push(name);
  };

  const findAndUpdate = function(id, newData){
    const item = this.items.find(it => it.id === id);
    Object.assign(item, newData);
    shoppingList.render();
  }

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
    shoppingList.render();
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    findAndUpdate
  };
  
}());
