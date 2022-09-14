var photos = [
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_631930d56bfac.jpg?20220908091426",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_63195a58f4161.jpg?20220908120258",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_63195a5a7545e.jpg?20220908120258",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_63195a51351a7.jpg?20220908120258",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_6321899ec2d9f.jpg?20220914170028",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_6321890d24740.jpg?20220914165633",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_632187b6b268f.jpg?20220914165100",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_6321815810a98.jpg?20220914163804",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_6321809981358.jpg?20220914163434",
    "https://image.musinsa.com/mfile_s01/_shopstaff/view.staff_632178b976206.jpg?20220914161429"
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