function validatesubmit(){ // دالة تحقق عند ضغط على submit
     // myForm إسم فورم الذي يجب تحقق منه
      // name // telephone // password // email  //الذي يجب تحقق منه input 
      // document.myForm.name.value.length // حساب عدد احرف في حقل
      // focus() يقع تركيز على حقل
    if((document.myForm.name.value == "")  || (document.myForm.name.value.length < 6) ){document.myForm.name.focus();return false;}
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  // لتحقق من صيغة الأميل  
    if((document.myForm.email.value == "" )){document.myForm.email.focus() ;return false;}   
    else if(!re.test(document.myForm.email.value)){document.myForm.email.focus() ;return false;}  
    // تحقق من ملئ حقل و عدد احرف مدخلة 
    if((document.myForm.telephone.value == "" ) || (document.myForm.telephone.value.length < 10)){document.myForm.telephone.focus() ;return false;}
    if((document.myForm.password.value == "" ) || (document.myForm.password.value.length < 8)){document.myForm.password.focus() ;return false;}
}
//<span class='glyphicon glyphicon-ok'><span> // <span class='glyphicon glyphicon-remove'> // fonticon bootstrap
function validate(){  // دالة لتحقق عند كتابة على input
      if((document.myForm.name.value == "")  || (document.myForm.name.value.length < 6) ){ 
      document.getElementById("input_1").innerHTML = "إسم  : يجب أن يتكون أكثر من 6 أحرف <span class='glyphicon glyphicon-remove'> </span>";
      return false;}else if((document.myForm.name.value.length > 6)){
      document.getElementById("input_1").innerHTML = "<span class='glyphicon glyphicon-ok'><span>"; 
      }
   
      var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if((document.myForm.email.value == "")){ // لتحقق من صيغة الأميل  
      document.getElementById("input_2").innerHTML = "تأكد من ملئ حقل الإميل <span class='glyphicon glyphicon-remove'> </span>";
      return false;}else if(!re.test(document.myForm.email.value)){
      document.getElementById("input_2").innerHTML = "تأكد من صيغة الإميل <span class='glyphicon glyphicon-remove'> </span>";
      return false;}else{
      document.getElementById("input_2").innerHTML = "<span class='glyphicon glyphicon-ok'><span>"; 
      }
            
      if( (document.myForm.telephone.value == "" ) || (document.myForm.telephone.value.length < 10)){
      document.getElementById("input_3").innerHTML = "رقم الهاتف يجب أن يكون أكثر أو يساوي 10 أرقام <span class='glyphicon glyphicon-remove'> </span>";
      return false;}else if((!document.myForm.telephone.value.match(/^[0-9\s(-)]*$/))){ // تحقق من الدخل ارقام
      document.getElementById("input_3").innerHTML = "رقم الهاتف يجب أن يحتوي على أرقام فقط <span class='glyphicon glyphicon-remove'> </span>";
      return false;}else{
      document.getElementById("input_3").innerHTML = "<span class='glyphicon glyphicon-ok'><span>"; 
      }

   if((document.myForm.password.value == "" ) || (document.myForm.password.value.length < 8)){
      document.getElementById("input_4").innerHTML = "كلمة المرور : يجب أن تكون أكثر من 8 أحرف <span class='glyphicon glyphicon-remove'> </span>";
      return false;}else if((document.myForm.password.value.length > 8)){
      document.getElementById("input_4").innerHTML = "<span class='glyphicon glyphicon-ok'><span>";  
      }

}
