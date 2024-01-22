// let height = $(".card-img-top");
// let mediaWidth = window.matchMedia("(max-width:500px)")
//
// if(mediaWidth.matches){
//   height.css("height", "250px");
// }

function whatsapp(){
  let name = $(".name").val();
  let mail = $(".mail").val();

  let url = "https://wa.me/+2348175499612?text=Hey%20Daniel!%20i%20would%20love%20to%20work%20with%20your%20team%20my%20name%20is "+ name+" and my email is "+ mail

  window.open(url, "_blank").focus();

}
