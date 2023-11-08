function Login() {
    var done = 0;
    var username = docomen.Login.username.value;
    var password = document.Login.password.value;

   if(username == "daffa" && password == "daffa") {
    if(confirm("apakah anda ingin login?") == true) {
        window.location.href ="https://github.com/daffazein123?tab=repositories";
    } else{
        alert("membatalkan login !");
    }
    } else{
        if(done==0) {
            alert("username/password salah") ;
    }
   }
}