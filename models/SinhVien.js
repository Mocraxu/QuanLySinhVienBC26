function SinhVien(){
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.diemRenLuyen = '';
    this.email = '';
    this.soDienThoai = '';
    this.diemToan = '';
    this.diemLy='';
    this.diemHoa ='';
    this.loaiSinhVien = '';
    this.tinhDiemTrungBinh = function () {
        return (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa))/3;
    }
    this.xepLoaiSinhVien = function () {
        var dtb = this.tinhDiemTrungBinh();
        if(this.diemRenLuyen < 5 || dtb < 5) {
            return 'Yếu';
        } else {
            if(dtb >= 5 && dtb < 6.5 ) {
                return 'Trung bình';
            }else if (dtb >= 6.5 && dtb<8){
                return 'Khá';
            } else if (dtb >= 8 && dtb <9) {
                return 'Giỏi';
            } else if (dtb >=9 && dtb <= 10) {
                return 'Xuất sắc';
            } else {
                return 'Không hợp lệ !';
            }
        }
    }
}