

$(document).ready(function () {
    addButton = $("#addButton");
    saveButton = $("#save")
    back = $("#back");
    text = $("#textBox");
    addButton.click(addNote);
    back.click(goPrevious);
    saveButton.click(onSaveClick)

    notes = JSON.parse(window.localStorage.getItem('notes'));
    notes.forEach(function(note) {
      addNote(null, note.title, note.text)
    })
    $('.note').on('focus', function(e){
      $(this).parent().attr('draggable', 'false')
    })

    $('.note').on('blur', function(e){
      $(this).parent().attr('draggable', 'true')
    })
  });

  
// $( function() {
//   $(".note").draggable({
//       cursor: "grabbing",
//       opacity: 0.5,
//       //grid:[300,300],
//       snap: true,
//       snapTolerance: 30
//   });
// } );

// function addNote() {s

//   // todo: give random colors to new note
//   var colors = ["#c4c4c4", "#f2f2f2", "#000000"]
//   var c = colors[Math.floor(Math.random()*colors.length)]
//   $("body ul").append("<li  class ="note" ><a href='#' contenteditable='true'><h2>New Note</h2><p>type something...</p></a></li>"");

// }
/*"<li class = 'note ui-draggable ui-draggable-handle' style='position: relative; opacity: 1; >> <a href='#' contenteditable='true'><h2>New Note</h2><p>type something...</p></a></li>"*/

function addNote(e, title='new note', text='type something....') {
  // todo: give random colors to new note
  console.log("loading "+title)
  var colors = ["#c4c4c4", "#f2f2f2", "#000000"]
  var c = colors[Math.floor(Math.random()*colors.length)]
  $("body ul").append('<li class="note"> <a href="#" contenteditable="true"><h2>'+title+'</h2><p>'+text+'</p></a></li>');
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
  var notes = []
  $('.container li a').each(function(idx){
    var title = $(this).find('h2').text()
    var text = $(this).find('p').text()
    notes.push({'title': title, 'text': text})
  })
  window.localStorage.setItem('notes', JSON.stringify(notes))
}

