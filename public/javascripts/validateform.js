function validateFormCheckout() {
    var hoten = document.forms["checkoutForm"]["hoten"].value;
    var email = document.forms["checkoutForm"]["email"].value;
    var sodienthoai = document.forms["checkoutForm"]["sodienthoai"].value;
    var diachi = document.forms["checkoutForm"]["diachi"].value;

    if (hoten == "") {
        alert("Xin vui lòng điền họ tên bạn");
        return false;
    }a
    if (email == "") {
        alert("Xin vui lòng điền Email bạn");
        return false;
    }
    if (sodienthoai == "") {
        alert("Xin vui lòng điền số điện thoại của bạn");
        return false;
    }
    if (diachi == "") {
        alert("Xin vui lòng điền địa chỉ của bạn");
        return false;
    }
    return true;
}

