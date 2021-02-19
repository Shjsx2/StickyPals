$(document).ready(function () {
    addButton = $("#addButton");
    saveButton = $("#save")
    back = $("#back");
    text = $("#textBox");
    addButton.click(addNote);
    back.click(goPrevious);
    saveButton.click(onSaveClick)
  });

function addNote() {
  // todo: give random colors to new note
  var colors = ["#c4c4c4", "#f2f2f2", "#000000"]
  var c = colors[Math.floor(Math.random()*colors.length)]
  $("body ul").append("<li><a href='#' contenteditable='true'><h2>New Note</h2><p>type something...</p></a></li>");
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
