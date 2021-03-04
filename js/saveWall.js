function saveFile(){
    var name = "foo3";
    var myCanvas = document.getElementById('wallBod');
    canvas.toBlob(function(blob){
        saveAs(blob, name);
    })
}


//save body of text into file, save list to document. 
//check number of notes, create list with sixe of notes * 2, flil list with notes data. store variable
//

// window.onload = function addWall() {
//     // finds "samplePage". Copies text from "noteList" and save to variable. append that to the body of samplePage
//     console.log("addWall() called");

//     //var myNotes = document.getElementById("noteList");
//     var myNotes = "<div>asdf</div>";

//     // document.getElementById('samplePageContainer').appendChild(myNotes);
//     // document.getElementById('samplePageContainer').insertAdjacentHTML('afterend', myNotes);

//     document.getElementById('samplePageContainer').append(myNotes);
//   }

  function addWall(){
    console.log("new addWall() called");

    //var myNotes = document.getElementById("noteList");
    var myNotes = "<p>asdf<p>";

    // document.getElementById('samplePageContainer').appendChild(myNotes);
    // document.getElementById('samplePageContainer').insertAdjacentHTML('afterend', myNotes);

    // var myDiv = document.getElementById('samplePageContainer').innerHTML;
    // myDiv.append(myNotes);

    $('#samplePageContainer').append(myNotes);
  }


/*   ajax notes
 $.get("http://URL", callBackFn)
 $.post("http://URL", {"json":"json"}, callBackFn)

 function addProject(result) {
  var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="img">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>';
}

 */