//hide and show alert

// $(document).ready(function(){
//     $("#alert").hide();
// })

// document.getElementById('alert').hide();

// $(document).ready(function(){
//     $("#makewall").click(function(){
//       $("#alert").show();
//     });
//   });

//   $(document).ready(function(){
//     $("button").click(function(){
//       $("#alert").hide();
//     });
//   });

function hideAlert(){
    $("#alert").fadeOut();
}

function showAlert(){
    $("#alert").fadeIn();
}
