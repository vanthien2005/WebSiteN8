function addToCart(productId) {
  console.log(productId);
  var size = document.querySelector("#sizeSP").value;
  console.log(size);
  // var quantity = document.getElementById("quantity").value;
  var quantity = 1;
  var productArray = JSON.parse(localStorage.getItem("product"));
  var productTemp;
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].id == productId) {
      productTemp = productArray[i];
    }
  }
  if (localStorage.getItem("cart") === null) {
    var cartArray = [];
    //productTemp.size = size;
    productTemp.quantity = quantity;
    productTemp.totalPrice = productTemp.quantity * productTemp.gia;
    productTemp.size = size;
    cartArray.unshift(productTemp);
    localStorage.setItem("cart", JSON.stringify(cartArray));
  } else {
    var cartArray = JSON.parse(localStorage.getItem("cart"));
    var check = false;
    for (var i = 0; i < cartArray.length; i++) {
      if (cartArray[i].id == productTemp.id) {
        cartArray[i].quantity += quantity;
        cartArray[i].totalPrice = cartArray[i].gia * cartArray[i].quantity;
        check = true;
      }
    }
    if (!check) {
      productTemp.quantity = quantity;
      productTemp.size = size;
      productTemp.totalPrice = quantity * productTemp.gia;
      cartArray.unshift(productTemp);
    }
    localStorage.setItem("cart", JSON.stringify(cartArray));
  }
  //closeProductInfo();
}

const LCS_SP = JSON.parse(localStorage.getItem("product"));
const menuListShoesProductMap = {
  all: [],
  artificialGrassShoes: [],
  naturalGlassShoes: [],
  kidsShoes: [],
};
const detailShoesMap = {
  artificialGrassShoes: [],
  naturalGlassShoes: [],
  kidsShoes: [],
};
const menuProductSelectPrice = {
  firstPrice: [],
  secondPrice: [],
  lastPrice: [],
};
const productArtificialGrassShoes = LCS_SP.filter(
  (productShoes) => productShoes.chiTietLoai === "Giày cỏ nhân tạo"
);
const productNaturalGlassShoes = LCS_SP.filter(
  (productShoes) => productShoes.chiTietLoai === "Giày cỏ tự nhiên"
);
const productKidsShoes = LCS_SP.filter(
  (productShoes) => productShoes.chiTietLoai === "Giày bóng đá trẻ em"
);
const detailProductArtificialGrassShoes = LCS_SP.filter(
  (productShoes) => productShoes.chiTietLoai === "Giày cỏ nhân tạo"
);
const detailProductNaturalGlassShoes = LCS_SP.filter(
  (productShoes) => productShoes.chiTietLoai === "Giày cỏ tự nhiên"
);
const detailProductKidsShoes = LCS_SP.filter(
  (productShoes) => productShoes.chiTietLoai === "Giày bóng đá trẻ em"
);
productArtificialGrassShoes.forEach((product, index) => {
  menuListShoesProductMap.artificialGrassShoes.push(
    `<article class = "productShoes" id = "${
      product.id
    }" data-type="artificialGrassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`
  );
  if (product.gia < 1000000) {
    menuProductSelectPrice.firstPrice
      .push(`<article class = "productShoes" id = "${
      product.id
    }" data-type="artificialGrassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p data-price = "${product.gia}">${product.gia.toLocaleString(
      "vi-VN"
    )}đ</p>
              </a>
            </footer>
          </div>
        </article>`);
  }
  if (product.gia >= 1000000 && product.gia < 2000000) {
    menuProductSelectPrice.secondPrice
      .push(`<article class = "productShoes" id = "${
      product.id
    }" data-type="artificialGrassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p data-price = "${product.gia}">${product.gia.toLocaleString(
      "vi-VN"
    )}đ</p>
              </a>
            </footer>
          </div>
        </article>`);
  }
  if (product.gia >= 2000000) {
    menuProductSelectPrice.lastPrice
      .push(`<article class = "productShoes" id = "${
      product.id
    }" data-type="artificialGrassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p data-price = "${product.gia}">${product.gia.toLocaleString(
      "vi-VN"
    )}đ</p>
              </a>
            </footer>
          </div>
        </article>`);
  }
});
productNaturalGlassShoes.forEach((product, index) => {
  menuListShoesProductMap.naturalGlassShoes.push(
    `<article class = "productShoes" id = "${
      product.id
    }" data-type="naturalGlassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`
  );
  if (product.gia < 1000000) {
    menuProductSelectPrice.firstPrice
      .push(`<article class = "productShoes" id = "${
      product.id
    }" data-type="naturalGlassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`);
  }
  if (product.gia >= 1000000 && product.gia < 2000000) {
    menuProductSelectPrice.secondPrice
      .push(`<article class = "productShoes" id = "${
      product.id
    }" data-type="naturalGlassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`);
  }
  if (product.gia >= 2000000) {
    menuProductSelectPrice.lastPrice
      .push(`<article class = "productShoes" id = "${
      product.id
    }" data-type="naturalGlassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`);
  }
});
productKidsShoes.forEach((product, index) => {
  menuListShoesProductMap.kidsShoes.push(
    `<article class = "productShoes" id = "${
      product.id
    }" data-type="kidsShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`
  );
  if (product.gia < 1000000) {
    menuProductSelectPrice.firstPrice
      .push(`<article class = "productShoes" id = "${
      product.id
    }" data-type="kidsShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`);
  }
  if (product.gia >= 1000000 && product.gia < 2000000) {
    menuProductSelectPrice.secondPrice
      .push(`<article class = "productShoes" id = "${
      product.id
    }" data-type="kidsShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`);
  }
  if (product.gia >= 2000000) {
    menuProductSelectPrice.lastPrice
      .push(`<article class = "productShoes" id = "${
      product.id
    }" data-type="kidsShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`);
  }
});
detailProductArtificialGrassShoes.forEach((product, index) => {
  detailShoesMap.artificialGrassShoes.push(
    `<article data-type = "artificialGrassShoes" data-id = "${index}">
                    <div class = "managerDetailShoes">
            <header class = "managerImgDetailShoes">
              <a href="#"><img src="${product.anh1}" alt="Hình ảnh thứ 1"></a>
              <a href="#">
              <img src="${product.anh2}" alt="Hình ảnh thứ 1">
              <img src="${product.anh3}" alt="Hình ảnh thứ 2">
              <img src="${product.anh4}" alt="Hình ảnh thứ 3">
              <img src="${product.anh5}" alt="Hình ảnh thứ 4">
              </a>
            </header>
            <footer class = "managerContentDetailShoes">
              <p>${product.ten}</p>
              <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              <ul>
                <li>Kiểu dáng: Thiết kế năng động, hỗ trợ di chuyển nhanh.</li>
                <li>Chất liệu: Da tổng hợp, vải lưới, tăng độ bền.</li>
                <li>Độ thoải mái: Đệm êm ái, ôm chân, giảm chấn.</li>
                <li>Đế giày: Đế cao su, chống trượt, bám tốt trên sân.</li>
                <li>Kích thước: Đủ size cho nam, nữ</li>
                <li>Màu sắc: Đa dạng, phong cách thể thao, thời thượng.</li>
              </ul>
              <p>Size:</p>
                   <select id="sizeSP">
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                </select>
              <a href="#">Hướng dẫn chọn kích cỡ</a>
              <div> 
              <button type = "submit">Mua ngay</button>
              <button type = "submit" onclick="addToCart('${
                product.id
              }')">Thêm vào giỏ hàng</button>
             </div>
            </footer>
          </div>
        </article>`
  );
});
detailProductNaturalGlassShoes.forEach((product, index) => {
  detailShoesMap.naturalGlassShoes.push(
    `<article data-type = "naturalGlassShoes" data-id = "${index}">
                    <div class = "managerDetailShoes">
            <header class = "managerImgDetailShoes">
              <a href="#"><img src="${product.anh1}" alt="Hình ảnh thứ 1"></a>
              <a href="#">
              <img src="${product.anh2}" alt="Hình ảnh thứ 1">
              <img src="${product.anh3}" alt="Hình ảnh thứ 2">
              <img src="${product.anh4}" alt="Hình ảnh thứ 3">
              <img src="${product.anh5}" alt="Hình ảnh thứ 4">
              </a>
            </header>
            <footer class = "managerContentDetailShoes">
              <p>${product.ten}</p>
              <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              <ul>
                <li>Kiểu dáng: Thiết kế năng động, hỗ trợ di chuyển nhanh.</li>
                <li>Chất liệu: Da tổng hợp, vải lưới, tăng độ bền.</li>
                <li>Độ thoải mái: Đệm êm ái, ôm chân, giảm chấn.</li>
                <li>Đế giày: Đế cao su, chống trượt, bám tốt trên sân.</li>
                <li>Kích thước: Đủ size cho nam, nữ</li>
                <li>Màu sắc: Đa dạng, phong cách thể thao, thời thượng.</li>
              </ul>
              <p>Size:</p>
                   <select id="sizeSP">
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                </select>
              <a href="#">Hướng dẫn chọn kích cỡ</a>
              <div> 
              <button type = "submit">Mua ngay</button>
              <button type = "submit" onclick="addToCart('${
                product.id
              }')">Thêm vào giỏ hàng</button>
             </div>
            </footer>
          </div>
        </article>`
  );
});
detailProductKidsShoes.forEach((product, index) => {
  detailShoesMap.kidsShoes.push(
    `<article data-type = "kidsShoes" data-id = "${index}">
                    <div class = "managerDetailShoes">
            <header class = "managerImgDetailShoes">
              <a href="#"><img src="${product.anh1}" alt="Hình ảnh thứ 1"></a>
              <a href="#">
              <img src="${product.anh2}" alt="Hình ảnh thứ 1">
              <img src="${product.anh3}" alt="Hình ảnh thứ 2">
              <img src="${product.anh4}" alt="Hình ảnh thứ 3">
              <img src="${product.anh5}" alt="Hình ảnh thứ 4">
              </a>
            </header>
            <footer class = "managerContentDetailShoes">
              <p>${product.ten}</p>
              <p>${product.gia.toLocaleString("vi-VN")}đ</p>
              <ul>
                <li>Kiểu dáng: Thiết kế năng động, hỗ trợ di chuyển nhanh.</li>
                <li>Chất liệu: Da tổng hợp, vải lưới, tăng độ bền.</li>
                <li>Độ thoải mái: Đệm êm ái, ôm chân, giảm chấn.</li>
                <li>Đế giày: Đế cao su, chống trượt, bám tốt trên sân.</li>
                <li>Kích thước: Đủ size cho nam, nữ</li>
                <li>Màu sắc: Đa dạng, phong cách thể thao, thời thượng.</li>
              </ul>
              <p>Size:</p>
                   <select id="sizeSP">
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                </select>
              <a href="#">Hướng dẫn chọn kích cỡ</a>
              <div> 
              <button type = "submit">Mua ngay</button>
              <button type = "submit" onclick="addToCart('${
                product.id
              }')">Thêm vào giỏ hàng</button>
             </div>
            </footer>
          </div>
        </article>`
  );
});

