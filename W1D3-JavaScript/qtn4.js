// data.js
let data = [];
export function get_items() {
  return data;
}

// item = { id: 1, title: "item1" }
export function add_item(new_item) {
  if (data.some((item) => item.id === new_item.id)) {
    return false;
  }
  data.push(new_item);
  console.log("Item added successfully");
}

export function update_item_title_by_id(id, new_title) {
  // update the title (if id exist)
  if (data.some((item) => item.id === id)) {
    data = data.map((item) => {
      if (item.id === id) {
        return { ...item, title: new_title };
      }
      return item;
    });
    console.log("Item updated successfully");
  } else {
    console.log("Item not found");
  }
}
export function delete_item_by_id(id) {
  // delete the item (if id exist)
  data = data.filter((item) => item.id !== id);
  console.log("Item deleted successfully");
  // return true if item is deleted successfully, false otherwise
}
export function get_item_title_by_id(id) {
  // return the item title by id (if id exist)
  const item = data.find((item) => item.id === id);
  if (item) {
    return item.title;
  } else {
    return null;
  }
}
