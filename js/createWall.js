$(document).ready(function () {
    addButton = $("#addButton");
    saveButton = $("#save");
    previous = $("#previous");
    text = $("#textBox");
    dragNote = $("#drag");
    addButton.click(addNote);
    previous.click(goPrevious);
    saveButton.click(onSaveClick);
    dragNote.click(dragNotes);
    $('.deleteButton').click(deleteNotes)
    //DnD
    var noteList = $('#noteList');
    noteList.on('touchmove', function(e){
        console.log("hi")
    })

    $("#leaveAlert").hide();
    $("#publishAlert").hide()
    $("#saveAlert").hide()
    $(".card").hide()

    if(window.location.href.includes('viewNote')) return;

    wallTitle = window.localStorage.getItem("currentWall")
    $('.headerWrap a').text(wallTitle==="null" ? "UNNAMED" : wallTitle)

    if(!wallTitle) return;
    gallery = JSON.parse(window.localStorage.getItem('gallery'));
    key = window.localStorage.getItem('currentWall')
    if(key === "null") return;
    notes = gallery[key];
    if(!notes || Object.keys(notes).length === 0) return;
    notes.forEach(function(note) {
      addNote(null, note.color, note.title, note.text)
    })
})

function addNote(e,color,  title='Title', text='start...') {
  // todo: give random colors to new note
  console.log("loading "+title)
  // $("body ul").append('<li class="note"><img class = "colorbutton" src="../icons/colorpallette.png" onclick = "showColors()"><img class="deleteButton" src="../icons/L/delete.png" contenteditable="false"><a contenteditable="true"><h3 class = "headerContainer">'+title+'</h3><p class = "textContainer">'+text+'</p></a></li>');
  var id = "note"+ ($("body ul li").length+1).toString()
  $("body ul").append('<li class = "note" id='+id+' ><img class = "colorbutton" src="../icons/colorpallette.png"><img class="deleteButton" src="../icons/L/delete.png" contenteditable="false"><a contenteditable="true"><p class = "headerContainer">'+title+'</p><p class = "textContainer" >'+text+'</p></a></li> ')
  $('#'+id+' .colorbutton').click({id : id}, onDropdownClick)
  $(".deleteButton").click(deleteNotes)
  $('#'+id+' a').css('background', color)
  // $(".dragButton").click(dragNotes)
}


function onMoreClick() {
  $("#moreDropdown").toggle('show')
}

function goPrevious() {
  window.location.href = '/index'
}

function onBack() {
  onSaveClick();
  setTimeout(function(){history.go(-1)}, 2300)
}

function onSaveClick() {
  // todo: give every note an unique id and save
  var notes = []
  var wallTitle = $(".headerWrap a").text();
  window.localStorage.setItem('currentWall', wallTitle)
  $('.container .note').each(function(idx){
    var title = $(this).find('.headerContainer').text()
    var text = $(this).find('.textContainer').text()
    var color = $(this).find('a').css('background')
    notes.push({'title': title, 'text': text, 'color':color})
  })
  var current = JSON.parse(window.localStorage.getItem("gallery"))    
  if(!current) current = {};
  console.log(notes)

  if(notes.length === 0)
    current[wallTitle] = {}
  else
    current[wallTitle] = notes

  console.log(current)
  window.localStorage.setItem('gallery', JSON.stringify(current))

  var url = window.location.href
  if(url.includes('createWall')){
    saveToDB(notes)
  } else {
    var id = window.location.href.split('/')[4]
    updateNote(id, notes)
  }
  console.log(window.location.href.split('/'))
  // saveToDB(notes)
  

  $("#leaveAlert").fadeIn()
  setTimeout(function(){$("#leaveAlert").fadeOut()}, 2000)
  // alert("Notes saved to local storage")
}

function updateNote(id, notes){
  console.log("Updating to ", notes)
  $.ajax({
    url: "/updateNote",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({"id":id, "note": notes})
  })
}

function saveToDB(notes){
  $.ajax({
    url: "/addNote",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({"note":notes}),
    success: function(res){
      window.location.href = '/viewNote/'+res
    }
  })
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

// publishAlert
  function publishThis() {
    $("#publishAlert").fadeIn()
    setTimeout(function(){$("#publishAlert").fadeOut()}, 2000)
    // alert("Your wall has been published!");
  }

function changeBg(background){
  var bg_list = ['wallBackground0', 'wallBackground1', 'wallBackground2', 'wallBackground3', 'wallBackground4'];
  bg_list.forEach(element => {
    if (element == background){
      document.getElementById("wallBod").classList.add(background);
    }
    else{
      document.getElementById("wallBod").classList.remove(element);
    }
  })
}

function changeBg0(){
  changeBg('wallBackground0');
}
function changeBg1(){
  changeBg('wallBackground1');
}
function changeBg2(){
  changeBg('wallBackground2');
}
function changeBg3(){
  changeBg('wallBackground3');
}
function changeBg4(){
  changeBg('wallBackground4');
}

function onDropdownClick (event){
  var notePos = $(this).parents('li').children('a').position()
  console.log($(this).parents('li').children('a').position())
  $("#colorDropdown").css('top', notePos.top+50)
  $("#colorDropdown").css('left', notePos.left+190)
  $("#colorDropdown").toggle('show')
  var id = event.data.id
  window.localStorage.setItem('selectedNote', id)
}

function changeColor(element){
  var c = element.text
  var bgPath = "../assets/stickynotes/sticky_"+c+".png"
  var id = window.localStorage.getItem('selectedNote')
  $('#'+id+' a').css("background", "url("+bgPath+") no-repeat")
  $('#colorDropdown').toggle('show')
}

function deleteWall() {
  var currentData = JSON.parse(localStorage.getItem('gallery'));
  var wall = $('.headerWrap a').text()
  delete currentData[wall]
  localStorage.setItem('gallery', JSON.stringify(currentData))
  window.location.href = '/index'
}

$(document).tooltip({show: null});

