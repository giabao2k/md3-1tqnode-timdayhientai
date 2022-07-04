const arr = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];
const date = new Date()
let day = date.getDay(date);
console.log(date);
console.log(date.getDay(date));
for(let i = 0; i < arr.length; i++){
    if(day == i){
        console.log(`Hôm nay là thứ ${arr[i]}`);
    }
}