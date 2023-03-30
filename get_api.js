var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};  

hasil="";
txt="";
txt1="";

fetch("https://xkcd.com/info.0.json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

function tampilkan(result){
    console.log(result);
    hasil=JSON.parse(result);
    txt=hasil.forEach(isitabel);
}

function isitabel(value){
  const mon = "Month: "
  const yr = "Year: "
  const tlt = "Title: "
  const com = "Chat: "
  const pag = "* * * * * * * * * * * *"
    txt= txt+trnyatabel.replace("#TEXT#",mon+value.month + "");
    txt= txt+trnyatabel.replace("#TEXT#",yr+value.year + "");
    txt= txt+trnyatabel.replace("#TEXT#",tlt+value.safe_title + "");
    txt= txt+trnyatabel.replace("#TEXT#",com+value.alt + "");
    txt= txt+trnyatabel.replace("#TEXT#",pag);
  document.getElementById("konten").innerHTML=txt;
}
trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `