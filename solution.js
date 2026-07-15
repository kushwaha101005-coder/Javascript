function createcard(title,cname,views,monthold,sduration){
    document.querySelector(".title").innerHTML=title;
    document.querySelector(".cname").innerHTML=cname;
    document.querySelector(".views").innerHTML=views;
    document.querySelector(".age").innerHTML=monthold;
    document.querySelector(".duration").innerHTML=sduration;
   
   


}

function newviews(views){
if(views>1000 && views<1000000){
    let r=views/1000;
    return newviews=r+"K"

}
else if(views>1000000){
    let m=views/1000000;
    return newviews=m+"M"
}
}
    
    






let title=prompt("enter title");
let cname=prompt("enter channel name");
let views=prompt("enter views");
let monthold=prompt("enter age");
let duration=prompt("enter duration");
let sduration=String(duration);
newviews=newviews(views);
createcard(title,cname,newviews,monthold,sduration);

