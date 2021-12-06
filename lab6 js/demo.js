// function timkiem(arr,x){
//     for (var i =0;i<arr.length;i++){
//         if(arr[i]==x)return true;
//     }
//     return false;
// }
// function vietlot(){
//     // sinh 1 bộ 6 số ngẫu nhiên từ 0 đên 45
//     var lucky=[];
//     do {
//         var n = parseInt(Math.random()*46);
//         if(!timkiem(lucky,n)){
//             lucky.push(n);
//         }
//     }while (lucky.length <6);
//     // nhập 5 mảng mỗi mảng 6 số không trùng nhau
//     var vietlot = [];
//     for (var i =0; i<1; i++){
//         vietlot[i] = [];
//         do {
//             var n = prompt("Nhập 1 số khoảng từ 8-45:");
//             n = parseInt(n);
//             if(!timkiem(vietlot[i],n)){
//                 vietlot[i].push(n);
//             }
//         }while (vietlot[i].length<6)
//     }
//     // so sánh từng bộ số đã mua
//     for (var i =0; i<vietlot.length;i++){
//         if(sosanh(lucky,vietlot[i])){
//             alert("Chúc mừng bạn đã trúng 100 tỷ");
//         }
//     }
// }
// function sosanh(lk,vl){
//     var count =0;
//     for(var i=0;i<lk.length;i++){
//         if(timkiem(vl,lk[i])){
//             count++;
//         }
//     }
//     if (count==6)return true;
//     return false;
// }
// function sayhello() {
//     alert("hello");
// }
// var i = 10;
// var CountDown = () => { // array function
//     console.log(i);
//     i--;
//     if (i < 0) {
//         clearInterval(si);
//     }
// }
// var si = setInterval(CountDown, 1000);

// var n = 10,
//     s = 0;
// var tiner = setInterval(function() {
//     var nin = n < 10 ? "0" + n : n;
//     var sec = s < 10 ? "0" + s : s;
//     console.log(nin + ":" + sec);
//     s--;
//     if (s < 0) {
//         s = 59;
//         n--;
//     }
//     if (n < 0) {
//         clearInterval(tiner);
//     }
// }, 10)

function ChanLe() {
    // var pt = [
    //     "Thẻ nạp điện thoai 10,000đ",
    //     "Thẻ nạp điện thoai 50,000đ",
    //     "Sạc dự phòng",
    //     "Điện thoại Iphone 13 Pro",
    //     "Ô tô vinfast"
    // ]
    var pt = [];
    for (let i = 0; i < 50; i++) {
        pt.push("Thẻ nạp điện thoai 10,000đ");
    }
    for (let i = 0; i < 35; i++) {
        pt.push("Thẻ nạp điện thoai 50,000đ");
    }
    for (let i = 0; i < 10; i++) {
        pt.push("Sạc dự phòng");
    }
    for (let i = 0; i < 4; i++) {
        pt.push("Điện thoại Iphone 13 Pro");
    }
    pt.push("Ô tô vinfast");
    var count = 10;
    var rn = setInterval(function() {
        var lucky = parseInt(Math.random() * 2);
        var n;
        do {
            n = prompt("Bạn chọn chẵn hay lẻ (Chẵn: 0, Lẻ: 1)");
            n = parseInt(n);
            if (n < 0 || n > 1 || isNaN(n)) {
                alert("vui lòng chọn đúng theo trò chơi");
            }
        } while (n < 0 || n > 1 || isNaN(n));
        if (lucky == n) {
            var gt = parseInt(Math.random() * pt.length);
            alert("Chúc mừng bạn đã trúng thưởng" + pt[gt]);
        } else {
            alert("rất tiêc chúc bạn may mắn lần sau")
        }
        count--;
        if (count <= 0) {
            clearInterval(rn);
        }
    });

}