$(document).ready(function () {
    addButton = $("#addButton");
    saveButton = $("#save")
    back = $("#back");
    text = $("#textBox");
    addButton.click(addNote);
    back.click(goPrevious);
    saveButton.click(onSaveClick)
  });

  
$( function() {
  $(".note").draggable({
      cursor: "grabbing",
      opacity: 0.5,
      //grid:[300,300],
      snap: true,
      snapTolerance: 30
  });
} );

// function addNote() {s

//   // todo: give random colors to new note
//   var colors = ["#c4c4c4", "#f2f2f2", "#000000"]
//   var c = colors[Math.floor(Math.random()*colors.length)]
//   $("body ul").append("<li  class ="note" ><a href='#' contenteditable='true'><h2>New Note</h2><p>type something...</p></a></li>"");

// }
/*"<li class = 'note ui-draggable ui-draggable-handle' style='position: relative; opacity: 1; >> <a href='#' contenteditable='true'><h2>New Note</h2><p>type something...</p></a></li>"*/

function addNote() {
  // todo: give random colors to new note
  
  var colors = ["#c4c4c4", "#f2f2f2", "#000000"]
  var c = colors[Math.floor(Math.random()*colors.length)]
  $("body ul").append('<li class="note"> <a href="#" contenteditable="true"> <h2>New Note</h2> <p>type something...</p></a></li>');
  $(".note").draggable({
    cursor: "grabbing",
    opacity: 0.5,
    //grid:[300,300],
    snap: true,
    snapTolerance: 30
});
}

function savePage(){
  //select content in body, add that to a new page and connect that to gallery
  //or duplicates file to "userviews"
  //connected to save button

  var bod = $("#wallBod");
 // const fs = require('fs');
  var file = new File(bod, "newfile2.handlebars",{
    type: "hadlebars",
  })

  $()
  // fs.writeFile('newFile1.handlebars', 'test content', function(err){
  //   if(err) throw err;
  //   console.log('file saved!');
  // })

  console.log('file saved!');
}

function onMoreClick() {
  $("#moreDropdown").toggle('show')
}

function goPrevious(){
  history.go(-1);
}

function onSaveClick() {
  // todo: give every note an unique id and save
  var notes = $('.container li a')
  var titles =[];
  var notes = [];
  $('.container li a').each(function(idx){
    titles.push($(this).find('h1').text())
    notes.push($(this).find('p').text())
  })
}

