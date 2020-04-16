function srcbox(){
    const input,filter,ul,li,a,i,txtvalue;
    input=document.getElementById('srcbar');
    filter=input.value.toLowerCase();
    ul=document.getElementById('srclist');
    li=document.getElementsByTagName('li');

    for(i=0 ;i<li.lenght;i++){
        a=li[i].getElementsByTagName("li")[0];
        txtvalue=a.textContent || a.innerText;
        if(txtvalue.toLowerCase().indexOf(filter)> -1){
            li[i].style.display="nothing";
        }
        else{
            li[i].style.display="none";
        }
    }
}
