function getFormvalue() {
    //Write your code here
let inps = document.querySelectorAll("input");
let fname = inps[0].value;
let lname = inps[1].value;
let fullname = fname+" "+lname;
	alert(fullname); 
}