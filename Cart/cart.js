// createProduct();
// createDonHang();
let DS_KH = [
  {
    ms_kh: "KH_001",
    hvt: "Nguyễn Văn A",
    tdn: "nva123",
    ndk: "22-08-2024",
    password: "123456789",
    status: true,
  },
  {
    ms_kh: "KH_002",
    hvt: "Nguyễn Văn B",
    tdn: "nvb123",
    ndk: "23-08-2024",
    status: true,
    password: "12345678",
  },
  {
    ms_kh: "KH_003",
    hvt: "Nguyễn Văn C",
    tdn: "nvc123",
    ndk: "24-08-2024",
    status: true,
    password: "123456788",
  },
  {
    ms_kh: "KH_004",
    hvt: "Trần Văn A",
    tdn: "tva123",
    ndk: "26-08-2024",
    status: true,
    password: "123456767",
  },
  {
    ms_kh: "KH_005",
    hvt: "Trần Văn B",
    tdn: "tvb123",
    ndk: "27-08-2024",
    status: true,
    password: "023456789",
  },
  {
    ms_kh: "KH_006",
    hvt: "Trương Văn A",
    tdn: "tva1234",
    ndk: "30-08-2024",
    status: true,
    password: "0123456789",
  },
];
// localStorage.setItem("people", JSON.stringify(DS_KH));

let ava = JSON.parse(localStorage.getItem("ava"));
let user = ava[0];
// let user = DS_KH[2];
function test() {
  var productArray = JSON.parse(localStorage.getItem("product"));
  // console.log(productArray[0].id);
  addToCart(productArray[0].id);
  addToCart(productArray[1].id);
  addToCart(productArray[2].id);
  addToCart(productArray[29].id);
}
// test();
showCartTable();
//createAdmin();

function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
/* ------------------------------DON HANG--------------------------------*/
function createDonHang() {
  if (localStorage.getItem("donHang") === null) {
    // Data của đơn hàng
    let ds_sp = JSON.parse(localStorage.getItem("product"));
    const DS_DH = [
      {
        maDH: "DH_01",
        ngay: "23/9/2023",
        maKH: "KH_004",
        chiTiet: {
          listSP: [
            {
              sp: ds_sp[1],
              soLuong: 1,
              size: "40",
            },
            {
              sp: ds_sp[30],
              soLuong: 2,
              size: "XL",
            },
          ],
        },
        thanhToan: "Chưa thanh toán",
        trangThai: "Đã hủy",
      },
      {
        maDH: "DH_02",
        ngay: "1/10/2023",
        maKH: "KH_003",
        chiTiet: {
          listSP: [
            {
              sp: ds_sp[10],
              soLuong: 1,
              size: "39",
            },
            {
              sp: ds_sp[25],
              soLuong: 3,
              size: "L",
            },
          ],
        },
        thanhToan: "Chưa thanh toán",
        trangThai: "Đã giao hàng",
      },
      {
        maDH: "DH_03",
        ngay: "5/10/2023",
        maKH: "KH_006",
        chiTiet: {
          listSP: [
            {
              sp: ds_sp[6],
              soLuong: 2,
              size: "41",
            },
            {
              sp: ds_sp[20],
              soLuong: 1,
              size: "XL",
            },
          ],
        },
        thanhToan: "Đã thanh toán",
        trangThai: "Đã xác nhận",
      },
      {
        maDH: "DH_04",
        ngay: "10/10/2023",
        maKH: "KH_002",
        chiTiet: {
          listSP: [
            {
              sp: ds_sp[10],
              soLuong: 1,
              size: "40",
            },
            {
              sp: ds_sp[33],
              soLuong: 2,
              size: "M",
            },
          ],
        },
        thanhToan: "Chưa thanh toán",
        trangThai: "Chưa xử lí",
      },
      {
        maDH: "DH_05",
        ngay: "13/10/2023",
        maKH: "KH_005",
        chiTiet: {
          listSP: [
            {
              sp: ds_sp[19],
              soLuong: 1,
              size: "43",
            },
            {
              sp: ds_sp[31],
              soLuong: 1,
              size: "XXL",
            },
          ],
        },
        thanhToan: "Đã thanh toán",
        trangThai: "Đã hủy",
      },
      {
        maDH: "DH_06",
        ngay: "18/10/2023",
        maKH: "KH_006",
        chiTiet: {
          listSP: [
            {
              sp: ds_sp[16],
              soLuong: 1,
              size: "40",
            },
            {
              sp: ds_sp[22],
              soLuong: 2,
              size: "M",
            },
          ],
        },
        thanhToan: "Đã thanh toán",
        trangThai: "Đã giao hàng",
      },
      {
        maDH: "DH_07",
        ngay: "20/10/2023",
        maKH: "KH_006",
        chiTiet: {
          listSP: [
            {
              sp: ds_sp[14],
              soLuong: 1,
              size: "38",
            },
            {
              sp: ds_sp[28],
              soLuong: 2,
              size: "M",
            },
          ],
        },
        thanhToan: "Đã thanh toán",
        trangThai: "Đã xác nhận",
      },
      {
        maDH: "DH_08",
        ngay: "25/10/2023",
        maKH: "KH_002",
        chiTiet: {
          listSP: [
            {
              sp: ds_sp[0],
              soLuong: 1,
              size: "40",
            },
            {
              sp: ds_sp[11],
              soLuong: 2,
              size: "43",
            },
          ],
        },
        thanhToan: "Đã thanh toán",
        trangThai: "Chưa xử lí",
      },
    ];
    // localStorage.setItem("DS_DH", JSON.stringify(DS_DH));
  }
}
function addtoDonHang() {}
/* -------------------------------Product------------------------------- */

function createProduct() {
  if (localStorage.getItem("product") === null) {
    // Data của sản phẩm
    const LCS_SP = [
      {
        id: "SP_01",
        ten: "Nike Zoovapor 15 Academy Tf - Hồng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_01/giay1.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_01/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_01/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_01/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_01/anh5.png",
        gia: 1565000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Nike",
      },
      {
        id: "SP_02",
        ten: "Nike Zoom Mercurial Superfly 9 Academy Km Tf - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_02/giay2.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_02/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_02/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_02/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_02/anh5.png",
        gia: 1859000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Nike",
      },
      {
        id: "SP_03",
        ten: "Nike Phantom Gx Academy Tf - Xám",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_03/giay3.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_03/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_03/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_03/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_03/anh5.png",
        gia: 1565000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Nike",
      },
      {
        id: "SP_04",
        ten: "Nike Zoom Superfly 9 Academy Firmground Fg - Xanh Mint",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_04/giay4.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_04/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_04/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_04/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_04/anh5.png",
        gia: 1763000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ tự nhiên",
        thuonghieu: "Nike",
      },
      {
        id: "SP_05",
        ten: "Nike Zoom Superfly 10 Academy Tf - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_05/giay5.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_05/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_05/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_05/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_05/anh5.png",
        gia: 3059000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Nike",
      },
      {
        id: "SP_06",
        ten: "Unisex Adidas Copa Pure 2 League Tf - Đen",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_06/giay6.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_06/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_06/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_06/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_06/anh5.png",
        gia: 2100000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_07",
        ten: "Adidas X Crazyfast Elite Fg - Vàng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_07/giay7.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_07/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_07/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_07/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_07/anh5.png",
        gia: 3480000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ tự nhiên",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_08",
        ten: "Unisex Adidas Predator Elite Tf - Đen",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_08/giay8.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_08/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_08/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_08/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_08/anh5.png",
        gia: 2450000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_09",
        ten: "Unisex Adidas Copa Pure 2 Club Tf - Trắng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_09/giay9.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_09/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_09/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_09/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_09/anh5.png",
        gia: 1050000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_10",
        ten: "Unisex Adidas Predator League Tf - Hồng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_10/giay10.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_10/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_10/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_10/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_10/anh5.png",
        gia: 2400000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_11",
        ten: "Adidas Predator League Turf Tf - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_11/giay11.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_11/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_11/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_11/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_11/anh5.png",
        gia: 1222000,
        loai: "Giày",
        chiTietLoai: "Giày bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_12",
        ten: "Adidas Predator League Fg - Đen",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_12/giay12.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_12/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_12/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_12/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_12/anh5.png",
        gia: 1700000,
        loai: "Giày",
        chiTietLoai: "Giày bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_13",
        ten: "Nike Jr Legend 10 Club Fg - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_13/giay13.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_13/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_13/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_13/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_13/anh5.png",
        gia: 1289000,
        loai: "Giày",
        chiTietLoai: "Giày bóng đá trẻ em",
        thuonghieu: "Nike",
      },
      {
        id: "SP_14",
        ten: "Nike Jr Zoom Mercurial Superfly 9 Academy Fg - Xám",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_14/giay14.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_14/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_14/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_14/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_14/anh5.png",
        gia: 1413000,
        loai: "Giày",
        chiTietLoai: "Giày bóng đá trẻ em",
        thuonghieu: "Nike",
      },
      {
        id: "SP_15",
        ten: "Adidas X Crazyfast League Tf - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_15/giay15.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_15/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_15/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_15/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_15/anh5.png",
        gia: 1222000,
        loai: "Giày",
        chiTietLoai: "Giày bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_16",
        ten: "Puma Future Match TT Tf - Trắng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_16/giay16.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_16/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_16/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_16/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_16/anh5.png",
        gia: 799000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Puma",
      },
      {
        id: "SP_17",
        ten: "Puma Future Ultimate Cage Tf - Vàng Xanh",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_17/giay17.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_17/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_17/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_17/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_17/anh5.png",
        gia: 1099000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Puma",
      },
      {
        id: "SP_18",
        ten: "Puma Ultra Ultimate Energy Tf - Hồng Xanh",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_18/giay18.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_18/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_18/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_18/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_18/anh5.png",
        gia: 1099000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Puma",
      },
      {
        id: "SP_19",
        ten: "Puma Ultra Ultimate Cage TT Tf - Vàng Gold",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_19/giay19.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_19/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_19/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_19/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_19/anh5.png",
        gia: 1099000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Puma",
      },
      {
        id: "SP_20",
        ten: "Puma Ultra Ultimate Cage Tf - Tím đen",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_20/giay20.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_20/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_20/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_20/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_20/anh5.png",
        gia: 1099000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Puma",
      },
      {
        id: "SP_21",
        ten: "Áo Adidas Arsenal - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_21/ao21.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_21/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_21/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_21/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_21/anh5.png",
        gia: 1980000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các câu lạc bộ",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_22",
        ten: "Áo Adidas Real Madrid - Trắng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_22/ao22.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_22/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_22/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_22/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_22/anh5.png",
        gia: 3000000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các câu lạc bộ",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_23",
        ten: "Áo Nike Liverpool FC - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_23/ao23.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_23/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_23/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_23/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_23/anh5.png",
        gia: 2276000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các câu lạc bộ",
        thuonghieu: "Nike",
      },
      {
        id: "SP_24",
        ten: "Áo Nike Paris Saint-Germain - Xanh Navy",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_24/ao24.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_24/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_24/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_24/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_24/anh5.png",
        gia: 3500000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các câu lạc bộ",
        thuonghieu: "Nike",
      },
      {
        id: "SP_25",
        ten: "Áo Adidas Manchester United - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_25/ao25.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_25/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_25/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_25/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_25/anh5.png",
        gia: 3000000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các câu lạc bộ",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_26",
        ten: "Áo Adidas Spain - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_26/ao26.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_26/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_26/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_26/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_26/anh5.png",
        gia: 1581000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các đội tuyển quốc gia",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_27",
        ten: "Áo Adidas Germany - Hồng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_27/ao27.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_27/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_27/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_27/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_27/anh5.png",
        gia: 1581000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các đội tuyển quốc gia",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_28",
        ten: "Áo Adidas Italy - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_28/ao28.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_28/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_28/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_28/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_28/anh5.png",
        gia: 1581000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các đội tuyển quốc gia",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_29",
        ten: "Áo Adidas Argentina - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_29/ao29.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_29/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_29/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_29/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_29/anh5.png",
        gia: 1581000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các đội tuyển quốc gia",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_30",
        ten: "Áo Nike England - Xám Than",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_30/ao30.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_30/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_30/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_30/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_30/anh5.png",
        gia: 1990000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các đội tuyển quốc gia",
        thuonghieu: "Nike",
      },
      {
        id: "SP_31",
        ten: "Áo Adidas Manchester United - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_31/ao31.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_31/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_31/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_31/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_31/anh5.png",
        gia: 1500000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_32",
        ten: "Áo Adidas Real Madrid - Trắng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_32/ao32.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_32/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_32/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_32/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_32/anh5.png",
        gia: 1500000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_33",
        ten: "Áo Adidas Arsenal - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_33/ao33.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_33/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_33/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_33/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_33/anh5.png",
        gia: 1500000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_34",
        ten: "Áo Nike Fc Barcelona - Vàng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_34/ao34.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_34/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_34/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_34/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_34/anh5.png",
        gia: 1370000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo bóng đá trẻ em",
        thuonghieu: "Nike",
      },
      {
        id: "SP_35",
        ten: "Áo Adidas Spain - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_35/ao35.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_35/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_35/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_35/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_35/anh5.png",
        gia: 1370000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
    ];
    localStorage.setItem("product", JSON.stringify(LCS_SP));
  }
}

/* -----------------------------------Cart------------------------------------- */

// function addToCart(productId) {
//   var size = document.querySelector("#sizeSP").value;
//   // var quantity = document.getElementById("quantity").value;
//   var quantity = 1;
//   var sizeAo = "L";
//   var sizeGiay = "38";
//   var productArray = JSON.parse(localStorage.getItem("product"));
//   var productTemp;
//   for (var i = 0; i < productArray.length; i++) {
//     if (productArray[i].id == productId) {
//       productTemp = productArray[i];
//     }
//   }
//   if (localStorage.getItem("cart") === null) {
//     var cartArray = [];
//     //productTemp.size = size;
//     productTemp.quantity = quantity;
//     productTemp.totalPrice = productTemp.quantity * productTemp.gia;
//     if (productTemp.loai == "Quần Áo") productTemp.size = sizeAo;
//     else if (productTemp.loai == "Giày") productTemp.size = sizeGiay;
//     cartArray.unshift(productTemp);
//     localStorage.setItem("cart", JSON.stringify(cartArray));
//   } else {
//     var cartArray = JSON.parse(localStorage.getItem("cart"));
//     var check = false;
//     for (var i = 0; i < cartArray.length; i++) {
//       if (cartArray[i].id == productTemp.id) {
//         cartArray[i].quantity += quantity;
//         check = true;
//       }
//     }
//     if (!check) {
//       productTemp.quantity = quantity;
//       // productTemp.size = size;
//       productTemp.totalPrice = quantity * productTemp.gia;
//       cartArray.unshift(productTemp);
//     }
//     localStorage.setItem("cart", JSON.stringify(cartArray));
//   }
//   //closeProductInfo();
// }
function deleteCartItem(productId) {
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cartArray.length; i++) {
    if (cartArray[i].id == productId) {
      cartArray.splice(i, 1);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cartArray));
  showCartTable();
}
function deleteCart() {
  localStorage.removeItem("cart");
  showCartTable();
}

