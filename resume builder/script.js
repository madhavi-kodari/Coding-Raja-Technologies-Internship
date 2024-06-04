function addNewWEField() {
    console.log("Adding new field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weFied");  
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");


    weOb.insertBefore(newNode,weAddButtonOb);
}
 function addNewAQField() {
    console.log("Adding new field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}


//generating cv
function generateCV(){
    //console.log("generating CV");

    let  nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT");

    nameT1.innerHTML=nameField;
    //direct
    document.getElementById("nameT2").innerHTML=nameField;
    //contact
    let contactT=document.getElementById("contactT");
    contactT.innerHTML=contactField;
    document.getElementById("contactT").innerHTML=document.getElementById(
        "contactField"
    ).value; 
    //address
    document.getElementById("addressT").innerHTML=document.getElementById(
        "addressField"
    ).value;
//facebook
    document.getElementById("fbT").innerHTML=document.getElementById(
        "fbField"
    ).value;
//instagram
    document.getElementById("instaT").innerHTML=document.getElementById(
        "instaField"
    ).value;
//linkedin
    document.getElementById("linkedT").innerHTML=document.getElementById(
        "linkedField"
    ).value;

    //objective

    document.getElementById("objectiveT").innerHTML=document.getElementById(
        "objectiveField"
    ).value;
 
    //work experience

    let wes=document.getElementsByClassName("weField");
    let str2="";
    for(let e of wes)
    { 
        str2=str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str2;
    document.getElementById("cv-template").style.display="block";


    let aqs=document.getElementsByClassName("aqField");
    let str1="";
    for(let e of aqs) 
    {
        str1=str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";




}

function PrintCV(){
    window.print();
}