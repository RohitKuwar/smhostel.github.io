function validation1() {

    var first = document.getElementById('fname').value;
    var upattern = /^[A-Za-z]{2,20}$/;

    if (upattern.test(first)) {
        document.getElementById('fname').style = "color:white;opacity:0.8";
    } else {
        document.getElementById('fname').style.backgroundColor = 'red';
    }

}

function validation2() {

    var last = document.getElementById('lname').value;
    var upattern = /^[A-Za-z]{2,20}$/;

    if (upattern.test(last)) {
        document.getElementById('lname').style = "color:white;opacity:0.8";
    } else {
        document.getElementById('lname').style.backgroundColor = 'red';
    }

}

function funmail() {

    var mail = document.getElementById('email').value;
    var upattern = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,}$/;

    if (upattern.test(mail)) {
        document.getElementById('email').style = "color:white;opacity:0.8";
    } else {
        document.getElementById('email').style.backgroundColor = 'red';
    }
}

function funmobile() {

    var mob = document.getElementById('mobile').value;
    var upattern = /^[0-9]{10}$/;

    if (upattern.test(mob)) {
        document.getElementById('mobile').style = "color:white;opacity:0.8";
    } else {
        document.getElementById('mobile').style.backgroundColor = 'red';
    }

}

// function myalert(){

//     var first = document.getElementById('fname').value;
//     var last = document.getElementById('lname').value;
//     var mail = document.getElementById('email').value;
//     var mob = document.getElementById('mobile').value;

//     if (first !== '' && last !== '' && mail !== '' && mob !== '') {
        // alert('Congratulations!!! Your information has been registered succesfully & we will contact you soon');
//         swal("Congratulations!!!", "Your information has been registered succesfully & we will contact you soon.", "success");
//     }
// }

// function myalert() {
//     if(validation1 && validation2 && funmobile && funmail) {
//         swal("Congratulations!!!", "Your information has been registered succesfully & we will contact you soon.", "success");
//     }
// }
// setTimeout(myalert, 1000);

