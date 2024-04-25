function changePass(){
    let password = document.getElementById('password');
    if(password.type == 'text'){
        password.type = 'password';
    }
    else{
        password.type = 'text';
    }
}
function changePass2(){
    let password = document.getElementById('re-password');
    if(password.type == 'text'){
        password.type = 'password';
    }
    else{
        password.type = 'text';
    }
}
function Redic(){
    window.location = "formdangki.html";
}
function Redic2(){
    window.location = "formDN.html";
}
function checkInfo() {
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    if (!username && !password) {
        alert("Vui lòng cung cấp thông tin.");
    } else if (!username) {
        alert("Vui lòng cung cấp tên tài khoản.");
    } else if (!password) {
        alert("Vui lòng cung cấp mật khẩu.");
    } else {
        alert("Đăng nhập thành công.");
    }
}
function checkInfo2(){
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('re-password').value;
    if (!username || !email || !password || !confirmPassword) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }
    if (username.length < 8) {
        alert("Tên tài khoản tối thiểu 8 kí tự");
        return;
    }
    const emailPattern = /^[^\s]+@[^\s]+\.[^\s]+$/;
    if (!emailPattern.test(email)) {
      alert("Địa chỉ email không hợp lệ.");
      return;
    }
    if (password.length < 8) {
        alert("Password tối thiểu 8 kí tự");
        return;
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu không trùng khớp.");
        return;
    }
    alert("Đăng kí thành công.");
}
function Reset(){
    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("password").value = null;
    document.getElementById("re-password").value = null;
}