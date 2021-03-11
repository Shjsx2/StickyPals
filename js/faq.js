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