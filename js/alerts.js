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


function saveFile(name){
    // https://www.youtube.com/watch?v=YoVJWZrS2WU
    name = "file1";
    const myCanvas = document.getElementById('wallBod');
    const myURI = myCanvas.toDataURL("image/jpeg");
    imgConverted.src = myURI;

    if(window.navigator.msSaveBlob(myCanvas.msToBlob(), name));

}




