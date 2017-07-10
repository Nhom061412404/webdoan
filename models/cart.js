module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {};
  this.count = oldCart.count || 0;
  this.totalPrice = oldCart.totalPrice || 0;
  // Thêm một sản phẩm vào giỏ hàng
  this.add = function (item, id) {
    // Dùng id làm key - đối tượng làm value để kiểm tra nhanh
    // sự tồn tại của item trong giỏ hàng
    var storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = {item: item, quantity: 0, price: 0};
    }

    storedItem.quantity++;
    storedItem.price = storedItem.item.gia_sp * storedItem.quantity;

    this.count ++;
    this.totalPrice += storedItem.item.gia_sp;
  }

    this.delete = function (id) {
    // Dùng id làm key - đối tượng làm value để kiểm tra nhanh
    // sự tồn tại của item trong giỏ hàng
    this.items[id];

    this.items[id].quantity--;
    this.items[id].price = this.items[id].item.gia_sp * this.items[id].quantity;

    this.count --;
    this.totalPrice -= this.items[id].item.gia_sp;
    if(this.items[id].quantity<=0)
    {
    delete this.items[id];
    }
  }


  // Chuyển danh sách sản phẩm thành mảng
  this.toArray = function() {
    var a = [];

    for(var id in this.items) {
      a.push(this.items[id]);
    }

    return a;
  }

  this.toString = function() {
    var a = " ";
    for(var id in this.items) {
    a += (this.items[id].item.ten_sp + "," + this.items[id].item.gia_sp + "," + this.items[id].quantity + "-");
    }

    return a;
  }



};
