window.addEventListener("scroll", (e) => {
    var distanceScrolled = document.documentElement.scrollTop;
    if (window.scrollY > 80) {
        header.classList.add("header_scroll");
    } else {
        header.classList.remove("header_scroll");

    }
})


focus_title1.addEventListener("mouseover", () => {
    focus_title1.style.animation = "an_blur_it .8s forwards";
    focus_title2.style.animation = "blur_it .8s forwards";

})


focus_title2.addEventListener("mouseover", () => {
    focus_title2.style.animation = "an_blur_it 1s forwards";
    focus_title1.style.animation = "blur_it 1s forwards";
})

window.addEventListener("load", () => {
    focus_title1.style.animation = "an_blur_it 1.5s forwards";
    focus_title2.style.animation = "blur_it 1s forwards";
    setTimeout(() => {
        focus_title2.style.animation = "an_blur_it 1.5s forwards";
        focus_title1.style.animation = "blur_it 1s forwards";
    }, 500)
})


var div = document.getElementById("scrolling_text");

function scrollDown() {
    setInterval(() => {
        div.scrollTop += 100;
    }, 1500)


    div.addEventListener("scroll", function() {
        var max_scroll = this.scrollHeight - this.clientHeight;
        var current_scroll = this.scrollTop;
        var bottom = 100;
        if (current_scroll + bottom >= max_scroll) {
            var ul = document.getElementsByTagName("ul")[0];
            var current = parseInt(ul.dataset.current, 10);
            var li = document.getElementsByTagName("li")[current];
            var new_li = li.cloneNode(true);
            ul.appendChild(new_li);
            ul.dataset.current = current + 1;
        }
    });
}
scrollDown();



let arrow_btn =  document.querySelectorAll(".arrow");
arrow_btn.forEach(e =>{
        e.children[1].children[1].style.transition = '.4s'
    e.addEventListener("mouseover", ()=>{
        e.children[1].children[1].style.opacity = '1'
        e.children[1].children[0].style.animation = 'btn_animation_to .25s forwards'
    })
    e.addEventListener("mouseleave", ()=>{
        e.children[1].children[0].style.animation = 'btn_animation_back .25s forwards'

            // e.children[1].children[0].style.transform= "translateX(-3.5px)"
        e.children[1].children[1].style.opacity = '0'
        setTimeout(()=>{
        }, 100)
    })
})