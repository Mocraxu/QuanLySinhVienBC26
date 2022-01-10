function Validation() {

    //Chứa các phương thức kiểm tra hợp lệ
    this.kiemTraRong = function (value,selectorError,name) {
        //Xử lý không hợp lệ
        //.trim(): loại bỏ khoảng trắng đầu và cuối chuỗi
        if(value.trim() === '') {
            document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống !';
            return false;
        }
        //Xử lý hợp lệ
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    this.kiemTraKyTu = function(value,selectorError,name) {
        var regexAllLetter = /^[A-Z a-z]+$/; 
        //Xử lý hợp lệ
        if(regexAllLetter.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }

        document.querySelector(selectorError).innerHTML = name + ' tất cả phải là ký tự!';
        return false;
    }

}