function deleteBillItem(bill_Id) {
  var bill_Array = JSON.parse(localStorage.getItem("bill"));
  for (var i = 0; i < bill_Array.length; i++) {
    if (bill_Array[i].id == bill_Id) {
      bill_Array.splice(i, 1);
    }
  }
  localStorage.setItem("bill", JSON.stringify(bill_Array));

  var dh_Array = JSON.parse(localStorage.getItem("DS_DH"));
  for (var i = 0; i < dh_Array.length; i++) {
    if (dh_Array[i].maDH == bill_Id) {
      dh_Array.splice(i, 1);
    }
  }
  localStorage.setItem("DS_DH", JSON.stringify(dh_Array));
  showbill();
}

function cancel_BillItem(bill_Id) {
  confirm("Bạn có chắc chắn muốn hủy đơn hàng này?");
  var bill_Array = JSON.parse(localStorage.getItem("bill"));
  for (var i = 0; i < bill_Array.length; i++) {
    if (bill_Array[i].id == bill_Id) {
      // bill_Array.splice(i, 1);
      bill_Array[i].status = "Đã hủy";
    }
  }
  localStorage.setItem("bill", JSON.stringify(bill_Array));

  var dh_Array = JSON.parse(localStorage.getItem("DS_DH"));
  for (var i = 0; i < dh_Array.length; i++) {
    if (dh_Array[i].maDH == bill_Id) {
      // dh_Array.splice(i, 1);
      dh_Array[i].trangThai = "Đã hủy";
    }
  }
  localStorage.setItem("DS_DH", JSON.stringify(dh_Array));
  showbill();
  showSuccessfulAlert("Bạn đã hủy đơn hàng thành công.");
}

