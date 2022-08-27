check=0;

function select_NGO(){
    check=1;
    ngo=document.getElementById("ngo").value;
    console.log(ngo);

    address=document.getElementById("add").value;
    name=document.getElementById("name").value;
    food_detail=document.getElementById("fd").value;

    if((ngo!="" && address!="")&&(name!="" && food_detail!="")){

        console.log(ngo);
        console.log(address);
        console.log(name);
        console.log(food_detail);

        document.getElementById("mailngo").href="mailto:"+ngo+"?subject=I want to donate food. So Pls Come And collect It"+"&body="+"Name:  "+ name   + "    "+ "Address:  " + address  + "    "+"Food Detail:  "+  food_detail;
    }
    else{
        console.log("hi");
    window.alert("Pls Fill Up All The Values");
    }


}

function oksub()
{
    console.log(check)
    if(check == 0)
    {
        window.alert("Pls Fill Up All The Values");
    }
    
}
