// alert("Welcome to My Portfolio Website!");

// let myName = "Komal Sain";
// let dream = "Future Star";

// alert("My name is " + myName);
// alert("My dream is to become a " + dream);

// function showMessage() {
//     alert("Thank you for visiting my portfolio!");
// }

// let userName = prompt("Enter Your Name:");
// alert("Welcome " + userName);
// let age = prompt("Enter your age:");
// if(age>= 18){
//     alert("You are eligible to vote.");
// }
// else{
//     alert("You are not eligible to vote.");
// }

// let marks = prompt("Enter your marks:");
// if (marks>=90){
//     alert("Grade A");
// }
// else if (marks>=75){
//     alert("Grade B");
// }
// else if(marks>=50){
//     alert("Grade c");
// }
// else if(marks>=35){
//     alert("Grade D")
// }
// else{
//     alert("Fail");
// }
// let marks = 89;
// if( marks>=89) {
// alert("Pass");
// }
// else{
//     alert("Fail");
// }
// let age = 22;
// let hasID = true;
// if(age>=18){
//     if(hasID){
//         alert("Entry Allowed");
//     }else{
//         alert("ID Required");
//     }
// }else{
//     alert("under Age");
// }
// let age = 21;
// let hasID = true;
// if(age>=18 && hasID){
//     alert("Entry Allowed");
// }
// else{
//     alert("entry not allowed");
// }
// let isAdmin = false;
// let isTeacher = true;

// if (isAdmin || isTeacher){
//     alert("Access Granted");
// }else{
//     alert("Access Denied");
// }
// let isLoggedIN = false;
// if(!isLoggedIN){
//     alert("Please login");
// }else{
//     alert("Welcome");
// }
// let age = 21;
// let hasLicense = true;
// if(age>=18 || hasLicense){
//     alert("allow");
// }else{
//     alert("not allow");
// }
// LOOP FOR JAVA
// for(let i=1; i<=5; i++)
//     {
//     alert(i);
// }
// FUNCTION
// function greet(){
//     alert("welcome future actor");
// }
// greet();
// function greet(name){
//      alert("Hello"+name);
//  }
//  greet("komal");
//  greet("Vishal");
//ARRAY
// let Actors= ["Billal Abbas Khan,Shiddarth Malhotra,Feroz Khan,harashvardhan Chopda"];
// alert(Actors);
//Object
// let student ={
//     name:"Komal",
//     age:18,
//     course:"B.tech"
// };
// alert(student.course);
// function changetext(){
// document.getElementById("title").innerHTML = "Welcome Komal!";
// }
// function checkName(){
//     let name = document.getElementById("name").value;
//     if (name == ""){
//         alert("Please enter your name");
//     }else{
//         alert("Welcome" + name);
//     }
// }
// function showMessage() {
//     alert("Welcome Future Starrr!");
// }

// function checkName() {
//     let name = document.getElementById("name").value;

//     if (name == "") {
//         alert("Please enter your name");
//     } else if (name.length < 3) {
//         alert("Name must be at least 3 characters");
//     } else {
//         alert("Welcome " + name);
//     }
// function showMessage() {
//     alert("Welcome Future Starrr!");
// }

// function checkName() {
//     let name = document.getElementById("name").value;
//     let password = document.getElementById("password").value;

//     if (name == "") {
//         alert("Please enter your name");
//     } else if (name.length < 3) {
//         alert("Name must be at least 3 characters");
//     } else if (password == "") {
//         alert("Please enter your password");
//     } else {
//         alert("Login Successful");
//     }
// }
function checkName() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    if (name == "") {
        alert("Please enter your name");
    } else if (name.length < 3) {
        alert("Name must be at least 3 characters");
    } else if (password == "") {
        alert("Please enter your password");
    } else if (name == "Komal" && password == "123456") {
        alert("Login Successful");
        location.href = "./home.html";
    } else {
        alert("Invalid Username or Password");
    }
}
const text = "Hii, I am Komal Sain";
let i = 0;
function typeWriter(){
    if(i < text.length){
document.getElementById("typing").innerHTML +=text.charAt(i);
            i++;
setTimeout(typeWriter, 100);
    }
}
typeWriter();
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeToggle.innerHTML = "☀️";
    }else{
        themeToggle.innerHTML = "🌙";
    }
});
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});