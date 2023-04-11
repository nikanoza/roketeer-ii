submitButton = document.querySelector(".submitButton");
submitButton.addEventListener("click", function(){
    document.querySelector(".main").classList.add('hidde');
    document.querySelector(".thanks").classList.remove('hidde');
    setTimeout(function() {
        window.location.href = '../../index.html'
    }, 3000);
})