function showCartTable() {
  if (
    localStorage.getItem("cart") === null ||
    localStorage.getItem("cart") == "[]"
  ) {
    var cartTableHtml = `<div id="empty-cart-items"><p class="empty-cart-message">Không có sản phẩm nào trong giỏ hàng</p></div>`;
    document.getElementById("cart-items").outerHTML = cartTableHtml;
    document.getElementById("total-payment").innerHTML = 0;
  } else {
    var cartArray = JSON.parse(localStorage.getItem("cart"));
    var totalPayment = 0;
    var cartTableHtml = ``;
    for (var i = 0; i < cartArray.length; i++) {
      console.log(cartArray[i].id);
      console.log("122312231232");
      console.log(cartArray[i].size);
      cartTableHtml += `
          <img src=".${cartArray[i].anh1}">
          <div>${cartArray[i].ten}</div>
          <div>${formatCash(cartArray[i].gia.toString())} VND</div>
          <input type="number" min="1" value="${
            cartArray[i].quantity
          }" onchange="updateCart(this.value, '${cartArray[i].id}')">
      `;
      if (cartArray[i].loai == "Quần Áo") {
        cartTableHtml += `
        <select id="sizeSP" onchange="updateSize(this.value,${
          cartArray[i].id
        })">
            <option value="S" ${
              cartArray[i].size === "S" ? "selected" : ""
            }>S</option>
            <option value="M" ${
              cartArray[i].size === "M" ? "selected" : ""
            }>M</option>
            <option value="L" ${
              cartArray[i].size === "L" ? "selected" : ""
            }>L</option>
            <option value="XL" ${
              cartArray[i].size === "XL" ? "selected" : ""
            }>XL</option>
            <option value="XXL" ${
              cartArray[i].size === "XXL" ? "selected" : ""
            }>XXL</option>
          </select>`;
      } else if (cartArray[i].loai == "Giày") {
        cartTableHtml += `
        <select id="sizeSP" onchange="updateSize(this.value,${
          cartArray[i].id
        })">
        <option value="37" ${
          cartArray[i].size === "37" ? "selected" : ""
        }>37</option>
            <option value="38" ${
              cartArray[i].size === "38" ? "selected" : ""
            }>38</option>
            <option value="39" ${
              cartArray[i].size === "39" ? "selected" : ""
            }>39</option>
            <option value="40" ${
              cartArray[i].size === "40" ? "selected" : ""
            }>40</option>
            <option value="41" ${
              cartArray[i].size === "41" ? "selected" : ""
            }>41</option>
            <option value="42" ${
              cartArray[i].size === "42" ? "selected" : ""
            }>42</option>
            <option value="43" ${
              cartArray[i].size === "43" ? "selected" : ""
            }>43</option>
            <option value="44" ${
              cartArray[i].size === "44" ? "selected" : ""
            }>44</option>
          </select>`;
      }
      cartTableHtml += `
      <div>${formatCash(cartArray[i].totalPrice.toString())} VND</div>
          <button onclick="deleteCartItem('${cartArray[i].id}')">Xóa</button>`;
      totalPayment += cartArray[i].totalPrice;
    }
    document.getElementById("cart-items").innerHTML = cartTableHtml;
    document.getElementById("total-payment").innerHTML = formatCash(
      totalPayment.toString()
    );
  }
}

function updateCart(quantity, id) {
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cartArray.length; i++) {
    if (cartArray[i].id == id) {
      cartArray[i].quantity = quantity;
      cartArray[i].totalPrice = cartArray[i].quantity * cartArray[i].gia;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cartArray));
  // showCartTable();
}

function updateSize(size, id) {
  console.log(size + " " + id);
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cartArray.length; i++) {
    if (cartArray[i].id == id) {
      cartArray[i].size = size;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cartArray));
  // showCartTable();
}

