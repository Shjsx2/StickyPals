$(document).ready(function(){
    const gallery = JSON.parse(window.localStorage.getItem('gallery'));
    console.log(gallery)
    for(var item in gallery){
        $('.flexContainer').append("<div class='project'><div style='position:relative'><img class = 'trashIt' src='../icons/L/trash.png'><a href='#'><h3>"+item+"</h3></a></div></div>")
    }
    $(".project a").click(onGalleryClick)
    $(".trashIt").click(deleteIt)
})

function onGalleryClick() {
    window.localStorage.setItem('currentWall', $(this).text());
    location.href='/createWalls'
}

function deleteIt() {
    // window.localStorage.setItem('selectedItem', $(this).parent());
    // console.log($(this).closest(currentWall));
    // var selectedItem = $(this).parent();
    // console.log($(this).parent());
    var currentData = JSON.parse(localStorage.getItem('gallery'));
    var wall = $(this).parents('.project').find('a h3').text()
    delete currentData[wall]
    localStorage.setItem('gallery', JSON.stringify(currentData))
    window.location.href = '/viewGallery'
    // window.localStorage.removeItem('thisData');
}