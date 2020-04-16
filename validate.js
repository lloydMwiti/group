function validatedForm(){
    const form =document.forms['mForm'];
    const param1=form["name"].value;
    const param2=form["email"].value;
    const param3=form["more"].value;

    if(param1 && param2 && param3 ){
        alert("Your response has been submited");
        return true;
    }
    else{
        alert("fill out all fields and try again");
        return false;
    }
}