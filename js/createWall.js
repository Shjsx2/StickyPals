$(document).ready(function () {
    addButton = $("#addButton");
    saveButton = $("#save");
    back = $("#back");
    text = $("#textBox");
    dragNote = $("#drag");
    addButton.click(addNote);
    back.click(goPrevious);
    saveButton.click(onSaveClick);
    dragNote.click(dragNotes);
    //DnD
    var noteList = $('#noteList');
    noteList.on('touchmove', function(e){
        console.log("hi")
    })
    $("#alert").hide();

    wallTitle = window.localStorage.getItem("currentWall")
    $('.headerWrap a').text(wallTitle==="null" ? "UNNAMED" : wallTitle)

    if(!wallTitle) return;
    gallery = JSON.parse(window.localStorage.getItem('gallery'));
    notes = null;
    for(var key in gallery){
        if(key === wallTitle){
          notes = gallery[key]
        }
    }
    if(!notes || Object.keys(notes).length === 0) return;
    notes.forEach(function(note) {
      addNote(null, note.title, note.text)
    })
})

  //draggable 
  // $( function() {
  //   $(".note").draggable({
  //       cursor: "grabbing",
  //       opacity: 0.5,
  //       //grid:[300,300],
  //       snap: true,
  //       snapTolerance: 30
  //   });
  // } );

  //   $('.note').on('focus', function(e){
  //     $(this).parent().attr('draggable', 'false')
  //   })

  //   $('.note').on('blur', function(e){
  //     $(this).parent().attr('draggable', 'true')
  //   })
  // });

//addNote with draggable
// function addNote() {s

//   // todo: give random colors to new note
//   var colors = ["#c4c4c4", "#f2f2f2", "#000000"]
//   var c = colors[Math.floor(Math.random()*colors.length)]
//   $("body ul").append("<li  class ="note" ><a href='#' contenteditable='true'><h2>New Note</h2><p>type something...</p></a></li>"");

// }
/*"<li class = 'note ui-draggable ui-draggable-handle' style='position: relative; opacity: 1; >> <a href='#' contenteditable='true'><h2>New Note</h2><p>type something...</p></a></li>"*/

//adddNotes
function addNote(e, title='new note', text='type something....') {
  // todo: give random colors to new note
  console.log("loading "+title)
  var colors = ["#c4c4c4", "#f2f2f2", "#000000"]
  var c = colors[Math.floor(Math.random()*colors.length)]
  
  // $("body ul").append('<li class="note"><img class = "colorbutton" src="../icons/colorpallette.png" onclick = "showColors()"><img class="deleteButton" src="../icons/L/delete.png" contenteditable="false"><a contenteditable="true"><h3 class = "headerContainer">'+title+'</h3><p class = "textContainer">'+text+'</p></a></li>');

  $("body ul").append(' <li class = "note"><img class = "colorbutton" src="../icons/colorpallette.png" onclick = "colorClick()"><img class="deleteButton" src="../icons/L/delete.png" contenteditable="false"><a contenteditable="true" class = "blueNote" id = "changeableNote"><p class = "headerContainer">'+title+'</p><p class = "textContainer" >'+text+'</p></a><div id = "colorDropdown" ><a id = "blueColor" onclick = "changeToBlue()">blue</a><a id = "purpleColor" onclick="changeToPurple()">purple</a><a id = "pinkColor" onclick="changeToPink()">pink</a><a id = "redColor" onclick="changeToRed()">red</a><a id = "orangeColor" onclick="changeToOrange()">orange</a><a id = "yellowColor" onclick="changeToYellow()">yellow</a><a id = "greenColor" onclick="changeToGreen()">green</a></div></li> ')

  $(".deleteButton").click(deleteNotes)
  // $(".dragButton").click(dragNotes)
}


function onMoreClick() {
  $("#moreDropdown").toggle('show')
}
function colorClick() {
  $("#colorDropdown").toggle('show')
}

function goPrevious(){
  history.go(-1);
}

function onSaveClick() {
  // todo: give every note an unique id and save
  var notes = []
  var wallTitle = $(".headerWrap a").text();
  $('.container li a').each(function(idx){
    var title = $(this).find('h2').text()
    var text = $(this).find('p').text()
    notes.push({'title': title, 'text': text})
  })
  var current = JSON.parse(window.localStorage.getItem("gallery"))
  console.log(current)
  if(!current) current = {};

  if(notes.length === 0)
    current[wallTitle] = {}
  else
    current[wallTitle] = notes

  console.log(current)
  window.localStorage.setItem('gallery', JSON.stringify(current))
  alert("Notes saved to local storage")
}

//touch API not wokring 
// noteList.addEventListener('touchmove' , function(e){
//    var location = e.targetTouch[0];
//    noteList.style.left = location.pageX + 'px';
//    noteList.style.top = location.pageY + 'px';
// })

// noteList.addEventListener('touchEnd' , function(e){
//    var x = parseInt(noteList.style.left);
//    var y = parseInt(noteList.style.top);
//  })

//delete
function deleteNotes(e) {
  $(this).closest('.note').remove()
}

//draggable
function dragNotes(e) {
  var notes = []
  $('.container li').each(function(idx){
    if (!($(this).data('ui-draggable'))) {
      $(this).draggable()
    } else if ($(this).data("ui-draggable").options.disabled){
      $(this).draggable("enable")
    } else {
      $(this).draggable("disable")
    } 
  })
}

