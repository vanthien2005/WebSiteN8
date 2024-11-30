var userpeople = [];
var ava = [];
var admin = [];
// show();
// var ad = {
//     acc : "admin1",
//     user : "admin",
//     pass : "123",
//     tele : "0903332665",
//     status: true
// }
// userpeople.push(ad);
// localStorage.setItem("people", JSON.stringify(userpeople));
function createAdmin() {
  var ad = {
    acc: "admin1",
    user: "admin",
    pass: "123",
    tele: "0903332665",
    status: true,
  };
  admin.push(ad);
  localStorage.setItem("admin", JSON.stringify(userpeople));
}
var tmp = JSON.parse(localStorage.getItem("admin"));
if (tmp == null) createAdmin();
// console.log(userpeople.length);

// document.getElementById("P").addEventListener("click", login);
// document.getElementById("K").addEventListener("click", signin);
function validatePhoneNumber(phone) {
  const regex = /^(0[3|5|7|8|9])[0-9]{8}$/;
  return regex.test(phone);
}

function signin() {
  event.preventDefault();
  var userpeople = JSON.parse(localStorage.getItem("people"));
  console.log(userpeople);
  var acc = document.getElementById("username").value;
  var user = document.getElementById("user1").value;
  var pass = document.getElementById("password1").value;
  var pass_again = document.getElementById("password_again").value;
  var tele = document.getElementById("telephone").value;
  if (acc == "") {
    alert("Bạn chưa nhập tên tài khoản");
    return;
  }
  if (user == "") {
    alert("Bạn chưa nhập tên đăng nhập");
    return;
  }
  while (true) {
    if (pass == pass_again) break;
    else {
      alert("Mật khẩu không đúng\nhãy thử lại");
      return;
    }
  }
  if (!validatePhoneNumber(tele)) {
    alert("số điện thoại nhập không hợp lệ");
    return;
    // tele.select();
  }

  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  const p = d + "/" + m + "/" + y;
  if (userpeople != null) {
    for (var i = 0; i < userpeople.length; i++) {
      if (userpeople[i].tdn == user) {
        alert("Tên đăng nhập đã tồn tại!");
        user.select();
        return;
      }
    }
  }
  // let s;
  // let len;
  // len = userpeople.length + 1;
  // while (1) {
  //   s = len.toString();
  //   if (len < 100) s = `00${len}`;
  //   let tmp = userpeople.filter((value) => {
  //     return value.ms_kh.includes(s);
  //   });
  //   if (tmp.length === 0) break;
  //   len++;
  // }

  // let idKH = `KH_${s}`;
  var tmp;
  if (userpeople != null) {
    if (userpeople.length <= 9) tmp = "0" + (userpeople.length + 1).toString();
    else tmp = (userpeople.length + 1).toString();
  } else {
    userpeople = [];
    tmp = "01";
  }
  var mem = {
    ms_kh: "KH_0" + tmp,
    hvt: acc,
    tdn: user,
    password: pass,
    tele: tele,
    status: true,
    ndk: p,
  };
  userpeople.push(mem);
  var json = JSON.stringify(userpeople);
  localStorage.setItem("people", json);
  console.log(userpeople);
  alert("Đăng kí thành công");

  updateContent("login");

  return false;
}

function login() {
  event.preventDefault();
  var username = document.getElementById("user").value;
  var pass = document.getElementById("password").value;
  var data = JSON.parse(localStorage.getItem("people"));
  if (JSON.parse(localStorage.getItem("people")) == null) data = [];
  var data1 = JSON.parse(localStorage.getItem("admin"));

  if (data1[0].user == username && data1[0].pass == pass) {
    window.location.href = "./code_admin/admin.html";
    return true;
  }

  console.log(data1);

  var check = false;

  for (var i = 0; i < data.length; i++) {
    // console.log(data[i]);
    if (username == "") {
      alert("Vui lòng nhập tên tài khoản");
      return;
    } else if (pass == "") {
      alert("vui lòng nhập mật khẩu");
      return;
    } else if (data[i].tdn == username && data[i].password == pass) {
      console.log("a");
      if (data[i].status == true) {
        ava.push(data[i]);
        localStorage.setItem("ava", JSON.stringify(ava));
        alert("Chào mừng " + data[i].hvt + " đến với website");
        window.location.href = "./index.html?";
        return true;
      } else {
        alert("Tài khoản của bạn đã bị khóa");

        window.location.href = "./index.html?";
        return;
      }
    }
  }
  if (!check) {
    alert("Tài khoản hoặc mật khẩu của bạn bị sai!");
    return;
  }
}
const userHome = document.querySelector(".user");
const inforCustomer = document.querySelector(".inforCustomer");
let click = 1;
// inforCustomer.style.display = "none";
function display() {
  var url = window.location.href;
  var a = url.split("?");
  if (a[1] == "login") {
    document.getElementsByTagName("main")[1].innerHTML = `
        <div id="login">
        <form id="contain">
            <h2>Đăng kí</h2>
            <input type="text" id="user" placeholder="Tên đăng nhâp"/><i class="fa-solid fa-user"></i>
            <input type="password" id="password" placeholder="Mật khẩu">
            <div id="signin">
                <span>Quên mật khẩu</span>
                <span>
                    
                </span>
            </div>
            <div>
                <button type="submit">Đăng ký</button>
            </div>
        </form>
    </div>
    <img class = "imgLogin" src="../img_admin/anhtrangchu.jpg">`;
    for (var i = 2; i < 11; i++) {
      document.getElementsByTagName("main")[i].innerHTML = ``;
    }
  } else if (a[1] == "signin") {
    document.getElementsByTagName("main")[1].innerHTML = `
        <div id="login">
        <form id="contain">
            <h2>Đăng ký</h2>
            <input type="text" id="username" placeholder="Tên tài khoản">
            <input type="text" id="user" placeholder="Tên đăng nhâp">
            <div id="ps">
                <input type="password" id="password1" placeholder="Mật khẩu">
                <input type="password" id="password_again" placeholder="Nhập lại mật khẩu">
            </div>
            <input type="tel" id="telephone" placeholder="Số điện thoại">
            <div>
                <button type="submit">Đăng nhập</button>
            </div>
        </form>
    </div>
    <img class = "imgLogin" src="../img_admin/anhtrangchu.jpg">`;
    for (var i = 2; i < 11; i++) {
      document.getElementsByTagName("main")[i].innerHTML = ``;
    }
  } else {
    var a = JSON.parse(localStorage.getItem("ava"));
    document.querySelector("#a").innerHTML = a[0].hvt;
  }
}

