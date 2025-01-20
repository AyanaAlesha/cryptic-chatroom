
let button = document.getElementById("proceed"); 

button.addEventListener("click", function(){
    
    const termsAndCond = document.getElementById("terms"); 

        if(termsAndCond.checked){
           console.log(Boolean(termsAndCond)); 
           location.href = "user.html";
        }
        else{ 
            console.log("false");
            alert("Check the terms and conditions to proceed.");
        }


})
function loginBtn(){
    const reqMessage = document.getElementById("userNameReq");
    const userName = document.getElementById('username').value;
    const passwrd = document.getElementById("passwd").value;
    let regEx = /\d/;

    if(userName === "" || passwrd === ""){
        alert("Please fill out required fields to enter the chatroom.");
        return;
    } 
    if(userName.length >= 4 && userName.length <= 9  && regEx.test(userName)){
        localStorage.setItem("username", userName);

        location.href = "chatroom.html";
    }
    else{
        reqMessage.textContent = "Username must be 4 to 9 characters with one number ";

    }
}