//publishAlert
  function publishThis() {
    alert("Your wall has been published!");
  }

function changeBg0(){
  document.getElementById("wallBod").classList.remove('wallBackground1');
  document.getElementById("wallBod").classList.remove('wallBackground2');
  document.getElementById("wallBod").classList.remove('wallBackground3');
  document.getElementById("wallBod").classList.remove('wallBackground4');
  document.getElementById("wallBod").classList.add('wallBackground0');
}
function changeBg1(){
  document.getElementById("wallBod").classList.remove('wallBackground0');
  document.getElementById("wallBod").classList.remove('wallBackground2');
  document.getElementById("wallBod").classList.remove('wallBackground3');
  document.getElementById("wallBod").classList.remove('wallBackground4');
  document.getElementById("wallBod").classList.add('wallBackground1');
}
function changeBg2(){
  document.getElementById("wallBod").classList.remove('wallBackground1');
  document.getElementById("wallBod").classList.remove('wallBackground0');
  document.getElementById("wallBod").classList.remove('wallBackground3');
  document.getElementById("wallBod").classList.remove('wallBackground4');
  document.getElementById("wallBod").classList.add('wallBackground2');
}
function changeBg3(){
  document.getElementById("wallBod").classList.remove('wallBackground1');
  document.getElementById("wallBod").classList.remove('wallBackground2');
  document.getElementById("wallBod").classList.remove('wallBackground0');
  document.getElementById("wallBod").classList.remove('wallBackground4');
  document.getElementById("wallBod").classList.add('wallBackground3');
}
function changeBg4(){
  document.getElementById("wallBod").classList.remove('wallBackground1');
  document.getElementById("wallBod").classList.remove('wallBackground2');
  document.getElementById("wallBod").classList.remove('wallBackground3');
  document.getElementById("wallBod").classList.remove('wallBackground0');
  document.getElementById("wallBod").classList.add('wallBackground4');
}


function changeToBlue(){
  document.getElementById("changeableNote").classList.remove('greenNote');
  document.getElementById("changeableNote").classList.remove('purpleNote');
  document.getElementById("changeableNote").classList.remove('pinkNote');
  document.getElementById("changeableNote").classList.remove('redNote');
  document.getElementById("changeableNote").classList.remove('orangeNote');
  document.getElementById("changeableNote").classList.remove('yellowNote');
  document.getElementById("changeableNote").classList.add('blueNote');
  colorClick();
}
function changeToPurple(){
  document.getElementById("changeableNote").classList.remove('greenNote');
  document.getElementById("changeableNote").classList.remove('blueNote');
  document.getElementById("changeableNote").classList.remove('pinkNote');
  document.getElementById("changeableNote").classList.remove('redNote');
  document.getElementById("changeableNote").classList.remove('orangeNote');
  document.getElementById("changeableNote").classList.remove('yellowNote');
  document.getElementById("changeableNote").classList.add('purpleNote');
  colorClick();
}
function changeToPink(){
  document.getElementById("changeableNote").classList.remove('greenNote');
  document.getElementById("changeableNote").classList.remove('blueNote');
  document.getElementById("changeableNote").classList.remove('purpleNote');
  document.getElementById("changeableNote").classList.remove('redNote');
  document.getElementById("changeableNote").classList.remove('orangeNote');
  document.getElementById("changeableNote").classList.remove('yellowNote');
  document.getElementById("changeableNote").classList.add('pinkNote');
  colorClick();
}
function changeToRed(){
  document.getElementById("changeableNote").classList.remove('greenNote');
  document.getElementById("changeableNote").classList.remove('blueNote');
  document.getElementById("changeableNote").classList.remove('pinkNote');
  document.getElementById("changeableNote").classList.remove('purpleNote');
  document.getElementById("changeableNote").classList.remove('orangeNote');
  document.getElementById("changeableNote").classList.remove('yellowNote');
  document.getElementById("changeableNote").classList.add('redNote');
  colorClick();
}
function changeToOrange(){
  document.getElementById("changeableNote").classList.remove('greenNote');
  document.getElementById("changeableNote").classList.remove('blueNote');
  document.getElementById("changeableNote").classList.remove('pinkNote');
  document.getElementById("changeableNote").classList.remove('redNote');
  document.getElementById("changeableNote").classList.remove('purpleNote');
  document.getElementById("changeableNote").classList.remove('yellowNote');
  document.getElementById("changeableNote").classList.add('orangeNote');
  colorClick();
}
function changeToYellow(){
  document.getElementById("changeableNote").classList.remove('greenNote');
  document.getElementById("changeableNote").classList.remove('blueNote');
  document.getElementById("changeableNote").classList.remove('pinkNote');
  document.getElementById("changeableNote").classList.remove('redNote');
  document.getElementById("changeableNote").classList.remove('orangeNote');
  document.getElementById("changeableNote").classList.remove('purpleNote');
  document.getElementById("changeableNote").classList.add('yellowNote');
  colorClick();
}
function changeToGreen(){
  document.getElementById("changeableNote").classList.remove('purpleNote');
  document.getElementById("changeableNote").classList.remove('blueNote');
  document.getElementById("changeableNote").classList.remove('pinkNote');
  document.getElementById("changeableNote").classList.remove('redNote');
  document.getElementById("changeableNote").classList.remove('orangeNote');
  document.getElementById("changeableNote").classList.remove('yellowNote');
  document.getElementById("changeableNote").classList.add('greenNote');
  colorClick();
}
