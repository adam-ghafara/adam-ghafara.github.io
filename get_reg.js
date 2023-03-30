function PushReg(){
    getname=document.getElementById("getname").value;
    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    PostSignUp(getname,username,email,password);
}

function PostSignUp(getname,username,email,password){
var myHeaders = new Headers();
myHeaders.append("LOGKEY", "576TGH4EDTD76EYUAG4J3E76DTUGJ4GW");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "getname": getname,
  "username": username,
  "email": email,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://eonspzggysldjw6.m.pipedream.net", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); 
}

function GetResponse(result){
    document.getElementById("formsignup").style.display = 'none';
    document.getElementById("formsignup").style.display = 'block';
    document.getElementById("formsignup").innerHTML = result;
}