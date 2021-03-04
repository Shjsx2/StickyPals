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

$(document).ready(function() {
    $("#alert1").hide()
    $("#alert").hide()
    $("#publishAlert").hide()
    $("#saveAlert").hide()
    $("#alertNote").hide()
    currentUser = window.localStorage.getItem('currentUser')
    $(".jumbotronDesign2 h1").text("Hello, "+currentUser +"!")
})

function hideAlert(tag){
    $(tag).fadeOut();
}

function showAlert(tag){
    $(tag).fadeIn();
}

function showAlert2(tag){
    $(tag).fadeIn(800);
    function stopPopup(){
        $(tag).fadeOut(1400);
    }
    //var time = secs * 1000;
    window.setTimeout(stopPopup, 1600);
}

//display
function fade(tag){
    $(tag).fadeIn();
  }
  
$(document).ready(function() {
    $("#headerframe").fadeIn();
})



// function saveFile(name){
//     //tutorial: https://www.youtube.com/watch?v=YoVJWZrS2WU
//     name = "file1";
//     //const myCanvas = document.getElementById('wallBod');
//     const myCanvas = document.querySelector("#wallBod")
//     const myURI = myCanvas.toDataURL("image/jpeg");
//     const imgConverted = document.querySelector("#myCanvas")
//     imgConverted.src = myURI;


//     if(window.navigator.msSaveBlob(myCanvas.msToBlob(), name));

// }

// // var btn = document.querySelector("#saveBtn");
// const myCanvas = document.querySelector("#wallBod");
// //const myURI = myCanvas.toDataURL("image/jpeg");
// const imgConverted = document.querySelector("#myCanvas");
// var btn = document.getElementById('saveBtn');

// btn.addEventListener("click",function saving(){
//     // if(window.navigator.msSaveBlob){
//     //     window.navigator.msSaveBlob(myCanvas.msToBlob(), "foo2");
//     // }

// })

//convert body to canvas first



//commented this out when resolving merge conflicts
//     if(window.navigator.msSaveBlob(myCanvas.msToBlob(), name));
// }



function checkReload() {
    if ($('#alert1').check == false) {
        $('#alert1').display = "block";
    }else{
        $('#alert1').display = "none";
    }
}




