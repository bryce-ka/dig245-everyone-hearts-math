
/* javascript */
// $("h1").hide();
// callback funciton goes in click
$(".submit").click(function(e){
  e.preventDefault();
  username = $(".username").val();
  console.log(e);
  console.log("username:" +username)
});
