function valid(){
  
    let uname=document.querySelector('#fname').value; 
     let email=document.querySelector('#txtemail').value;
     let psw=document.querySelector('#psw').value;
     let cpsw=document.querySelector('#cpsw').value;
    let  emails= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     passw=  /^[A-Za-z]\w{7,14}$/;
if(!email.match(emails)){
  document.querySelector('#pg').innerHTML="email is not valid"
}
if(psw==cpsw){
  document.querySelector('#pg').innerHTML="password are match"
}else{
  document.querySelector('#pg').innerHTML="password does not match"
}
if(psw.length<8){
  document.querySelector('#pg').innerHTML="password is weak need atleast 8 character"
}
     if(uname ==  ""){
        document.querySelector('#pg').innerHTML="username is empty"
       
     }else if(email==""){
      document.querySelector('#pg').innerHTML="username is empty" }
      else if(psw==""){
        document.querySelector('#pg').innerHTML="password is empty" }

        else if(cpsw==""){
            document.querySelector('#pg').innerHTML="confirm  is empty" }



} function onlyone (checkbox) {
  var checkboxes = document.getElementsByName('checkbox')
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
  })
 
}