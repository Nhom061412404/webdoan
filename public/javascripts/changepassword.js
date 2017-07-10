var new_password = document.getElementById("new-password")
  , confirm_password = document.getElementById("confirm-password");

 var current_password = document.getElementById("current-password")
   , password = document.getElementById("password");

function validatePassword(){
  if(new_password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Mật khẩu xác nhận không hợp lệ");
  } else {
    confirm_password.setCustomValidity('');
  }

  if(password.value != current_password.value) {
     password.setCustomValidity("Mật khẩu hiện tại không hợp lệ");
   } else {
     password.setCustomValidity('');
   }
}

new_password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

current_password.onchange = validatePassword;
password.onkeyup = validatePassword;

/////////////////////////////////////////////////

// var current_password = document.getElementById("current-password")
//   , password = document.getElementById("password");

// function validatePassword(){
//   if(password.value != current_password.value) {
//     password.setCustomValidity("Mật khẩu hiện tại không hợp lệ");
//   } else {
//     password.setCustomValidity('');
//   }
// }

// current_password.onchange = validatePassword;
// password.onkeyup = validatePassword;