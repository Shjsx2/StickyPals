$(document).ready(function(){
    const gallery = JSON.parse(window.localStorage.getItem('gallery'));
    console.log(gallery)
    for(var item in gallery){
        $('body').append("<div class='project'><a href='#'><h3>"+item+"</h3></a></div>")
    }
    $(".project").click(onGalleryClick)
})

function onGalleryClick() {
    window.localStorage.setItem('currentWall', $(this).text());
    location.href='/createWalls'
}