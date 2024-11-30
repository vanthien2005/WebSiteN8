/*SEARCH*/
const productSearch = {
  products: [],
};
const detailProductSearch = {
  products: [],
};
var product = [];
const otherTypeSearch = document.querySelector(".otherTypeSearch");
otherTypeSearch.style.display = "none";
const displayDetailProductSearch = document.querySelector(
  ".detailProductSearch"
);
const showDetailSearch = document.querySelector("#showDetailSearch");
displayDetailProductSearch.style.display = "none";
const buttonBackListSearch = document.createElement("button");
const searching = document.createElement("p");
Object.assign(buttonBackListSearch.style, {
  marginLeft: "45px",
  fontSize: "35px",
  width: "70px",
  backgroundColor: "white",
  border: "none",
  cursor: "pointer",
  marginBottom: "10px",
  marginTop: "-6px",
});
Object.assign(searching.style, {
  fontSize: "30px",
  color: "white",
  marginTop: "-20px",
  marginLeft: "50px",
  marginBottom: "10px",
});
function updateDetailSearch(getDataTypeProduct, getDataIdProduct) {
  console.log(detailProductSearch.products[getDataIdProduct]);
  if (detailProductSearch.products[getDataIdProduct]) {
    otherTypeSearch.style.display = "none";
    displayDetailProductSearch.style.display = "block";
    showDetailSearch.innerHTML = detailProductSearch.products[getDataIdProduct];
    buttonBackListSearch.innerHTML =
      '<i class="fa-solid fa-arrow-left-long"></i>';
    displayDetailProductSearch.prepend(buttonBackListSearch);
    window.scrollTo({ top: 0, behavior: "auto" });
    buttonBackListSearch.addEventListener("click", function (e) {
      e.preventDefault();
      otherTypeSearch.style.display = "block";
      displayDetailProductSearch.style.display = "none";
    });
  }
}
function search() {
  product = [];
  var productsearch = document.getElementById("sr").value.toLowerCase();
  console.log(productsearch);
  var productArray = JSON.parse(localStorage.getItem("product"));
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].ten.toLowerCase().indexOf(productsearch) != -1) {
      product.push(productArray[i]);
    }
  }
  console.log(product);
  localStorage.setItem("searchProduct", JSON.stringify(product));
  product.forEach((temp, index) => {
    console.log(temp);
    productSearch.products.push(`<article class = "product" id = "${
      temp.id
    }" data-type="${temp.thuonghieu}" data-id = "${index}">
            <div class = "managerProduct">
              <header class = "headerImg">
                <a href="#" class = "managerImg">
                  <img src="${temp.anh1}" alt="Hình ảnh thứ 1">
                  <img src="${temp.anh2}" alt="Hình ảnh thứ 2">
                </a>
              </header>
              <footer class = "footerContent">
                <a href="#" class = "managerContent">
                  <p>${temp.ten}</p>
                  <p>${temp.gia.toLocaleString("vi-VN")}</p>
                </a>
              </footer>
            </div>
          </article>`);
  });
  product.forEach((temp, index) => {
    if (temp.loai === "Giày") {
      detailProductSearch.products.push(`<article data-type = "${
        temp.thuonghieu
      }" data-id = "${index}">
                    <div class = "managerDetailBrand">
            <header class = "managerImgDetailBrand">
              <a href="#"><img src="${temp.anh1}" alt="Hình ảnh thứ 1"></a>
              <a href="#">
              <img src="${temp.anh2}" alt="Hình ảnh thứ 1">
              <img src="${temp.anh3}" alt="Hình ảnh thứ 2">
              <img src="${temp.anh4}" alt="Hình ảnh thứ 3">
              <img src="${temp.anh5}" alt="Hình ảnh thứ 4">
              </a>
            </header>
            <footer class = "managerContentDetailBrand">
              <p>${temp.ten}</p>
              <p>${temp.gia.toLocaleString("vi-VN")}</p>
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
              <button type = "submit">Thêm vào giỏ hàng</button>
             </div>
            </footer>
          </div>
        </article>`);
    }
    if (temp.loai == "Quần Áo") {
      detailProductSearch.products.push(`<article data-type = "${
        temp.thuonghieu
      }" data-id = "${index}">
            <div class = "managerDetailBrand">
    <header class = "managerImgDetailBrand">
      <a href="#"><img src="${temp.anh1}" alt="Hình ảnh giao diện"></a>
      <a href="#">
      <img src="${temp.anh2}" alt="Hình ảnh thứ 1">
      <img src="${temp.anh3}" alt="Hình ảnh thứ 2">
      <img src="${temp.anh4}" alt="Hình ảnh thứ 3">
      <img src="${temp.anh5}" alt="Hình ảnh thứ 4">
      </a>
    </header>
    <footer class = "managerContentDetailBrand">
       <p>${temp.ten}</p>
      <p>${temp.gia.toLocaleString("vi-VN")}</p>
      <ul>
        <li>Kiểu dáng: Thiết kế ôm, năng động, thoải mái di chuyển trên sân.</li>
        <li>Chất liệu: Vải polyester cao cấp, giúp giữ mát và thấm hút mồ hôi.</li>
        <li>Độ thoải mái: Mềm mại, nhẹ nhàng, cho cảm giác thoải mái tối đa.</li>
        <li>Độ bền: Đường may chắc chắn, chịu được hoạt động cường độ cao.</li>
        <li>Kích thước: Đủ size cho nam, nữ</li>
        <li>Màu sắc: Đa dạng, phong cách thể thao, thời thượng.</li>
      </ul>
      <p>Size:</p>
      <select id="sizeSP">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
      <a href="#">Hướng dẫn chọn kích cỡ</a>
      <div> 
      <button type = "submit">Mua ngay</button>
      <button type = "submit">Thêm vào giỏ hàng</button>
     </div>
    </footer>
  </div>
          </article>`);
    }
  });
  console.log(detailProductSearch);
  otherTypeSearch.style.display = "block";
  otherTypeSearch.innerHTML = "";
  otherTypeSearch.innerHTML = productSearch.products.join("");
  searching.innerText = "Sản phẩm bạn cần tìm kiếm";
  otherTypeSearch.prepend(searching);
  noneListClothesProduct.style.display = "none";
  noneDetailProductClothes.style.display = "none";
  noneListBrandProduct.style.display = "none";
  contentNavigation.style.display = "none";
  noneDetailProductBrand.style.display = "none";
  imgHome.style.display = "none"; // Ẩn ảnh nền trang chủ
  specialProduct.style.display = "none"; // Ẩn các sản phẩm nổi bật
  productDisplayHome.style.display = "none"; // Ẩn đi phần sản phẩm trưng bày trang chủ
  const articles = otherTypeSearch.querySelectorAll("article");
  displayDetailProductSearch.style.display = "none";
  articles.forEach((article) => {
    article.style.display = "inline-block";
    article.style.margin = "10px 0px 10px 59px";
  });
  articles.forEach((e) => {
    e.addEventListener("click", function (event) {
      event.preventDefault();
      const getDataTypeProduct = event.currentTarget.getAttribute("data-type");
      const getDataIdProduct = event.currentTarget.getAttribute("data-id");
      console.log(getDataTypeProduct, getDataIdProduct);
      if (getDataIdProduct && getDataTypeProduct) {
        updateDetailSearch(getDataTypeProduct, getDataIdProduct);
        const bigImgDetailSearch = document.querySelector(
          ".managerImgDetailBrand a:first-child img"
        );
        const smallImgDetailSearch = document.querySelectorAll(
          ".managerImgDetailBrand a:last-child img"
        );
        let localImgSearch = 0;
        smallImgDetailSearch.forEach(function (imgSmall, local) {
          imgSmall.addEventListener("click", function (e) {
            e.preventDefault();
            bigImgDetailSearch.src = imgSmall.src;
            localImgSearch = local;
          });
        });
        bigImgDetailSearch.addEventListener("click", function (e) {
          e.preventDefault();
          localImgSearch = (localImgSearch + 1) % smallImgDetailSearch.length;
          bigImgDetailSearch.src = smallImgDetailSearch[localImgSearch].src;
        });
      }
    });
  });
}
const contentSearch = document.querySelector("#sr");
contentSearch.addEventListener("keydown", (e) => {
  if (e.key != "Enter") {
    return;
  }
  console.log("success");
  product.length = 0;
  productSearch.products.length = 0;
  detailProductSearch.products.length = 0;
  search();
});

function qlSearch(event) {
  if (event.key === "Enter") {
    search(); // Gọi hàm search khi nhấn Enter
  }
}
/*END SEARCH*/
