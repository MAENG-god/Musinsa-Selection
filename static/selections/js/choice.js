var photos = [
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_631930d56bfac.jpg?20220908091426",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_63195a58f4161.jpg?20220908120258",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_63195a5a7545e.jpg?20220908120258",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_63195a51351a7.jpg?20220908120258"
]

$(function(){
    $("div.photobox").on("swipeleft", swipeleftHandler);

    function swipeleftHandler(event){
        document.querySelector(".bad").style.visibility = "visible";
        var photobox = document.querySelector(".photobox");
        photobox.animate({marginLeft: "-100vw"}, 400)
        setTimeout(function(){
            document.querySelector(".bad").style.visibility = "hidden";
            if(photos.length != 0){
                photobox.style.backgroundImage = "url(" + photos.pop() + ")"}
            else{
                location.href = "/selections/done"
            }
        }, 400);
    }
})

$(function(){
    $("div.photobox").on("swiperight", swiperightHandler);

    function swiperightHandler(event){
        document.querySelector(".good").style.visibility = "visible";
        var photobox = document.querySelector(".photobox");
        photobox.animate({marginLeft: "200vw"}, 400)
        setTimeout(function(){
            document.querySelector(".good").style.visibility = "hidden";
            if(photos.length != 0){
                photobox.style.backgroundImage = "url(" + photos.pop() + ")"}
            else{
                location.href = "/selections/done"
            }
        }, 400);
    }
})

$(function(){
    $(".bad_btn").on("click", swipeleftHandler);

    function swipeleftHandler(event){
        document.querySelector(".bad").style.visibility = "visible";
        var photobox = document.querySelector(".photobox");
        photobox.animate({marginLeft: "-100vw"}, 400)
        setTimeout(function(){
            document.querySelector(".bad").style.visibility = "hidden";
            if(photos.length != 0){
                photobox.style.backgroundImage = "url(" + photos.pop() + ")"}
            else{
                location.href = "/selections/done"
            }
        }, 400);
    }
})

$(function(){
    $(".good_btn").on("click", swiperightHandler);

    function swiperightHandler(event){
        document.querySelector(".good").style.visibility = "visible";
        var photobox = document.querySelector(".photobox");
        photobox.animate({marginLeft: "200vw"}, 400)
        setTimeout(function(){
            document.querySelector(".good").style.visibility = "hidden";
            if(photos.length != 0){
                photobox.style.backgroundImage = "url(" + photos.pop() + ")"}
            else{
                location.href = "/selections/done"
            }
        }, 400);
    }
})