// Code gộp tất cả các sản phẩm vào all và hiển thị trên mục tất cả sản phẩm
for (let product in menuListShoesProductMap) {
  if (product != "all") {
    menuListShoesProductMap.all.push(...menuListShoesProductMap[product]);
  }
}
console.log(menuProductSelectPrice);
// console.log(menuListShoesProductMap);
// console.log(detailShoesMap);
// -------------- Truy cập vào các phần tử HTML DOM -------------
const noneListClothesProduct = document.querySelector(".listClothesProduct");
const noneDetailProductClothes = document.querySelector(
  ".detailProductClothes"
);
const imgHome = document.querySelector(".br-main"); // Truy cập vào phần tử chứa ảnh trang chủ
const specialProduct = document.querySelector(".special"); // Truy cập vào phần tử chứa các nội dung phần sản phẩm nổi bật
const navShoes = document.querySelector(".navShoes");
// console.log(navShoes);
const productDisplayHome = document.querySelector(".productDisplayHome"); // Truy cập vào phần tử chứa toàn bộ nội dung sản phẩm trưng bày ở trang chủ
const listShoesProduct = document.querySelector(".listShoesProduct"); // Truy cập vào phần tử chứa nội dung và danh sách List sản phẩm
// listShoesProduct.classList.add = "listShoesProduct article";
listShoesProduct.style.display = "none"; // Ban đầu khi chưa truy cập sẽ ẩn List sản phẩm đi
// allProductShoesAttribute.style.display = "none"; // Ban đầu chưa truy cập vào danh sách tất cả sản phẩm sẽ bị ẩn đi
const detailProductShoes = document.querySelector(".detailProductShoes"); // Truy cập vào phần tử chứa toàn bộ nội dung của chi tiết sản phẩm
detailProductShoes.style.display = "none"; // Khi chưa truy cập đến Chi tiết sản phẩm sẽ bị ẩn đi
const showDetailProduct = document.getElementById("showDetailProduct"); // Truy cập vào phần tử sẽ thể hiện chi tiết sản phẩm lên màn hình
showDetailProduct.style.display = "none"; // Khi chưa truy cập đến chi tiết sản phẩm sẽ bị ẩn đi
const otherTypeShoes = document.querySelector("#otherTypeShoes"); // Truy cập đến phần tử sẽ hiện thị danh sách sản phẩm tương ứng khi click chọn
const managerListTypeShoes = document.querySelectorAll(
  ".managerListTypeShoes a"
); // Truy cập vào phần tử managerListTypeShoes mang những điều hướng phụ trên danh sách

// -------------- Tạo các nút back về ---------------
const buttonBackHome = document.createElement("button"); // Tạo button để quay về trang chủ
// buttonBackHome.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; // Font awesome back arrow left
Object.assign(buttonBackHome.style, {
  // Thêm các thuộc tính CSS cho button
  marginLeft: "40px",
  fontSize: "35px",
  width: "70px",
  background: "rgb(170, 183, 161)",
  border: "none",
  cursor: "pointer",
});
const buttonBackListProductShoes = document.createElement("button");
// buttonBackListProductShoes.innerHTML =
//   '<i class="fa-solid fa-arrow-left-long"></i>';
Object.assign(buttonBackListProductShoes.style, {
  marginLeft: "30px",
  fontSize: "35px",
  width: "70px",
  backgroundColor: "white",
  border: "none",
  cursor: "pointer",
});
const amountProductPerPage = 8;
const productPerPageMap = [];
let page = 1;
function clickProduct() {
  const articles = otherTypeShoes.querySelectorAll("article");
  showDetailProduct.style.display = "none";
  // Thêm CSS cho từng article
  articles.forEach((article) => {
    article.style.display = "inline-block";
    article.style.margin = "20px 0px 10px 59px";
  });
  articles.forEach((element) => {
    // Truy cập đến các sản phẩm có trong mục tất cả sản phẩm
    element.addEventListener("click", function (event) {
      // Tạo sự kiện click chọn sản phẩm
      // console.log("Successful");
      event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ
      const getDataTypeProduct = event.currentTarget.getAttribute("data-type"); // Lấy ra data-type của sản phẩm khi click chọn
      const getDataIdProduct = event.currentTarget.getAttribute("data-id"); // Lấy ra data-id của sản phẩm khi click chọn
      if (getDataTypeProduct && getDataIdProduct) {
        // Kiểm tra nó kh trả về null
        updateDetailShoes(getDataTypeProduct, getDataIdProduct); // Update nội dung chi tiết sản phẩm tương ứng
        const bigImgDetailShoes = document.querySelector(
          ".managerImgDetailShoes a:first-child img "
        ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
        const smallImgDetailShoes = document.querySelectorAll(
          ".managerImgDetailShoes a:last-child img "
        ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
        let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
        // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
        // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
        smallImgDetailShoes.forEach(function (imgSmall, local) {
          // Duyệt qua tất cả các ảnh nhỏ imgSmall
          imgSmall.addEventListener("click", function (event) {
            // Thêm sự kiện click cho từng ảnh nhỏ
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // console.log("Successful");
            bigImgDetailShoes.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
            localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
          });
        });
        bigImgDetailShoes.addEventListener("click", function (event) {
          // Thêm sự kiện cho ảnh lớn
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          // console.log("Successful");
          localImg = (localImg + 1) % smallImgDetailShoes.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
          // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
          bigImgDetailShoes.src = smallImgDetailShoes[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
        });
      }
    });
  });
}
function displayPage() {
  window.scrollTo({ top: 0, behavior: "auto" });
  noneListClothesProduct.style.display = "none";
  noneDetailProductClothes.style.display = "none";
  contentNavigation.style.display = "none";
  noneListBrandProduct.style.display = "none";
  noneDetailProductBrand.style.display = "none";
  imgHome.style.display = "none"; // Ẩn ảnh nền trang chủ
  specialProduct.style.display = "none"; // Ẩn các sản phẩm nổi bật
  productDisplayHome.style.display = "none"; // Ẩn đi phần sản phẩm trưng bày trang chủ
  listShoesProduct.style.display = "block"; // Hiển thị danh sách sản phẩm
  listShoesProduct.prepend(buttonBackHome); // Thêm button vào đầu ListShoesProduct
  buttonBackHome.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; // Font awesome back arrow left
  buttonBackListProductShoes.innerHTML = "";
  buttonBackHome.addEventListener("click", function (event) {
    // Thêm sự kiện click
    event.preventDefault(); // Ngăn chặn hành vi mặc định
    imgHome.style.display = "block"; // Hiện ảnh nền trang chủ
    specialProduct.style.display = "block"; // Hiện các sản phẩm nổi bật
    productDisplayHome.style.display = "block"; // Hiện lại danh sách sản phẩm trưng bày trang chủ
    listShoesProduct.style.display = "none"; // Ẩn đi danh sách sản phẩm
    buttonBackHome.innerHTML = ""; // Xóa đi nút button trên HTML mỗi khi click vào lại sẽ kh bị trùng lặp
  });
}
// -------------- Code điều hướng trên thanh công cụ trang chủ --------------
const beforePage = document.querySelectorAll(".beforePage");
const afterPage = document.querySelectorAll(".afterPage");
function eventBeforePage(e) {
  e.preventDefault();
  console.log("successful");
  page--;
  if (page <= 1) {
    // console.log("Disabled before successful");
    document.querySelector(".beforePage").disabled;
    page = 1;
  }
  console.log(page);
  otherTypeShoes.innerHTML = productPerPageMap[page - 1];
  const articles = otherTypeShoes.querySelectorAll("article");
  showDetailProduct.style.display = "none";
  // Thêm CSS cho từng article
  articles.forEach((article) => {
    article.style.display = "inline-block";
    article.style.margin = "20px 0px 10px 59px";
  });
  articles.forEach((element) => {
    // Truy cập đến các sản phẩm có trong mục tất cả sản phẩm
    element.addEventListener("click", function (event) {
      // Tạo sự kiện click chọn sản phẩm
      // console.log("Successful");
      event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ
      const getDataTypeProduct = event.currentTarget.getAttribute("data-type"); // Lấy ra data-type của sản phẩm khi click chọn
      const getDataIdProduct = event.currentTarget.getAttribute("data-id"); // Lấy ra data-id của sản phẩm khi click chọn
      if (getDataTypeProduct && getDataIdProduct) {
        // Kiểm tra nó kh trả về null
        updateDetailShoes(getDataTypeProduct, getDataIdProduct); // Update nội dung chi tiết sản phẩm tương ứng
        const bigImgDetailShoes = document.querySelector(
          ".managerImgDetailShoes a:first-child img "
        ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
        const smallImgDetailShoes = document.querySelectorAll(
          ".managerImgDetailShoes a:last-child img "
        ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
        let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
        // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
        // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
        smallImgDetailShoes.forEach(function (imgSmall, local) {
          // Duyệt qua tất cả các ảnh nhỏ imgSmall
          imgSmall.addEventListener("click", function (event) {
            // Thêm sự kiện click cho từng ảnh nhỏ
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // console.log("Successful");
            bigImgDetailShoes.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
            localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
          });
        });
        bigImgDetailShoes.addEventListener("click", function (event) {
          // Thêm sự kiện cho ảnh lớn
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          // console.log("Successful");
          localImg = (localImg + 1) % smallImgDetailShoes.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
          // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
          bigImgDetailShoes.src = smallImgDetailShoes[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
        });
      }
    });
  });
}
function eventAfterPage(e) {
  e.preventDefault();
  console.log("successful");
  page++;
  if (page >= productPerPageMap.length) {
    // console.log("Disabled after successful");
    document.querySelector(".afterPage").disabled;
    page = productPerPageMap.length;
  }
  console.log(page);
  otherTypeShoes.innerHTML = productPerPageMap[page - 1];
  const articles = otherTypeShoes.querySelectorAll("article");
  showDetailProduct.style.display = "none";
  // Thêm CSS cho từng article
  articles.forEach((article) => {
    article.style.display = "inline-block";
    article.style.margin = "20px 0px 10px 59px";
  });
  articles.forEach((element) => {
    // Truy cập đến các sản phẩm có trong mục tất cả sản phẩm
    element.addEventListener("click", function (event) {
      // Tạo sự kiện click chọn sản phẩm
      // console.log("Successful");
      event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ
      const getDataTypeProduct = event.currentTarget.getAttribute("data-type"); // Lấy ra data-type của sản phẩm khi click chọn
      const getDataIdProduct = event.currentTarget.getAttribute("data-id"); // Lấy ra data-id của sản phẩm khi click chọn
      if (getDataTypeProduct && getDataIdProduct) {
        // Kiểm tra nó kh trả về null
        updateDetailShoes(getDataTypeProduct, getDataIdProduct); // Update nội dung chi tiết sản phẩm tương ứng
        const bigImgDetailShoes = document.querySelector(
          ".managerImgDetailShoes a:first-child img "
        ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
        const smallImgDetailShoes = document.querySelectorAll(
          ".managerImgDetailShoes a:last-child img "
        ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
        let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
        // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
        // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
        smallImgDetailShoes.forEach(function (imgSmall, local) {
          // Duyệt qua tất cả các ảnh nhỏ imgSmall
          imgSmall.addEventListener("click", function (event) {
            // Thêm sự kiện click cho từng ảnh nhỏ
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // console.log("Successful");
            bigImgDetailShoes.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
            localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
          });
        });
        bigImgDetailShoes.addEventListener("click", function (event) {
          // Thêm sự kiện cho ảnh lớn
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          // console.log("Successful");
          localImg = (localImg + 1) % smallImgDetailShoes.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
          // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
          bigImgDetailShoes.src = smallImgDetailShoes[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
        });
      }
    });
  });
}
function addButtonPage() {
  beforePage.forEach((button) => {
    button.addEventListener("click", eventBeforePage);
  });
  afterPage.forEach((button) => {
    button.addEventListener("click", eventAfterPage);
  });
}
function removeButtonPage() {
  page = 1;
  beforePage.forEach((button) => {
    button.removeEventListener("click", eventBeforePage);
  });
  afterPage.forEach((button) => {
    button.removeEventListener("click", eventAfterPage);
  });
}
const selectPriceShoes = document.querySelector("#selectPrice");
function addSelectPrice(getDataTypeShoes) {
  console.log("start select");
  selectPriceShoes.addEventListener("change", function (e) {
    const contentSelect = e.target.value;
    removeButtonPage();
    otherTypeShoes.innerHTML = "";
    console.log(contentSelect);
    if (getDataTypeShoes === "all") {
      if (contentSelect === "firstPrice") {
        otherTypeShoes.innerHTML = menuProductSelectPrice[contentSelect];
        clickProduct();
      }
      if (contentSelect === "secondPrice") {
        otherTypeShoes.innerHTML = menuProductSelectPrice[contentSelect];
        clickProduct();
      }
      if (contentSelect === "lastPrice") {
        otherTypeShoes.innerHTML = menuProductSelectPrice[contentSelect];
        clickProduct();
      }
    }
    if (getDataTypeShoes === "artificialGrassShoes") {
      console.log("artificialGrassShoes OK");
      if (contentSelect === "firstPrice") {
        productArtificialGrassShoes.forEach((product, index) => {
          if (product.gia < 1000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="artificialGrassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "secondPrice") {
        productArtificialGrassShoes.forEach((product, index) => {
          if (product.gia >= 1000000 && product.gia < 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="artificialGrassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "lastPrice") {
        productArtificialGrassShoes.forEach((product, index) => {
          if (product.gia >= 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="artificialGrassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
    }
    if (getDataTypeShoes === "naturalGlassShoes") {
      console.log("naturalGlassShoes OK");
      if (contentSelect === "firstPrice") {
        productNaturalGlassShoes.forEach((product, index) => {
          if (product.gia < 1000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="naturalGlassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "secondPrice") {
        productNaturalGlassShoes.forEach((product, index) => {
          if (product.gia >= 1000000 && product.gia < 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="naturalGlassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "lastPrice") {
        productNaturalGlassShoes.forEach((product, index) => {
          if (product.gia >= 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="naturalGlassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
    }
    if (getDataTypeShoes === "kidsShoes") {
      console.log("kidShoes OK");
      if (contentSelect === "firstPrice") {
        productKidsShoes.forEach((product, index) => {
          if (product.gia < 1000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="kidsShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "secondPrice") {
        productKidsShoes.forEach((product, index) => {
          if (product.gia >= 1000000 && product.gia < 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="kidsShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "lastPrice") {
        productKidsShoes.forEach((product, index) => {
          if (product.gia >= 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="kidsShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
    }
  });
}
function removeSelectPrice(getDataTypeShoes) {
  console.log("successful");
  selectPriceShoes.value = "selecting";
  selectPriceShoes.removeEventListener("change", function (e) {
    const contentSelect = e.target.value;
    removeButtonPage();
    otherTypeShoes.innerHTML = "";
    console.log(contentSelect);
    if (getDataTypeShoes == "all") {
      if (contentSelect === "firstPrice") {
        otherTypeShoes.innerHTML = menuProductSelectPrice[contentSelect];
        clickProduct();
      }
      if (contentSelect === "secondPrice") {
        otherTypeShoes.innerHTML = menuProductSelectPrice[contentSelect];
        clickProduct();
      }
      if (contentSelect === "lastPrice") {
        otherTypeShoes.innerHTML = menuProductSelectPrice[contentSelect];
        clickProduct();
      }
    }
    if (getDataTypeShoes === "artificialGrassShoes") {
      if (contentSelect === "firstPrice") {
        productArtificialGrassShoes.forEach((product, index) => {
          if (product.gia < 1000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="artificialGrassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "secondPrice") {
        productArtificialGrassShoes.forEach((product, index) => {
          if (product.gia >= 1000000 && product.gia < 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="artificialGrassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "lastPrice") {
        productArtificialGrassShoes.forEach((product, index) => {
          if (product.gia >= 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="artificialGrassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
    }
    if (getDataTypeShoes === "naturalGlassShoes") {
      if (contentSelect === "firstPrice") {
        productNaturalGlassShoes.forEach((product, index) => {
          if (product.gia < 1000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="naturalGlassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "secondPrice") {
        productNaturalGlassShoes.forEach((product, index) => {
          if (product.gia >= 1000000 && product.gia < 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="naturalGlassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "lastPrice") {
        productNaturalGlassShoes.forEach((product, index) => {
          if (product.gia >= 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="naturalGlassShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
    }
    if (getDataTypeShoes === "kidsShoes") {
      console.log("kidsShoes OK");
      if (contentSelect === "firstPrice") {
        productKidsShoes.forEach((product, index) => {
          if (product.gia < 1000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="kidsShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "secondPrice") {
        productKidsShoes.forEach((product, index) => {
          if (product.gia >= 1000000 && product.gia < 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="kidsShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
      if (contentSelect === "lastPrice") {
        productKidsShoes.forEach((product, index) => {
          if (product.gia >= 2000000) {
            otherTypeShoes.innerHTML += `<article class = "productShoes" id = "${
              product.id
            }" data-type="kidsShoes" data-id = "${index}">
          <div class = "managerProductShoes">
            <header class = "headerImgShoes">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentShoes">
              <a href="#" class = "managerContentShoes">
                <p>${product.ten}</p>
                <p">${product.gia.toLocaleString("vi-VN")}đ</p>
              </a>
            </footer>
          </div>
        </article>`;
          }
        });
        clickProduct();
      }
    }
  });
}
navShoes.addEventListener("click", function (e) {
  e.preventDefault();
  const getAttributeNavShoes = e.target.getAttribute("data-type");
  console.log(getAttributeNavShoes);
  if (getAttributeNavShoes) {
    updatePageProductShoes(getAttributeNavShoes);
    addButtonPage();
    addSelectPrice(getAttributeNavShoes);
    displayPage();
  }
});
// -------------- Code điều hướng các tác vụ trên nav trang chủ ----------------
document.querySelectorAll(".shoes2 li a").forEach((element) => {
  // Duyệt các phần tử là các type của sản phẩm: Giày cỏ nhân tạo, giày cỏ tự nhiên, ...
  element.addEventListener("click", function (event) {
    // Tạo sự kiện click cho từng phần tử type sản phẩm
    // console.log("Successful");
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
    // console.log("click successful");
    const getDataTypeShoes = event.target.getAttribute("data-type"); // Lấy giá trị attribute của type sản phẩm khi đang truy cập đến
    console.log(getDataTypeShoes);
    if (getDataTypeShoes) {
      productPerPageMap.length = 0;
      otherTypeShoes.innerHTML = "";
      removeButtonPage();
      updatePageProductShoes(getDataTypeShoes);
      addButtonPage();
      removeSelectPrice(getDataTypeShoes);
      addSelectPrice(getDataTypeShoes);
      displayPage();
    }
  });
});

// ------------ Code điều hướng list sản phẩm trên nav phụ ở ngay trong danh sách
managerListTypeShoes.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Successful");
    const getAttributeManagerListTypeShoes =
      event.currentTarget.getAttribute("data-type");
    console.log(getAttributeManagerListTypeShoes);
    if (getAttributeManagerListTypeShoes) {
      productPerPageMap.length = 0;
      // otherTypeShoes.innerHTML = "";
      removeButtonPage();
      updatePageProductShoes(getAttributeManagerListTypeShoes);
      addButtonPage();
      removeSelectPrice(getAttributeManagerListTypeShoes);
      addSelectPrice(getAttributeManagerListTypeShoes);
      noneListClothesProduct.style.display = "none";
      noneDetailProductClothes.style.display = "none";
      noneListBrandProduct.style.display = "none";
      noneDetailProductBrand.style.display = "none";
      contentNavigation.style.display = "none";
    }
  });
});
// ------------- Hàm update danh sách sản phẩm --------------
function updateListProductShoes(getDataTypeProduct) {
  if (menuListShoesProductMap[getDataTypeProduct]) {
    otherTypeShoes.innerHTML =
      menuListShoesProductMap[getDataTypeProduct].join("");
    clickProduct();
  }
}
function updatePageProductShoes(getDataTypeProduct) {
  if (menuListShoesProductMap[getDataTypeProduct]) {
    const allProductPage = menuListShoesProductMap[getDataTypeProduct];
    // console.log(allProductPage);
    const sumPage = Math.ceil(allProductPage.length / amountProductPerPage);
    for (let i = 0; i < sumPage; i++) {
      const start = i * amountProductPerPage;
      const end = start + amountProductPerPage;
      const productPerPage = allProductPage.slice(start, end);
      productPerPageMap.push(productPerPage);
    }
    // console.log(productPerPageMap);
    otherTypeShoes.innerHTML = productPerPageMap[page - 1];
    clickProduct();
  }
}
// -------------- Hàm update chi tiết sản phẩm -----------
function updateDetailShoes(getDataTypeProduct, getDataIdProduct) {
  // Hàm hiện thị chi tiết sản phẩm gồm data-type và vị trí của phần tử khi click chọn trong mảng chi tiết sản phẩm
  if (detailShoesMap[getDataTypeProduct][getDataIdProduct]) {
    // Kiểm tra có nội dung chi tiết bên trong mảng chứa hay không
    showDetailProduct.style.display = "block"; // Hiển thị phần tử chứa toàn bộ nội dung chi tiết sản phẩm
    showDetailProduct.innerHTML =
      detailShoesMap[getDataTypeProduct][getDataIdProduct]; // Nội dung chi tiết của sản phẩm được click chọn
    window.scrollTo({ top: 0, behavior: "auto" });
    detailProductShoes.style.display = "block"; // Hiện thị nội dung chứa toàn bộ các nội dung chi tiết
    listShoesProduct.style.display = "none"; // Ẩn đi danh sách sản phẩm
    // allProductShoesAttribute.style.display = "none"; // Ẩn đi danh sản phẩm tương ứng
    buttonBackListProductShoes.innerHTML =
      '<i class="fa-solid fa-arrow-left-long"></i>';
    detailProductShoes.prepend(buttonBackListProductShoes);
    buttonBackListProductShoes.addEventListener("click", function (event) {
      event.preventDefault();
      buttonBackListProductShoes.innerHTML = "";
      detailProductShoes.style.display = "none";
      listShoesProduct.style.display = "block";
    });
  }
}
// -------------- Truy cập tất cả phần tử từ trang chủ
const allProductShoesHome = document.querySelector(".allProductShoesHome");
// console.log(allProductShoesHome);
allProductShoesHome.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("successful");
  const getAttributeAllProductShoesHome =
    event.target.getAttribute("data-type");
  // console.log(getAttributeAllProductShoesHome);
  if (getAttributeAllProductShoesHome) {
    // displayProductPerPage(page);
    updatePageProductShoes(getAttributeAllProductShoesHome);
    removeSelectPrice(getAttributeAllProductShoesHome);
    addSelectPrice(getAttributeAllProductShoesHome);
    addButtonPage();
    displayPage();
  }
});

// --------------- Chi tiết sản phẩm trưng bày trang chủ ------------
function getRandomShoes(arr, n) {
  if (n > arr.length) {
    return;
  }
  // Tạo bản sao của mảng và xáo trộn
  const productShoesHome = arr.slice(); // Copy mảng để không làm thay đổi mảng gốc
  for (let i = productShoesHome.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1)); // Vị trí ngẫu nhiên
    [productShoesHome[i], productShoesHome[randomIndex]] = [
      productShoesHome[randomIndex],
      productShoesHome[i],
    ]; // Hoán đổi
  }

  // Trả về n phần tử đầu tiên
  return productShoesHome.slice(0, n);
}
const productShoesHomeMap = getRandomShoes(menuListShoesProductMap.all, 9);
// console.log(productShoesHomeMap);
const productShoesDisplayHome1 = document.querySelector(
  ".productShoesDisplayHome"
);
productShoesDisplayHome1.innerHTML += productShoesHomeMap.join("");
const listProductShoesDisplayHome = document.querySelectorAll(
  ".productShoesDisplayHome article"
);
function updateDetailShoesDisplayHome(
  getAttributeElementProductShoesDisplayHome,
  getIDElementProductShoesDisplayHome
) {
  if (
    detailShoesMap[getAttributeElementProductShoesDisplayHome][
      getIDElementProductShoesDisplayHome
    ]
  ) {
    showDetailProduct.style.display = "block"; // Hiển thị phần tử chứa toàn bộ nội dung chi tiết sản phẩm
    showDetailProduct.innerHTML =
      detailShoesMap[getAttributeElementProductShoesDisplayHome][
        getIDElementProductShoesDisplayHome
      ]; // Nội dung chi tiết của sản phẩm được click chọn
    window.scrollTo({ top: 0, behavior: "auto" });
    detailProductShoes.style.display = "block"; // Hiện thị nội dung chứa toàn bộ các nội dung chi tiết
    detailProductShoes.prepend(buttonBackHome); // Thêm button vào đầu ListShoesProduct
    buttonBackHome.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; // Font awesome back arrow left
    buttonBackListProductShoes.innerHTML = "";
    buttonBackHome.addEventListener("click", function (event) {
      // Thêm sự kiện click
      event.preventDefault(); // Ngăn chặn hành vi mặc định
      imgHome.style.display = "block"; // Hiện ảnh nền trang chủ
      specialProduct.style.display = "block"; // Hiện các sản phẩm nổi bật
      productDisplayHome.style.display = "block"; // Hiện lại danh sách sản phẩm trưng bày trang chủ
      detailProductShoes.style.display = "none"; // Ẩn đi danh sách sản phẩm
      contentNavigation.style.display = "none";
      buttonBackHome.innerHTML = ""; // Xóa đi nút button trên HTML mỗi khi click vào lại sẽ kh bị trùng lặp
      window.scrollTo({ top: 1300, behavior: "auto" });
    });
  }
}
// console.log(listProductShoesDisplayHome);
listProductShoesDisplayHome.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("successful");
    const getAttributeElementProductShoesDisplayHome =
      event.currentTarget.getAttribute("data-type");
    const getIDElementProductShoesDisplayHome =
      event.currentTarget.getAttribute("data-id");
    // console.log(
    //   getAttributeElementProductShoesDisplayHome,
    //   getIDElementProductShoesDisplayHome
    // );
    if (
      getAttributeElementProductShoesDisplayHome &&
      getIDElementProductShoesDisplayHome
    ) {
      // Kiểm tra nó kh trả về null
      removeButtonPage();
      updateDetailShoesDisplayHome(
        getAttributeElementProductShoesDisplayHome,
        getIDElementProductShoesDisplayHome
      );
      noneListClothesProduct.style.display = "none";
      noneDetailProductClothes.style.display = "none";
      noneListBrandProduct.style.display = "none";
      noneDetailProductBrand.style.display = "none";
      contentNavigation.style.display = "none";
      imgHome.style.display = "none"; // Ẩn ảnh nền trang chủ
      specialProduct.style.display = "none"; // Ẩn các sản phẩm nổi bật
      productDisplayHome.style.display = "none"; // Ẩn đi phần sản phẩm trưng bày trang chủ
      // Update nội dung chi tiết sản phẩm tương ứng
      const bigImgDetailShoes = document.querySelector(
        ".managerImgDetailShoes a:first-child img "
      ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
      const smallImgDetailShoes = document.querySelectorAll(
        ".managerImgDetailShoes a:last-child img "
      ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
      let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
      // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
      // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
      smallImgDetailShoes.forEach(function (imgSmall, local) {
        // Duyệt qua tất cả các ảnh nhỏ imgSmall
        imgSmall.addEventListener("click", function (event) {
          // Thêm sự kiện click cho từng ảnh nhỏ
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          // console.log("Successful");
          bigImgDetailShoes.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
          localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
        });
      });
      bigImgDetailShoes.addEventListener("click", function (event) {
        // Thêm sự kiện cho ảnh lớn
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        // console.log("Successful");
        localImg = (localImg + 1) % smallImgDetailShoes.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
        // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
        bigImgDetailShoes.src = smallImgDetailShoes[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
      });
    }
  });
});
