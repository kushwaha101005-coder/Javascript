function createcard(title,cname,views,monthold){
    document.querySelector("content").innerHTML=title;
    document.querySelector("cname").innerHTML=cname;
    document.querySelector("views").innerHTML=views;
    document.querySelector("age").innerHTML=monthold;




}

let title=prompt("enter title")
let cname=prompt("enter channel name")
let views=prompt("enter views")
let monthold=prompt("enter age")
createcard(title,cname,views,monthold);

