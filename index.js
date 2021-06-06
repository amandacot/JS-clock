// var time = new Time();
// time = date.getHours();

window.onload = function() {
  function updateTime() {
    let date = new Date();
    // console.log(date);
    // console.log(date.getFullYear());
    // console.log(date.toLocaleDateString("en-US"));
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    document.getElementById("clock").innerHTML = date;
    document.getElementById("hours").innerHTML = date.getHours();
    document.getElementById("minutes").innerHTML = date.getMinutes();
    document.getElementById("seconds").innerHTML = date.getSeconds();
  }
  setInterval(updateTime, 1000);
}