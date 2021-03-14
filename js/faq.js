//code referenced from free resource :  https://www.w3schools.com/howto/howto_js_accordion.asp
$(document).ready(function(){
            var quest = document.getElementsByClassName("question");
            var i;

            for (i = 0; i < quest.length; i++) {
                quest[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var ans = this.nextElementSibling;
                    if (ans.style.maxHeight) {
                        ans.style.maxHeight = null;
                    }
                    else {
                        ans.style.maxHeight = ans.scrollHeight + "px";
                    } 
                });
            }
})