function buy1() {
  // console.log(JSON.parse(localStorage.getItem("cart")).length);
  if (
    JSON.parse(localStorage.getItem("cart")) == null ||
    JSON.parse(localStorage.getItem("cart")).length == 0
  ) {
    // alert("Bạn chưa có sản phẩm trong giỏ hàng!");
    showFailedAlert("Bạn chưa có sản phẩm trong giỏ hàng!");
    return;
  }
  document.querySelector(".cart-container").style.display = "none";
  document.querySelector(".form-container").style.display = "block";
  updateSize();
}
function buy2() {
  // if (localStorage.getItem("people") === null) {
  //   customAlert("Bạn phải đăng nhập để mua sản phẩm", "warning");
  //   return false;
  // }
  let dsDH_tmp = JSON.parse(localStorage.getItem("DS_DH"));
  if (dsDH_tmp == null) dsDH_tmp = [];
  let s;
  let len;
  len = dsDH_tmp.length + 1;
  while (1) {
    s = len.toString();
    if (len < 10) s = `0${len}`;
    let tmp = dsDH_tmp.filter((value) => {
      return value.maDH.includes(s);
    });
    if (tmp.length === 0) break;
    len++;
  }
  document.querySelector(".form-container").style.display = "none";
  document.querySelector(".cart-container").style.display = "block";
  var info = "";
  var totalPayment = 0;
  if (
    localStorage.getItem("cart") === null ||
    localStorage.getItem("cart") == "[]"
  ) {
    return false;
  }
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  var chiTietSP_mua = []; //Mảng chứa các sản phẩm mua
  var dssp = JSON.parse(localStorage.getItem("product"));
  for (var i = 0; i < cartArray.length; i++) {
    info +=
      cartArray[i].quantity +
      " x " +
      cartArray[i].ten +
      " size " +
      cartArray[i].size +
      " <br/>";
    totalPayment += cartArray[i].quantity * cartArray[i].gia;
    var sp_tmp = dssp.find((value) => value.id == cartArray[i].id);
    chiTietSP_mua.push({
      sp: sp_tmp,
      soLuong: cartArray[i].quantity,
      size: cartArray[i].size,
    });
  }
  // var customer = JSON.parse(localStorage.getItem("people"));
  var date = new Date();
  var d =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  if (localStorage.getItem("bill") === null) {
    var billArray = [];
    var bill = {
      id: "DH_" + s,
      info: info,
      totalPayment: totalPayment,
      customer: user,
      date: d,
      status: "Chưa xử lý",
      thanhToan: "Chưa thanh toán",
    };
    ///Nếu mà ô thanh toán chuyển khoản mà checked thì bill.thanhToan = đã thanh toán
    if (document.getElementById("chuyenKhoan").checked)
      bill.thanhToan = "Đã thanh toán";
    billArray.unshift(bill);
    localStorage.setItem("bill", JSON.stringify(billArray));
  } else {
    var billArray = JSON.parse(localStorage.getItem("bill"));
    var bill = {
      id: "DH_" + s,
      info: info,
      totalPayment: totalPayment,
      customer: user,
      date: d,
      status: "Chưa xử lý",
      thanhToan: "Chưa thanh toán",
    };
    ///Nếu mà ô thanh toán chuyển khoản mà checked thì bill.thanhToan = đã thanh toán
    if (document.getElementById("chuyenKhoan").checked)
      bill.thanhToan = "Đã thanh toán";
    billArray.unshift(bill);
    localStorage.setItem("bill", JSON.stringify(billArray));
  }

  let dh_tmp = {
    maDH: "DH_" + s,
    ngay: d,
    maKH: user.ms_kh,
    chiTiet: {
      listSP: chiTietSP_mua,
    },
    thanhToan: bill.thanhToan,
    trangThai: "Chưa xử lý",
  };

  dsDH_tmp.push(dh_tmp);
  localStorage.setItem("DS_DH", JSON.stringify(dsDH_tmp));
  localStorage.removeItem("cart");
  showbill();
  showCartTable();
  // showbill();
}
// function buy2() {
//   // if (localStorage.getItem("people") === null) {
//   //   customAlert("Bạn phải đăng nhập để mua sản phẩm", "warning");
//   //   return false;
//   // }
//   document.querySelector(".form-container").style.display = "none";
//   document.querySelector(".cart-container").style.display = "block";
//   var info = "";
//   var totalPayment = 0;
//   if (
//     localStorage.getItem("cart") === null ||
//     localStorage.getItem("cart") == "[]"
//   ) {
//     return false;
//   }
//   var cartArray = JSON.parse(localStorage.getItem("cart"));
//   var chiTietSP_mua = []; //Mảng chứa các sản phẩm mua
//   var dssp = JSON.parse(localStorage.getItem("product"));
//   for (var i = 0; i < cartArray.length; i++) {
//     info +=
//       cartArray[i].quantity +
//       " x " +
//       cartArray[i].ten +
//       " size " +
//       cartArray[i].size +
//       " <br/>";
//     totalPayment += cartArray[i].quantity * cartArray[i].gia;
//     var sp_tmp = dssp.find((value) => value.id == cartArray[i].id);
//     chiTietSP_mua.push({
//       sp: sp_tmp,
//       soLuong: cartArray[i].quantity,
//       size: cartArray[i].size,
//     });
//   }
//   var customer = JSON.parse(localStorage.getItem("people"));
//   var date = new Date();
//   var d =
//     date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
//   if (localStorage.getItem("bill") === null) {
//     var billArray = [];
//     var bill = {
//       id: billArray.length,
//       info: info,
//       totalPayment: totalPayment,
//       customer: user,
//       date: d,
//       status: "Chưa xử lý",
//     };
//     billArray.unshift(bill);
//     localStorage.setItem("bill", JSON.stringify(billArray));
//   } else {
//     var billArray = JSON.parse(localStorage.getItem("bill"));
//     var bill = {
//       id: billArray.length,
//       info: info,
//       totalPayment: totalPayment,
//       customer: user,
//       date: d,
//       status: "Chưa xử lý",
//     };
//     billArray.unshift(bill);
//     localStorage.setItem("bill", JSON.stringify(billArray));
//   }

//   let dsDH_tmp = JSON.parse(localStorage.getItem("DS_DH"));
//   let s;
//   let len;
//   len = dsDH_tmp.length + 1;
//   while (1) {
//     s = len.toString();
//     if (len < 10) s = `0${len}`;
//     let tmp = dsDH_tmp.filter((value) => {
//       return value.maDH.includes(s);
//     });
//     if (tmp.length === 0) break;
//     len++;
//   }
//   let dh_tmp = {
//     maDH: "DH_" + s,
//     ngay: d,
//     maKH: user.ms_kh,
//     chiTiet: {
//       listSP: chiTietSP_mua,
//     },
//     thanhToan: "Chưa thanh toán",
//     trangThai: "Chưa xử lý",
//   };

//   dsDH_tmp.push(dh_tmp);
//   localStorage.setItem("DS_DH", JSON.stringify(dsDH_tmp));
//   localStorage.removeItem("cart");
//   showCartTable();
//   showbill();
// }

