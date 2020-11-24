var slide= document.getElementById('slide-out');

function menubtn(){
if(slide.style.display === "inline-block"){
slide.style.display="none";
}else{
slide.style.display="inline-block";
search.style.display="none";
}
}

window.onload= function(){
    slide.style.display="none";
}

const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");
searchIcon.addEventListener('click', function () {
if (searchBox.style.top == '72px') {
searchBox.style.top = '24px';
searchBox.style.pointerEvents = 'none';
} else {
searchBox.style.top = '72px';
searchBox.style.pointerEvents = 'auto';
}
});
