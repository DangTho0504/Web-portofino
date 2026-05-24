// hiện tuổi tự động
let birthday = document.getElementById("birthday");

birthday.addEventListener("input", function () {

    let currentYear = new Date().getFullYear();

    let birthYear = new Date(birthday.value).getFullYear();

    let age = currentYear - birthYear;

    document.getElementById("showAge").value = age;

});


// click nút xuất
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    let user = {
        name: document.getElementById("name").value,
        birthday: document.getElementById("birthday").value,
        age: document.getElementById("showAge").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value
    };

    console.log(user);

});