function showbill() {
  if (document.getElementById("bill") == null) {
    console.log("rỗng");
    return;
  }
  ///Sửa onclick ở button xóa tất cả thành deleteBill()
  // document.getElementById("clear-cart").outerHTML = `
  //         <button
  //           id="clear-cart"
  //           onclick="deleteBill()"
  //           class="action-btn clear-btn"
  //         >
  //           Xóa Tất Cả
  //         </button>`;

  document.getElementById("clear-cart").style.display = "none";

  ///Sửa onclick ở button thanh toán -> quay về giỏ hàng thành deleteBill()
  document.getElementById("checkout").outerHTML = `
  <button
            id="checkout"
            class="action-btn checkout-btn"
            onclick="goBackCart()"
          >
            Quay về giỏ hàng
          </button>
  `;

  ///Khi showbill thì display none cart lại
  document.getElementsByClassName("cart-header")[0].style.display = "none";
  if (document.getElementById("cart-items") != null)
    document.getElementById("cart-items").style.display = "none";
  else {
    document.getElementById("empty-cart-items").style.display = "none";
  }

  ////Nếu không có bill nào thì display ra "Không có đơn hàng nào đã mua"
  if (
    localStorage.getItem("bill") === null ||
    localStorage.getItem("bill").length == 0
  ) {
    document.getElementById("bill").outerHTML = `
    <div id="empty-cart-items"><p class="empty-cart-message">Không có đơn hàng nào đã mua</p></div>
    `;
  } else {
    // var user = JSON.parse(localStorage.getItem("people"));
    var billArray = JSON.parse(localStorage.getItem("bill"));
    document.querySelector(".cart-container h1").innerHTML = "Đơn hàng đã đặt";
    document.querySelector(".cart-header").style.display = "none";

    let billUser = billArray.find((tmp) => tmp.customer.ms_kh === user.ms_kh);
    if (billUser === undefined) {
      document.getElementById("bill").outerHTML = `
    <div id="empty-cart-items"><p class="empty-cart-message">Không có đơn hàng nào đã mua</p></div>
    `;
    } else {
      var s = ``;
      for (var i = 0; i < billArray.length; i++) {
        console.log(user.ms_kh + " = " + billArray[i].customer.ms_kh);
        if (user.ms_kh === billArray[i].customer.ms_kh) {
          document.getElementById("bill").style.display = "block";
          s += `
          <div class="billcontent">
          <div>${billArray[i].info}</div>
          <div>${formatCash(billArray[i].totalPayment.toString())} VND</div>
          <div>${billArray[i].date}</div>
          <div>${billArray[i].status}</div>
          <div>${billArray[i].thanhToan}</div>
          </div>
          <button id="deleteButton" onclick="cancel_BillItem('${
            billArray[i].id
          }')">Hủy</button>`;
        }
      }
    }

    ////////Hiện thị bill với button hủy
    document.getElementById("bill").style.display = "flex";

    document.getElementById("bill").style.flexDirection = "row";
    document.getElementById("bill").style.flexWrap = "wrap";
    document.getElementById("bill").innerHTML = s;

    ///////Xóa empty-cart-items
    // if (document.getElementById("empty-cart-items") != null)
    document.getElementById("empty-cart-items").style.display = "none";
  }
}
function hienThiThanhToan() {
  let credit = document.getElementById("chuyenKhoan");
  if (!credit.checked) return;

  // Nếu thanh toán chuyển khoản
  // alert("Bạn cần thêm thẻ tín dụng để hoàn tất thanh toán!");
  let creditArray = JSON.parse(localStorage.getItem("credit"));
  if (creditArray == null) creditArray = [];
  let creditTmp = creditArray.find((tmp) => tmp.maKH === user.ms_kh);
  ///Nếu người mua chưa nhập credit thì alert
  if (creditTmp == undefined) {
    showFailedAlert("Bạn cần thêm thẻ tín dụng để hoàn tất thanh toán!");
    creditTmp = {
      soThe: "",
      maCCV: "",
      ngayHetHan: "",
      hoTenChuThe: "",
      diaChiThe: "",
      maBuuChinh: "",
      maKH: "",
    };
  }

  let e = document.getElementById("hienThiChuyenKhoan");
  e.parentElement.style.display = "block";
  let addressTmp = JSON.parse(localStorage.getItem("address")).find(
    (tmp) => tmp.maKH == user.ms_kh
  );
  let sDiaChi =
    addressTmp.soNha +
    " " +
    addressTmp.duong +
    ", " +
    addressTmp.phuong_xa +
    ", " +
    addressTmp.quan_huyen +
    ", " +
    addressTmp.tp_tinh;
  let s = `
   <h2>Thêm Thẻ Tín Dụng</h2>
    <form>
      <h3 style="margin-bottom: 5px">Chi tiết thẻ</h3>
      <input id="creditNum" name="soThe" type="text" placeholder="Số thẻ" value="${creditTmp.soThe}"/>
  
      <input id="expiredDate" name="expired_date" type="text" placeholder="Ngày hết hạn (MM/YY)" value="${creditTmp.ngayHetHan}"/>

      <input id="creditCCV" name="maCCV" type="text" placeholder="Mã CCV" value="${creditTmp.maCCV}"/>

      <input id="creditOwner" name="hoTenChuThe" type="text" placeholder="Họ và tên chủ thẻ" value="${creditTmp.hoTenChuThe}"/>
      
      <hr/>

    <label for="diaChiThe">Địa chỉ đăng kí thẻ Tín dụng/Ghi nợ</label>
    <input id="creditAddress" name="diaChiThe" type="text" value="${sDiaChi}" placeholder="Địa chỉ"/>
    <input id="creditBuuChinh" name="maBuuChinh" type="text" placeholder="Mã bưu chính" value="${creditTmp.maBuuChinh}"/>
    <button type="button" onclick="dong_form_credit()" style="width: 30%; margin: 10px; background-color: #e74c3c">Quay lại</button>
    <button type="button" onclick="addCredit()" style="width: 30%; margin: 10px">Hoàn thành</button>
    </form>
  `;
  e.innerHTML = s;
}

