
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validate(data){
if(!data.firstname.value){
alert("Ismni kiriting")
    data.firstname.focus();
    return false;
}

if(data.firstname.value.trim().length < 3){
    alert("Ism kamida 3 ta belgida iborat bo'lishi zarur kiriting")
    data.firstname.focus();
    return false;
}

if(!data.email.value){
    alert("Elektron poshtani kiriting")
        data.email.focus();
        return false;
    }

if(!validateEmail(data.email.value)){
    alert("Email noto'g'ri kiritilgan")
    data.email.focus();
    return false;
}

    if(!data.username.value){
        alert("Foydalanuvchi nomini kiriting")
            data.username.focus();
            return false;
        }
        if(!data.password.value){
            alert("Parolni kiriting")
                data.password.focus();
                return false;
            }
            if(!data.repassword.value){
                alert("Parolni qaytadan kiriting")
                    data.repassword.focus();
                    return false;
            }
            if(data.password.value != data.repassword.value){
                alert("Kiritilgan parollar bir biriga mos kelmadi")
                data.password.focus();
                data.repassword.value  = "";
                return false;
            }
    return true;
}

function getData(){
    const data = [];
    if(localStorage.getItem("informations")){
        data = JSON.parse(localStorage.getItem("informations"))
    }
}

export { getData, validate };

