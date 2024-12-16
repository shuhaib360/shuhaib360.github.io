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


/* Particle JSON */
particlesJS('bg-animation',

    {
	"particles": {
	    "number": {
		"value": 80,
		"density": {
		    "enable": true,
		    "value_area": 800
		}
	    },
	    "color": {
		"value": "#ffffff"
	    },
	    "shape": {
		"type": "circle",
		"stroke": {
		    "width": 0,
		    "color": "#000000"
		},
		"polygon": {
		    "nb_sides": 5
		},
		"image": {
		    "src": "img/github.svg",
		    "width": 100,
		    "height": 100
		}
	    },
	    "opacity": {
		"value": 0.5,
		"random": false,
		"anim": {
		    "enable": false,
		    "speed": 1,
		    "opacity_min": 0.1,
		    "sync": false
		}
	    },
	    "size": {
		"value": 5,
		"random": true,
		"anim": {
		    "enable": false,
		    "speed": 40,
		    "size_min": 0.1,
		    "sync": true
		}
	    },
	    "line_linked": {
		"enable": true,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	    },
	    "move": {
		"enable": true,
		"speed": 6,
		"direction": "none",
		"random": false,
		"straight": false,
		"out_mode": "out",
		"attract": {
		    "enable": false,
		    "rotateX": 600,
		    "rotateY": 1200
		}
	    }
	},
	"interactivity": {
	    "detect_on": "canvas",
	    "events": {
		"onhover": {
		    "enable": false,
		    "mode": "repulse"
		},
		"onclick": {
		    "enable": false,
		    "mode": "push"
		},
		"resize": true
	    },
	    "modes": {
		"grab": {
		    "distance": 400,
		    "line_linked": {
			"opacity": 1
		    }
		},
		"bubble": {
		    "distance": 400,
		    "size": 40,
		    "duration": 2,
		    "opacity": 8,
		    "speed": 3
		},
		"repulse": {
		    "distance": 200
		},
		"push": {
		    "particles_nb": 4
		},
		"remove": {
		    "particles_nb": 2
		}
	    }
	},
	"retina_detect": true,
	"config_demo": {
	    "hide_card": false,
	    "background_color": "#b61924",
	    "background_image": "",
	    "background_position": "50% 50%",
	    "background_repeat": "no-repeat",
	    "background_size": "cover"
	}
    }

);
