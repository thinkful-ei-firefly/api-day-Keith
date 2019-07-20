

const api = (function(){
  BASE_URL = 'https://thinkful-list-api.herokuapp.com/keith';

  function getItems(){
    return fetch(`${BASE_URL}/items`);
  }

  function createItem(name){
    let newItem = JSON.stringify({name});
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: newItem
    });
  }

  function updateItem(id, newName){
    let newItem = JSON.stringify(newName);
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: newItem
    });
  }

  function deleteItem(id){
    return fetch(`${BASE_URL}/items/${id}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    });
  }

  return{
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}());