var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
}; 

hasil=""
txt=""
txt1=""

fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
  .then(response => response.text())
  .then(result => show_result(result))
  .catch(error => console.log('error', error));

function show_result(result){
    console.log(result);
    hasil=JSON.parse(result);
    txt=hasil.forEach(isitabel);
}

function isitabel(value){
  const id = "ID: "
  const str = "TITLE: "
  const cnt = "COMPLETED : "
  const pag = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"
  txt= txt+trnyatabel.replace("#TEXT#",id+value.userId + "");
    txt= txt+trnyatabel.replace("#TEXT#",str+value.title + "");
    txt= txt+trnyatabel.replace("#TEXT#",cnt+value.completed + "");
    txt= txt+trnyatabel.replace("#TEXT#",pag);
  document.getElementById("konten").innerHTML=txt;
}
trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `