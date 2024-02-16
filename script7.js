let dropdown=document.querySelector(".dropdown");
let dropdownDiv=document.querySelector(".dropdown-div");

function displayList(){
    let ul=document.createElement("ul");
    ul.id='unorderedList';
    ul.style.display="none";

    let li1=document.createElement("li");
    let a1=document.createElement("a");
    a1.textContent="Home";
    li1.appendChild(a1);
    ul.appendChild(li1);

    let li2=document.createElement("li");
    let a2=document.createElement("a");
    a2.textContent="About";
    li2.appendChild(a2);
    ul.appendChild(li2);

    let li3=document.createElement("li");
    let a3=document.createElement("a");
    a3.textContent="Services";
    li3.appendChild(a3);
    ul.appendChild(li3);

    let li4=document.createElement("li");
    let a4=document.createElement("a");
    a4.textContent="Contact Us";
    li4.appendChild(a4);
    ul.appendChild(li4);

    dropdownDiv.appendChild(ul);
}


dropdown.addEventListener("click",function(){
    if(document.getElementById("unorderedList")){
        if(unorderedList.style.display==='none'){
            unorderedList.style.display="block";
           }
            else{
                unorderedList.style.display="none";
            }
    }
    else{
        displayList();
    }
   
});