/////Cập nhật thông tin thẻ tín dụng của khách và đưa lên local
function addCredit() {
  let soThe = document.getElementById("creditNum");
  let ngayHetHan = document.getElementById("expiredDate");
  let maCCV = document.getElementById("creditCCV");
  let hoTenChuThe = document.getElementById("creditOwner");
  let diaChiThe = document.getElementById("creditAddress");
  let maBuuChinh = document.getElementById("creditBuuChinh");
  if (soThe.value == "") {
    // alert("Bạn chưa nhập đủ thông tin thẻ");
    showFailedAlert("Bạn chưa nhập đủ thông tin thẻ");
    soThe.focus();
    return;
  }
  if (maCCV.value == "") {
    // alert("Bạn chưa nhập đủ thông tin thẻ");
    showFailedAlert("Bạn chưa nhập đủ thông tin thẻ");
    maCCV.focus();
    return;
  }
  if (hoTenChuThe.value == "") {
    // alert("Bạn chưa nhập đủ thông tin thẻ");
    showFailedAlert("Bạn chưa nhập đủ thông tin thẻ");
    hoTenChuThe.focus();
    return;
  }
  if (diaChiThe.value == "") {
    // alert("Bạn chưa nhập đủ thông tin thẻ");
    showFailedAlert("Bạn chưa nhập đủ thông tin thẻ");
    diaChiThe.focus();
    return;
  }
  if (maBuuChinh.value == "") {
    // alert("Bạn chưa nhập đủ thông tin thẻ");
    showFailedAlert("Bạn chưa nhập đủ thông tin thẻ");
    maBuuChinh.focus();
    return;
  }

  ////Kiểm tra tháng và năm
  let arr = ngayHetHan.value.split("/");
  console.log(arr);
  let thang = Number.parseInt(arr[0]);
  let nam = Number.parseInt(arr[1]);
  let currentDate = new Date();
  if (thang < 1 || thang > 12) {
    showFailedAlert("Tháng không hợp lệ!");
    ngayHetHan.select();
    return;
  }

  let currentMonth = currentDate.getMonth() + 1;
  console.log(currentDate.getMonth() + 1);
  console.log(currentDate.getFullYear());
  let currentYear = currentDate.getFullYear() - 2000;

  //Nếu năm < năm hiện tại --- hoặc ---- năm = năm hiện tại  mà tháng < tháng hiện tại
  if (nam < currentYear || (nam == currentYear && thang < currentMonth)) {
    showFailedAlert("Ngày hết hạn không hợp lệ!");
    ngayHetHan.select();
    return;
  }

  ////////////Đẩy lên localStorage arrayCredit
  let creditTmp = {
    soThe: soThe.value,
    maCCV: maCCV.value,
    hoTenChuThe: hoTenChuThe.value,
    ngayHetHan: ngayHetHan.value,
    diaChiThe: diaChiThe.value,
    maBuuChinh: maBuuChinh.value,
    maKH: user.ms_kh,
  };
  let creditArray = JSON.parse(localStorage.getItem("credit"));
  if (creditArray == null) creditArray = [];
  let index = creditArray.findIndex((tmp) => tmp.maKH === creditTmp.maKH);
  if (index == -1) creditArray.push(creditTmp);
  else creditArray[index] = creditTmp;

  ///Đẩy mảng credit lên local
  localStorage.setItem("credit", JSON.stringify(creditArray));

  dong_form_credit();
  showSuccessfulAlert("Cập nhật thẻ Tín dụng/Ghi nợ thành công!");
  document.getElementById("thayDoiTheTinDung").checked = false;
}

function dong_form_credit() {
  let e = document.getElementById("fake_thanhToan");
  e.style.display = "none";
}

//Xem đơn hàng đã mua
function DH_da_mua() {
  ////Display none cart khi qua đơn hàng

  ////

  // showCartTable();

  document.querySelector(".cart-container h1").innerHTML = "Đơn hàng đã đặt";
  showbill();
}

function goBackCart() {
  // buy1();
  document.getElementsByClassName("cart-container")[0].innerHTML = `
  <h1>Giỏ hàng của bạn  </h1>
      <!-- Danh sách các hoá đơn -->
      <div id="bill"></div>
      <!-- Tiêu đề bảng giỏ hàng -->
      <div class="cart-header">
        <div class="cart-header-item"></div>
        <div class="cart-header-item">Tên sản phẩm</div>
        <div class="cart-header-item">Giá</div>
        <div class="cart-header-item">Số lượng</div>
        <div class="cart-header-item">Size</div>
        <div class="cart-header-item">Tổng tiền</div>
        <div class="cart-header-item"></div>
      </div>

      <div id="cart-items" class="cart-items"></div>

      <!-- Tổng tiền và các nút hành động -->
      <div class="cart-footer">
        <div class="cart-actions">
          <button
            id="clear-cart"
            onclick=" deleteCart()"
            class="action-btn clear-btn"
          >
            Xóa Tất Cả
          </button>
          <button
            id="checkout"
            class="action-btn checkout-btn"
            onclick="buy1()"
          >
            Đặt hàng
          </button>
          <button id="donHangDaMua" class="action-btn" style="background-color: blue;" onclick="DH_da_mua()">Đơn Hàng Đã Đặt</div>
      </div>
  `;
  // document.getElementById("cart-items").style.display = "block";
  showCartTable();
  showbill();
}

