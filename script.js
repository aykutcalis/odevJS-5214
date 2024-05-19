// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// } burada mylink ıd li  div'i js ile çektikten sonra div' in style ini koşula bağlayarak displayi "none" sa(kapalı) "block"(açık) ,"block"'sa(açık)
//"none"(kapalı) yapıyoruz.Bu özelliği aşağıda "toggle" ile sağladık.

if (window.innerWidth < 500 ) {
  document.getElementById("topNav").classList.add("topnav");
} else {
  document.getElementById("topNav").classList.add("topnav-pc");
}
function myFunction() {
  document.getElementById("myLinks").classList.toggle("hidden");
  }
