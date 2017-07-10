var password = document.getElementById("reg-new-password")
  , confirm_password = document.getElementById("reg-confirm-password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Mật khẩu xác nhận không hợp lệ");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// document.addEventListener("DOMContentLoaded", function() {
//     var elements = document.getElementsByTagName("INPUT");
//         elements[0].oninvalid = function(e) {
//             e.target.setCustomValidity("");
//             if (!e.target.validity.valid) {
//                 e.target.setCustomValidity("Vui lòng nhập họ tên");
//             }
//         };
//         elements[1].oninvalid = function(e) {
//             e.target.setCustomValidity("");
//             if (!e.target.validity.valid) {
//                 e.target.setCustomValidity("Vui lòng nhập tên đăng nhập");
//             }
//         };
//     for (var i = 0; i < elements.length; i++) {
//         // elements[i].oninvalid = function(e) {
//         //     e.target.setCustomValidity("");
//         //     if (!e.target.validity.valid) {
//         //         e.target.setCustomValidity("Vui lòng nhập họ tên");
//         //     }
//         // };
//         elements[i].oninput = function(e) {
//             e.target.setCustomValidity("");
//         };
//     }
// })
