
/* javascript */
// $("h1").hide();
// callback funciton goes in click

let username ="";
let requiredUsername = "secret";

$("form").submit(function(e){
  e.preventDefault();
  username = $(".username").val();
  console.log(username);


  let str = "";
  if (requiredUsername == username){
    console.log("welcome secret agent");
    str =`
    <div class="alert alert-secondary" role="alert">
      A simple secondary alert—check it out!
    </div>`;
}

$('output').html(str);

});