function view() {
  document.getElementsByTagName("main")[1].innerHTML = `<div id="login">
        <form id="contain">
          <label for="acc" style="margin: 0;">Tên tài khoản</label>
            <input type="text" id="acc" style="margin: 15px; padding: 5px; border-radius: 10px" readOnly=true>       
            <br>
            <label for="user" style="margin: 0;">Tên đăng nhập</label>
            <input type="text" id="user" style="margin: 15px; padding: 5px; border-radius: 10px" readOnly=true>    
            <br>
            <label for="matKhau" style="margin: 0;">Mật khẩu</label>
            <input type="password" id="matKhau" style="margin: 15px; padding: 5px; border-radius: 10px; color: white" readOnly=true>
            <div style="display: flex; flex-direction: row; justify-content: right">
              <label for="hienMK" style="font-style: italic">Hiện mật khẩu</label>
              <input name="hienMK" type="checkbox" id="hienThiMK" onclick="showPassword()" style="margin:-5px -5px -5px 10px">
            </div>
            <br>
            <label for="telephone" style="margin: 0;">Số điện thoại</label>
            <input type="tel" id="telephone" style="margin: 15px; padding: 5px; border-radius: 10px" readOnly=true>
            <button type="button" onclick="exit1()">Thoat</button>
        </form>
    </div>`;
  for (var i = 2; i < 11; i++) {
    document.getElementsByTagName("main")[i].innerHTML = ``;
  }
  show();
}

function show() {
  var a = JSON.parse(localStorage.getItem("ava"));
  document.getElementById("acc").value = a[0].hvt;
  document.getElementById("user").value = a[0].tdn;
  document.getElementById("matKhau").value = a[0].password;
  document.getElementById("telephone").value = a[0].tele;
}

function logout() {
  localStorage.removeItem("ava");
  window.location.href = "./index.html?";
}

function exit1() {
  window.location.href = "./index.html?";
}
function exit() {
  window.location.href = "../index.html?";
}
let a = document.getElementById("thoat");
if (a != null) {
  a.addEventListener("mouseover", function () {
    a.innerHTML = "Đăng xuất";
  });
  a.addEventListener("mouseout", function () {
    a.innerHTML = "Admin";
  });
}

function cart() {
  if (JSON.parse(localStorage.getItem("ava") == null)) {
    alert("Bạn phải đăng nhập để mua hàng");
    return;
  }
  window.location.href = "./Cart/cart.html";
}

if (JSON.parse(localStorage.getItem("ava")) != null) {
  document.getElementsByClassName("login4")[0].style.display = "none";
  document.getElementsByClassName("login5")[0].style.display = "none";
}

window.onload = function () {
  // display();
  showUser();
};

function showUser() {
  let e = document.getElementsByClassName("inforCustomer")[0];
  let user = JSON.parse(localStorage.getItem("ava"))[0];
  if (user == null) {
    return;
  }
  let s = `
    <div id='hello' style="display: flex; flex-direction: column; justify-content: center">
      <div id="a" style="font-size: 16px; text-align: center">${user.hvt}</div>
      <button type="button" id="bye" onclick="logout()">Đăng xuất</button>
      <button type="button" id="bye1" onclick="view()">Thông tin tài khoản</button>
    </div>
  `;
  e.innerHTML = s;
  e.style.backgroundColor = "#0f1b0779";
  // e.style.display = "block";
  // confirm("jdsds");
}

function showPassword() {
  var passwordInput = document.getElementById("matKhau");
  var checkbox = document.getElementById("hienThiMK");
  if (checkbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
