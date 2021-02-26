
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

    notes = JSON.parse(window.localStorage.getItem('notes'));
    if(!notes) return;
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
  $("body ul").append('<li class="note"><img class="deleteButton" src="../icons/L/delete.png" contenteditable="false"><a href="#" contenteditable="true"><h2>'+title+'</h2><p>'+text+'</p></a></li>');
  $(".deleteButton").click(deleteNotes)
  // $(".dragButton").click(dragNotes)
}

function onMoreClick() {
  $("#moreDropdown").toggle('show')
}

function goPrevious(){
  history.go(-1);
}

function onSaveClick() {
  // todo: give every note an unique id and save
  var notes = []
  $('.container li a').each(function(idx){
    var title = $(this).find('h2').text()
    var text = $(this).find('p').text()
    notes.push({'title': title, 'text': text})
  })
  window.localStorage.setItem('notes', JSON.stringify(notes))
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


