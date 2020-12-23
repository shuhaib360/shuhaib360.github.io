/* Preloader */
window.addEventListener("load",function(){
  setTimeout(() =>{
    document.querySelector(".preloader").classList.add("opacity-0");
  },1000)
})

/* TypeWriter */
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }
  
    setTimeout(function() {
    that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };


/* Skin */
const links = document.querySelectorAll('.alt-style');
function setActiveStyle(color){
    for(let i=0;i<links.length;i++){
        if (color === links[i].getAttribute('title')){
            links[i].removeAttribute("disabled");
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
}
/* Mode */
const bodySkin = document.querySelectorAll(".mode-skin");
    for(let i =0;i<bodySkin.length;i++){
        bodySkin[i].addEventListener("change",function(){
            if (this.value === "dark"){
                document.body.className ="dark";
            }
            else{
                document.body.className ="";
            }
        })
    }
document.querySelector(".toggle-style-switch").addEventListener("click",()=>{
    document.querySelector(".style-switch").classList.toggle("open");
})