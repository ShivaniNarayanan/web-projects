
var videoname="VAA" +".mp4";
var videosource = "images/"+videoname;
var video = document.querySelector("#video");
video.autoplay = true;
video.load();
video.onplaying = function(){
    document.body.style.overflow ='hidden';
}
video.onended=function(){
    document.body.style.overflow = '';
    document.getElementById("#next").onclick;}

document.querySelector("video").setAttribute("invisible");
    


