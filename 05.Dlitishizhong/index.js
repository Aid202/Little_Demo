myTime()
function myTime() {
    let time = new Date()
    let hh = time.getHours()
    let mm = time.getMinutes()
    let ss = time.getSeconds()

    document.getElementById('1').innerHTML = Math.floor(hh / 10)
    // 因为 js的/ 不是整除 而是得到浮点数
    document.getElementById('2').innerHTML = hh % 10
    document.getElementById('4').innerHTML = Math.floor(mm / 10)
    document.getElementById('5').innerHTML = mm % 10
    document.getElementById('7').innerHTML = Math.floor(ss / 10)
    document.getElementById('8').innerHTML = ss % 10
}
setInterval(myTime, 1000);