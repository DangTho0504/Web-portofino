// mảng lưu nhân viên
let employees = [];


// tự tính tuổi
let birthday = document.getElementById("birthday");

birthday.addEventListener("input", function () {

    let currentYear = new Date().getFullYear();

    let birthYear = new Date(birthday.value).getFullYear();

    let age = currentYear - birthYear;

    document.getElementById("showAge").value = age;

});


// add employee
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    // lấy giới tính
    let gender = document.querySelector(
        'input[name="gender"]:checked'
    )?.value;


    // lấy phòng ban
    let department = [];

    let departments =
        document.querySelectorAll(".department");

    departments.forEach(function (item) {

        if (item.checked) {
            department.push(item.value);
        }

    });


    // object nhân viên
    let employee = {

        name: document.getElementById("name").value,

        birthday: document.getElementById("birthday").value,

        age: document.getElementById("showAge").value,

        gender: gender,

        department: department.join(", "),

        phone: document.getElementById("phone").value,

        address: document.getElementById("address").value
    };


    // thêm vào mảng
    employees.push(employee);

    console.log(employees);

    renderTable();

});



// hiển thị table
function renderTable() {

    let table = document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(function (employee) {

        table.innerHTML += `

            <tr>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.gender}</td>
                <td>${employee.department}</td>
                <td>${employee.phone}</td>
                <td>${employee.address}</td>
            </tr>

        `;

    });

}