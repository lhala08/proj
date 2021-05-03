
//lets target our form component and palce it inside a new variable
let registerForm = document.querySelector("#registerUser");

//inside the first param of the method describe the event  that it will listen to, while inside the 2nd param lets describe the action/ procedure that will happen upon triggering sa the said event

registerForm.addEventListener("submit",(e) => {
	event.preventDefault()//to avoid refresh/ page redirection once that the said event triggered.

	//capture each values inside the input fields first
let firstName = document.querySelector("#firstName").value
//lets create a checker if we are successful to make sure that we are successful
console.log(firstName)

let lastName = document.querySelector("#lastName").value
//lets create a checker if we are successful to make sure that we are successful
console.log(lastName)
let email = document.querySelector("#userEmail").value
//lets create a checker if we are successful to make sure that we are successful
console.log(email)
let mobileNo = document.querySelector("#mobileNumber").value
//lets create a checker if we are successful to make sure that we are successful
console.log(mobileNo)
let password =document.querySelector("#password1").value
//lets create a checker if we are successful to make sure that we are successful
console.log()
let verifyPassword = document.querySelector("#password2").value
console.log(verifyPassword)


//create a simle alert message
/*alert("succesfully captured data")*/
//fire () will allow you to trigger pop up box
Swal.fire({
	icon: "success",
	text: "Registered Successfully"
   })
});