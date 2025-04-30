const {
  get_items,
  add_item,
  update_item_title_by_id,
  delete_item_by_id,
  get_item_title_by_id,
} = require("./qtn4.js");

add_item({
  id: 1,
  title: "Books",
});
add_item({
  id: 2,
  title: "Great Minds think alike",
});
delete_item_by_id(2);
update_item_title_by_id(1, "Books and Magazines");
console.log(get_items()); // [{ id: 1, title: "item1" }]
