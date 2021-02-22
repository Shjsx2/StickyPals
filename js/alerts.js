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

function saveFile(){
    var name = "foo3";
    var myCanvas = document.getElementById('wallBod');
    canvas.toBlob(function(blob){
        saveAs(blob, name);
    })
}


