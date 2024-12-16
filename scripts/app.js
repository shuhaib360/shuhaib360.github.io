/* Preloader */
window.addEventListener("load",function(){
    setTimeout(() =>{
	document.querySelector(".preloader").classList.add("opacity-0");
    },500)
})
/* TypeWriter */
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false,
    delay: 75,
    autoStart: true,
    cursor: '█',
    strings: ['Hi there \u{1F44B}...']
});
typewriter
	.typeString('Myself Shuhaib,<br/>')
    .pauseFor(300)
	.typeString(' - a self taught programmer and a wannabe System Developer \u{1F4BB} ...')
    .pauseFor(300)
    .deleteAll(1)
    .typeString('<b>~$./about \u{1F468}\u200D\u{1F680}<b/></br>')
    .pauseFor(300)
    .typeString("\u{1F4CC} I'm a flexible, self motivated and ambitious lad who is passionate about learning new technologies.<br/>")
    .pauseFor(300)
    .typeString('\u{1F4CC} I have a bachelor degree in Electronics and Communication Engineering.')
    .pauseFor(350)
    .deleteAll(1)
/**/ 
    .typeString('<b>~$./work \u{1F574}\uFE0F<b/><br/>')
    .pauseFor(300)
    .typeString("\u{1F4CC} I use Linux/Kubuntu as my main OS \u{1F427}.<br/>")
    .pauseFor(300)
    .typeString("\u{1F4CC} My go-to language is C.<br/>")
    .pauseFor(300)
    .typeString('\u{1F4CC} Iam also comfortable in C++, Bash and Python.<br/>')
    .pauseFor(300)
    .typeString('\u{1F4CC} For work, I use both vim and vscode.')
    .pauseFor(450)
    .deleteAll(1)
/**/ 
    .typeString('<b>~$./personal \u{1F939}\u200D\u2642\uFE0F<b/><br/>')
    .pauseFor(300)
    .typeString("\u{1F408} Cat Person<br/>")
    .pauseFor(300)
    .typeString('\u{1F938}\u200D\u2642\uFE0F Loves playing Football, cricket and badminton.<br/>')
    .pauseFor(300)
	.typeString("\u{1F90D} Liverpool fan #YWNA <br/>")
    .pauseFor(300)
    .typeString('\u{1F3AC} Sci-fi, Thriller and RomCom<br/>')
    .pauseFor(300)
	.typeString('\u{1F9D8} "To Live and Let Live."')
    .pauseFor(550)
    .deleteAll(1)
/**/ 
    .typeString('<b>~$./contact \u{1F4EC}<b/></br>')
    .pauseFor(300)
    .typeString('\u{1F4CC} <a href="http://github.com/shuhaib360">GitHub</a> <br />')
    .typeString('\u{1F4CC} <a href="https://www.linkedin.com/in/shuhaibummer">LinkedIn</a> <br />')
    .typeString('\u{1F4CC} <a href="https://www.instagram.com/shuhaibeee/">Instagram</a> <br />')
    .typeString('\u{1F4CC} <a href="mailto:shuhaib.uk20@gmail.com">Email</a> <br />')
//.typeString('<a href="/Resume.pdf" download>Resume</a> <br />')
    .typeString('"There are 10 kinds of people in the world - those who understands binary and those who don\'t"')
    .pauseFor(1000)