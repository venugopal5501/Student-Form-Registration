function validation() {
    var a = document.getElementById("fname").value;
    var reg = /^[a-zA-Z\s]{1,30}$/;
    if (a == "") {
        alert("Pleast fill first name");
        return false;
    }
    else if (!reg.test(a)) {
        alert("Name not valid");
        return false;
    }


    var a = document.getElementById("lname").value;
    var reg = /^[a-zA-Z\s]{1,30}$/;
    if (a == "") {
        alert("Pleast fill last first name");
        return false;
    }
    else if (!reg.test(a)) {
        alert("Name not valid");
        return false;
    }

    var dateInput = document.getElementById('dob');
    var selectedDate = dateInput.value;

    if (selectedDate === '') {
        alert("Please select a Date of Birth.");
        return false;
    }

    var sam = document.getElementById("email").value;
    var em = /^[a-z0-9_.]+@[a-z]+\.[a-z]{2,}$/;
    if (sam == "") {
        alert("Please enter email address");
        return false;
    } else if (!em.test(sam)) {
        alert("Please enter valid email address");
        return false;
    }

    var phone = document.getElementById("phone").value;
    var po = /^\d{10}$/;
    if (phone == "") {
        alert("Please fill phone number");
        return false;
    } else if (!po.test(phone)) {
        alert("Please enter valid phone number");
        return false;
    }
    var genderInput = document.querySelector('input[name="gender"]:checked');
    if (genderInput) {
        localStorage.setItem("gender", genderInput.value);
    } else {
        alert("Please select a gender.");
        return false;
    }

    var a = document.getElementById("city").value;
    if (a == "") {
        alert("Pleast fill address");
        return false;
    }

    var a = document.getElementById("city1").value;
    var reg = /^[a-zA-Z\s]{1,30}$/;
    if (a == "") {
        alert("Pleast City Name");
        return false;
    }
    else if (!reg.test(a)) {
        alert("Name not valid");
        return false;
    }

    var a = document.getElementById("pin").value;
    if (a == "") {
        alert("Pleast fill pincode");
        return false;
    }

    var a = document.getElementById("state").value;
    if (a == "") {
        alert("Pleast fill State");
        return false;
    }

    var e = document.getElementById("country");
    var drop = e.options[e.selectedIndex].value;
    //   var drop1 = district.options[e.selectedIndex].text;
    if (drop == 0) {
        alert("Please select country");
        return false;
    }

    var sports =
        Array.from(document.querySelectorAll('input[name="draw"]:checked'))
            .length > 0;

    if (!sports) {
        alert("Please select at least one hobby");
        return false;
    }

    var a = document.getElementById("Board").value;
    var reg = /^[a-zA-Z\s]{1,10}$/;
    if (a == "") {
        alert("Pleast fill Board");
        return false;
    }
    else if (!reg.test(a)) {
        alert("Name not valid");
        return false;
    }
    var a = document.getElementById("Board1").value;
    var reg = /^[a-zA-Z\s]{1,10}$/;
    if (a == "") {
        alert("Pleast fill Board");
        return false;
    }
    else if (!reg.test(a)) {
        alert("Name not valid");
        return false;
    }
    var a = document.getElementById("Board2").value;
    var reg = /^[a-zA-Z\s]{1,10}$/;
    if (a == "") {
        alert("Pleast fill Board");
        return false;
    }
    else if (!reg.test(a)) {
        alert("Name not valid");
        return false;
    }
    var a = document.getElementById("Board3").value;
    var reg = /^[a-zA-Z\s]{1,10}$/;
    if (a == "") {
        alert("Pleast fill Board");
        return false;
    }
    else if (!reg.test(a)) {
        alert("Name not valid");
        return false;
    }
    var a = document.getElementById("Board4").value;
    var reg = /^\d+\.\d{1,2}$/;
    if (a == "") {
        alert("Pleast fill Marks");
        return false;
    }
    else if (!reg.test(a)) {
        alert("Mark not valid");
        return false;
    }

    var a = document.getElementById("Board5").value;
    var reg = /^\d+\.\d{1,2}$/;
    if (a == "") {
        alert("Pleast fill Marks");
        return false;
    }
    else if (!reg.test(a)) {
        alert("Mark not valid");
        return false;
    }
    var a = document.getElementById("Board6").value;
    var reg = /^\d+\.\d{1,2}$/;
    if (a == "") {
        alert("Pleast fill Marks");
        return false;
    }
    else if (!reg.test(a)) {
        alert("Mark not valid");
        return false;
    }

    var a = document.getElementById("Board7").value;
    var reg = /^\d+\.\d{1,2}$/;
    if (a == "") {
        alert("Pleast fill Marks");
        return false;
    }
    else if (!reg.test(a)) {
        alert("Mark not valid");
        return false;
    }

    var a = document.getElementById("Board8").value;
    if (a == "") {
        alert("Pleast fill year of passing");
        return false;
    }


    var a = document.getElementById("Board9").value;
    if (a == "") {
        alert("Pleast fill year of passing");
        return false;
    }

    var a = document.getElementById("Board10").value;
    var reg = /^\d+(\.\d{1,2}?)$/;
    if (a == "") {
        alert("Pleast fill year of passing");
        return false;
    }

    var a = document.getElementById("Board11").value;
    var reg = /^\d+(\.\d{1,2}?)$/;
    if (a == "") {
        alert("Pleast fill year of passing");
        return false;
    }

    if (typeof localStorage != "undefined") {
        localStorage.fname = document.getElementById("fname").value;
        localStorage.lname = document.getElementById("lname").value;
        localStorage.age = document.getElementById("dob").value;
        localStorage.state = document.getElementById("state").value;
        localStorage.address = document.getElementById("city").value;
        localStorage.city = document.getElementById("city1").value;
        localStorage.pin = document.getElementById("pin").value;
        localStorage.phone = document.getElementById("email").value;
        localStorage.email = document.getElementById("phone").value;
        localStorage.district = document.getElementById("country").value;
        localStorage.Board = document.getElementById("Board").value;
        localStorage.Board4 = document.getElementById("Board4").value;
        localStorage.Board8 = document.getElementById("Board8").value;
        localStorage.Board1 = document.getElementById("Board1").value;
        localStorage.Board5 = document.getElementById("Board5").value;
        localStorage.Board9 = document.getElementById("Board9").value;
        localStorage.Board2 = document.getElementById("Board2").value;
        localStorage.Board6 = document.getElementById("Board6").value;
        localStorage.Board10 = document.getElementById("Board10").value;
        localStorage.Board3 = document.getElementById("Board3").value;
        localStorage.Board7 = document.getElementById("Board7").value;
        localStorage.Board11 = document.getElementById("Board11").value;
        // localStorage.sport=document.getElementById("")
        var sports = [];
        var checkboxs = document.querySelectorAll('input[name="draw"]:checked');
        checkboxs.forEach(function (checkbox) {
            sports.push(checkbox.value);
        });
        localStorage.setItem("draw", JSON.stringify(sports));
    }
    // return true;
    document.getElementById("dev").submit();



}

