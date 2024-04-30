var icon2 = document.getElementById("icon2");
icon2.onclick = function(){
    document.body.classList.toggle("lighttheme");
    if(document.body.classList.contains("lighttheme")){
        icon2.src = "d:\2nd semseter\IT\resturant project\moon.svg"
    }
    else{ 
        icon2.src = "d:\2nd semseter\IT\resturant project\sun.svg"
    }
}