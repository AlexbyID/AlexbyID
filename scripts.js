

let home_bt = document.getElementById("home_act");
let nav_box = document.getElementById("page-nav-active");
let finddamnclass = document.querySelector("#page-nav-active");
let thisPageNav = document.getElementById("current_page");
let checkRotate = document.querySelector(".home");
let checkPagenavActiveMybad = document.querySelector(".mybad");
let checkHomeMainHref = document.querySelector(".btn-nav > a");
let changeSvgColorSelector = document.querySelector(".btn-nav");
let findSection = document.body.querySelector("section");
let changeHeightOurScreen = document.querySelector(".home-wrap");
let pomPomMainPage = document.querySelector(".main_bc")
let editWimageSection_2 = document.querySelector(".section_2-w-fix")
let leftSlideBtn = document.querySelector(".left-slide");
let rightSlideBtn = document.querySelector(".right-slide");
let progressSlider = document.querySelectorAll(".progress-slider");
let halfImgSlider = document.querySelectorAll(".half_img-holo");
let homeP = document.querySelector(".home-page");
let main01 = document.getElementById("main_page");

let inHm = document.querySelectorAll("#main_page > div");


let outOfClassEditImgSliderCurrent = document.querySelector(".slider-img");
// скорее всего будет не нужен, по айди,
// где у тебя будут идти адреса изображений.
// берешь айди и крутишь вертишь, ебешь
// че хочешь делай

let hideRoot = document.querySelector("html");

// есл получится прелоадер
let preloaderAnimate = document.querySelector(".preloader-w");


function appearNavBox() {

  nav_box.classList.toggle('active');

  if(finddamnclass.classList.contains("active")){
    nav_box.style.display = 'block';
    checkRotate.classList.add("active2");
    nav_box.classList.add("mybad");

    window.setTimeout(function () {
      nav_box.classList.remove("mybad");
    }, 100);
  }
  else{
    checkRotate.classList.remove("active2");
    nav_box.classList.add("mybad");
    window.setTimeout(function () {
      nav_box.style.display = 'none';
      nav_box.classList.remove("mybad")
    }, 100);
  }

}

home_bt.addEventListener("click", appearNavBox);
// по фиксить фиксики быстро блять


// не работает :AD:
// убрать, как поймешь как сделать прелоадер, STAREGE
// function animationMultitypeImg() {
//
//   let request;
//   request = requestAnimationFrame(performRequest);
//
//   var readImgAnimate = ["./img-preloader/preload_1.jpg","./img-preloader/preload_2.jpg",
//                         "./img-preloader/preload_3.jpg","./img-preloader/preload_4.jpg",
//                         "./img-preloader/preload_5.jpg","./img-preloader/preload_6.jpg"];
//   var objArrayImage = [];
//   for(let count = 0, countAdress = readImgAnimate.length; count<countAdress; count++){
//     objArrayImage[count] = new Image();
//     objArrayImage[count].src = readImgAnimate[count];
//   }
//
//   requestAnimationFrame(animationMultitypeImg);
//   cancelAnimationFrame(request);
// }
var wheelCounter = 0, bottomAnimateScroll, topAnimateScroll;

function checkHide(e) {
  var delta = e.deltaY;

  if(delta>0 && wheelCounter<4){
    wheelCounter++;
    bottomAnimateScroll = -screenHeight*wheelCounter;

    changeHeightOurScreen.style.transform = "translate3d(" + " 0px," + bottomAnimateScroll + "px," + " 0px)";
    changeHeightOurScreen.style.transition = "all 0.6s ease-in-out 0s";
    console.log(bottomAnimateScroll + " ", wheelCounter);
  }
  else if(delta<0 && wheelCounter!=0){
    wheelCounter--;
    topAnimateScroll = bottomAnimateScroll + screenHeight;
    bottomAnimateScroll = topAnimateScroll;

    changeHeightOurScreen.style.transform = "translate3d(" + " 0px," + topAnimateScroll + "px," + " 0px)";
    changeHeightOurScreen.style.transition = "all 0.6s ease-in-out 0s";
    console.log(topAnimateScroll + " ", wheelCounter);
  }

}

hideRoot.addEventListener("wheel", checkHide);

function onloadStylePutWheel() {
  if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
  } else {
      window.onbeforeunload = function () {
          window.scrollTo(0, 0);
      }
  }
}

window.addEventListener("beforeunload", onloadStylePutWheel);

function thisPageBtnNav() {
  var thisLoc = window.location.href;
  var homePageLoc = checkHomeMainHref.href;
  if(homePageLoc == thisLoc){
    changeSvgColorSelector.classList.add("ch-svg");
  }
}

home_bt.addEventListener("click", thisPageBtnNav);

var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
var remthisChange = screenWidth/screenHeight;

changeHeightOurScreen.style.height = screenHeight + "px";

function soWidthHeight() {
  if(remthisChange<1.4){
    main01.removeChild(pomPomMainPage);
    var dv = document.createElement("div");
    homeP.prepend(dv);
    dv.classList.add("ad-mb-wd-h");
    var trT =  document.getElementsByClassName("ad-mb-wd-h");
    for(var i = 0; i<trT.length; i++){
      for(var j = 0; j<inHm.length; j++){
        trT[i].appendChild(inHm[j]);
      }
    }
  }
}

window.addEventListener("load", soWidthHeight);


function leftRightAnimateMainImg() {
  pomPomMainPage.style.transform = "translate(-49%, 1%)";
}

window.addEventListener("load", leftRightAnimateMainImg);

function setWidth() {
  // editWimageSection_2.style.width = screenWidth/3 + "px";
  editWimageSection_2.style.width = screenWidth/3 + "px";
  // крч то че сверху, адаптируй как только идет не ноут, а
  // хуйня на телефоне, чтобы определялась по другой формул, уже
  // под телефоны без медийки и изи пизи

  // чел реально через js по лоаду адаптирует параметры xd
  // крч, слайд кнопки тоже изменять для телефонов. а иначе
  // пизда твоей версточке сыночек
}

window.addEventListener("load", setWidth);


function slideWidthHeightBtn() {
  if(remthisChange>1.4){
    leftSlideBtn.style.width = screenWidth/12 + "px";
    leftSlideBtn.style.height = screenHeight/6 + "px";

    rightSlideBtn.style.width = screenWidth/12 + "px";
    rightSlideBtn.style.height = screenHeight/6 + "px";
  }
  // для прелоадера, а точнее для рута,
  // раскрываю рут => дизейблю прелоад по лоаду и раскрываю че снизу
  // window.addEventListener("load", animationMultitypeImg);
}

window.addEventListener("load", slideWidthHeightBtn);

function slideWidthHeightBtnAdaptiveMobile() {
  if(remthisChange<1.4){
    leftSlideBtn.style.width = screenWidth/6 + "px";
    leftSlideBtn.style.height = screenHeight/12 + "px";

    rightSlideBtn.style.width = screenWidth/6 + "px";
    rightSlideBtn.style.height = screenHeight/12 + "px";
  }
}

window.addEventListener("load", slideWidthHeightBtnAdaptiveMobile);


function sliderImgWidthHeight() {
  if(remthisChange>1.4){
    outOfClassEditImgSliderCurrent.style.width = screenWidth/3 + "px";
    outOfClassEditImgSliderCurrent.style.height = screenHeight/1.5 + "px";
  }
// все че не ноут или монитор
// другая формула под телефоны
}

window.addEventListener("load", sliderImgWidthHeight);


function sliderImgWidthHeightAdaptiveMobile() {
  if(remthisChange<1.4){
    outOfClassEditImgSliderCurrent.style.width = screenWidth/1 + "px";
    outOfClassEditImgSliderCurrent.style.height = screenHeight/2 + "px";
    }
}

window.addEventListener("load", sliderImgWidthHeightAdaptiveMobile);


function progressSlider_w() {
  var inf_img_slider = parseInt(outOfClassEditImgSliderCurrent.style.width);
  for(var count = 0; count<progressSlider.length; count++){
    progressSlider[count].style.width = inf_img_slider/4 + "px";
  }
}

window.addEventListener("load", progressSlider_w);

function halfimgFix() {
  var inf_img_slider_half = parseInt(outOfClassEditImgSliderCurrent.style.width);
  for(var count = 0; count<halfImgSlider.length; count++){
    halfImgSlider[count].style.width = inf_img_slider_half/2 + "px";
  }
}

window.addEventListener("load", halfimgFix);


function slidersAnimate() {
  var rem_img = ["./waifus-slider/wf_1.png", "./waifus-slider/wf_2.png", "./waifus-slider/wf_3.png"]
  var obj_imj = [];
  for(var count = 0; count<rem_img.length; count++){
    obj_imj[count] = new Image();
    obj_imj[count].src = rem_img[count];
    if(count>0){
      obj_imj[count].style.position = "absolute";
      obj_imj[count].style.opacity = "0";
    }

    rightMove(count, obj_imj);

    // leftMove(count, obj_imj);

    outOfClassEditImgSliderCurrent.appendChild(obj_imj[count]);
    // console.log(obj_imj);
  }
  // sliderAnimateManyImg
}

window.addEventListener("load", slidersAnimate);


function rightMove(counter, imges) {
  // obj_imj[count].style.opacity = "absolute";
  // obj_imj[count].style.opacity = "0";
  // return obj_imj[++count];
  console.log(counter + "\n", imges);
}

// function rightMove(counter, imges) {
//   if(counter>0){
//     // imges.classList.add("shluchi");
//     imges[counter].style.opacity = "1";
//   }
// }

rightSlideBtn.addEventListener("click", rightMove);

// rightSlideBtn.addEventListener("click", rightMove);

// function leftMove(count, obj_imj) {
//
// }
//
// leftSlideBtn.addEventListener("click", leftMove);
