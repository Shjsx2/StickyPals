$(document).ready(function () {
    all_notes = $("li a");
    addButton = $("#addButton");
    back = $("#back");
    text =$("#textBox");
    addButton.click(addNote);
    back.click(goPrevious);
  });


function addNote() {
  $("body ul").append("<li><a href='#' contenteditable='true'><h2>New Note</h2><p>type something...</p></a></li>")
}

function goPrevious(){
  history.go(-1);
}
