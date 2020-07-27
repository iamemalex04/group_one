var guestNo = document.getElementById("guestNo");
var decrement = document.getElementById("g-decrement");
var increment = document.getElementById("g-increment");

var increment_value = 0;
increment.addEventListener("click", function () {
    guestNo.value = ++increment_value;
});

var decrement_value = 0;
decrement.addEventListener("click", function () {
    --guestNo.value;
});