/*CUSTOM ALERT BOX*/
function customAlert(message, type) {
  if (type == "success") {
    document.getElementById("customalert").style.backgroundColor = "#4CAF50";
  }
  if (type == "warning") {
    document.getElementById("customalert").style.backgroundColor = "#f44336";
  }
  document.getElementById("customalert").innerHTML = message;
  var x = document.getElementById("customalert");
  x.className = "show";
  setTimeout(function () {
    x.className = x.classList.remove("show");
  }, 3500);
}
//Banner begin
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideShow");
  //var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/
  slides[slideIndex - 1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}
/*-----------------------Địa Chỉ-----------------------*/
function submitForm() {
  const houseNumber = document.getElementById("houseNumber");
  const street = document.getElementById("street");
  const ward = document.getElementById("ward");
  const district = document.getElementById("district");
  const city = document.getElementById("city");
  if (houseNumber.value == "") {
    // alert("Chưa nhập đủ thông tin địa chỉ");
    showFailedAlert("Chưa nhập đủ thông tin địa chỉ");
    houseNumber.focus();
    return;
  }
  if (street.value == "") {
    // alert("Chưa nhập đủ thông tin địa chỉ");
    showFailedAlert("Chưa nhập đủ thông tin địa chỉ");
    street.focus();
    return;
  }
  if (ward.value == "") {
    // alert("Chưa nhập đủ thông tin địa chỉ");
    showFailedAlert("Chưa nhập đủ thông tin địa chỉ");
    ward.focus();
    return;
  }
  if (district.value == "") {
    // alert("Chưa nhập đủ thông tin địa chỉ");
    showFailedAlert("Chưa nhập đủ thông tin địa chỉ");
    district.focus();
    return;
  }
  if (city.value == "") {
    // alert("Chưa nhập đủ thông tin địa chỉ");
    showFailedAlert("Chưa nhập đủ thông tin địa chỉ");
    city.focus();
    return;
  }
  // if (houseNumber && street && ward && district && city) {
  //   alert(
  //     `Địa chỉ của bạn:\n${houseNumber}, đường ${street}, phường(xã) ${ward}, quận(huyện) ${district}, tỉnh(thành phố) ${city}`
  //   );
  // } else {
  //   alert("Vui lòng điền đầy đủ thông tin.");
  // }
  addDiaChi();

  ///////Xử lí thanh toán
  let cash = document.getElementById("tienMat");
  let credit = document.getElementById("chuyenKhoan");
  if (!cash.checked && !credit.checked) {
    // alert("Bạn phải chọn hình thức thanh toán");
    showFailedAlert("Bạn phải chọn hình thức thanh toán");
    return;
  }

  ///Nếu không chọn tiền mặt -> chọn thẻ tín dụng
  if (!document.getElementById("tienMat").checked) {
    ///Lấy credit từ local
    let creditArray = JSON.parse(localStorage.getItem("credit"));
    if (creditArray == null) creditArray = [];
    ///Tìm xem user đã tồn tại credit chưa
    let creditUser = creditArray.find((tmp) => tmp.maKH == user.ms_kh);
    ///Nếu không tồn tại credit thì cho nhập
    if (creditUser == null) {
      hienThiThanhToan();
      return;
    }
    ///Nếu tồn tại credit
    let changeCredit = document.getElementById("thayDoiTheTinDung");
    ///Nếu chọn thay đổi credit thì cho nhập lại
    if (changeCredit.checked) {
      hienThiThanhToan();
      return;
    }
  }

  showSuccessfulAlert("Đặt hàng thành công!");
  buy2();
}
function addDiaChi() {
  const houseNumber = document.getElementById("houseNumber").value;
  const street = document.getElementById("street").value;
  const ward = document.getElementById("ward").value;
  const district = document.getElementById("district").value;
  const city = document.getElementById("city").value;
  var addressArray = JSON.parse(localStorage.getItem("address"));
  if (addressArray == null) addressArray = [];
  var address = {
    soNha: houseNumber,
    duong: street,
    phuong_xa: ward,
    quan_huyen: district,
    tp_tinh: city,
    maKH: user.ms_kh,
  };
  addressArray.push(address);
  localStorage.setItem("address", JSON.stringify(addressArray));
}

function goBackHome() {
  window.location.href = "../index.html?";
}

function showFailedAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.classList.add("custom-failed-alert");
  alertBox.innerHTML = message;

  document.body.appendChild(alertBox);
  requestAnimationFrame(() => {
    alertBox.classList.add("show");
  });

  setTimeout(() => {
    alertBox.classList.remove("show");
    alertBox.classList.add("hide");
    alertBox.addEventListener("transitionend", () => {
      alertBox.remove();
    });
  }, 3000); // Thời gian thông báo hiển thị (3000ms = 3 giây)
}

function showSuccessfulAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.classList.add("custom-successful-alert");
  alertBox.innerHTML = message;

  document.body.appendChild(alertBox);
  requestAnimationFrame(() => {
    alertBox.classList.add("show");
  });

  setTimeout(() => {
    alertBox.classList.remove("show");
    alertBox.classList.add("hide");
    alertBox.addEventListener("transitionend", () => {
      alertBox.remove();
    });
  }, 3000); // Thời gian thông báo hiển thị (3000ms = 3 giây)
}

////Đẩy local xong mà chưa kiểm tra để cập nhật credit
function thayDoiCredit(obj) {
  let creditArray = JSON.parse(localStorage.getItem("credit"));
  if (creditArray == null) creditArray = [];
  let creditTmp = creditArray.find((tmp) => tmp.maKH === user.ms_kh);
  // console.log(creditTmp);
  let e = document.getElementById("ckChangeCredit");
  if (obj.id === "chuyenKhoan" && creditTmp !== undefined)
    e.style.display = "block";
  else e.style.display = "none";
}