function setData() {
    if (typeof localStorage != "undefined") {
        document.getElementById("show1").innerHTML = localStorage.fname || ""; // Show fname or empty string if not set
        document.getElementById("show2").innerHTML = localStorage.lname || ""; // Show lname or empty string if not set
        document.getElementById("show3").innerHTML = localStorage.age || ""; // Show age or empty string if not set
        document.getElementById("show4").innerHTML = localStorage.getItem("gender");
        document.getElementById("show5").innerHTML = localStorage.phone;
        document.getElementById("show6").innerHTML = localStorage.email;
        document.getElementById("show7").innerHTML = localStorage.district;
        var store = JSON.parse(localStorage.getItem("draw")) || [];
        document.getElementById("show8").innerHTML = store.join(",") || "";
        document.getElementById("show9").innerHTML = localStorage.address;
        document.getElementById("show10").innerHTML = localStorage.city;
        document.getElementById("show11").innerHTML = localStorage.pin;
        document.getElementById("show12").innerHTML = localStorage.state;
    } document.getElementById("Board").innerHTML = localStorage.Board;
    document.getElementById("Board4").innerHTML = localStorage.Board4;
    document.getElementById("Board8").innerHTML = localStorage.Board8;
    document.getElementById("Board1").innerHTML = localStorage.Board1;
    document.getElementById("Board5").innerHTML = localStorage.Board5;
    document.getElementById("Board9").innerHTML = localStorage.Board9;

    document.getElementById("Board2").innerHTML = localStorage.Board2;
    document.getElementById("Board6").innerHTML = localStorage.Board6;
    document.getElementById("Board10").innerHTML = localStorage.Board10;

    document.getElementById("Board3").innerHTML = localStorage.Board3;
    document.getElementById("Board7").innerHTML = localStorage.Board7;
    document.getElementById("Board11").innerHTML = localStorage.Board11;

    // Clear stored values after displaying them
    localStorage.fname = "";
    localStorage.lname = "";
    localStorage.age = "";
    localStorage.gender = ""; // Clear gender
    localStorage.phone = ""; // Clear phone
    localStorage.email = "";
    localStorage.district = "";
    localStorage.sport = "";
    localStorage.address = "";
    localStorage.city = "";
    localStorage.pin = "";
    localStorage.state = "";
    localStorage.Board = "";
    localStorage.Board4 = "";
    localStorage.Board8 = "";
    localStorage.Board1 = "";
    localStorage.Board5 = "";
    localStorage.Board9 = "";
    localStorage.Board2 = "";
    localStorage.Board6 = "";
    localStorage.Board10 = "";
    localStorage.Board3 = "";
    localStorage.Board7 = "";
    localStorage.Board11 = "";// Clear email
}