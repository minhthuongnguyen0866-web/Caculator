
// Lấy màn hình máy tính
let manhinh = document.getElementById("manhinh");


// Hàm nhập số hoặc phép tính
function nhap(giatri) {

    if (manhinh.value == "0") {
        manhinh.value = giatri;
    }
    else {
        manhinh.value = manhinh.value + giatri;
    }

}


// Hàm xóa toàn bộ
function xoa() {

    manhinh.value = "0";

}


// Hàm xóa một ký tự
function xoaMotKyTu() {

    manhinh.value = manhinh.value.slice(0, -1);

    if (manhinh.value == "") {
        manhinh.value = "0";
    }

}


// Hàm tính kết quả
function tinh() {

    try {

        let ketqua = eval(manhinh.value);

        if (!Number.isFinite(ketqua)) {
            throw new Error("Lỗi");
        }

        manhinh.value = ketqua;

    }
    catch {

        manhinh.value = "Lỗi";

    }

}
