/* Preloader */
window.addEventListener("load",function(){
    setTimeout(() =>{
	document.querySelector(".preloader").classList.add("opacity-0");
    },500)
})
/* Vanilla JS TypeWriter */
const app = document.getElementById('app');

const commands = [
    { type: 'type', text: 'Hi there \u{1F44B}...' },
    { type: 'pause', time: 500 },
    { type: 'type', text: '<br/>Myself Shuhaib,<br/>' },
    { type: 'pause', time: 300 },
    { type: 'type', text: ' - a self taught programmer and a wannabe System Developer \u{1F4BB} ...' },
    { type: 'pause', time: 300 },
    { type: 'delete' },
    { type: 'type', text: '<b>~$./about \u{1F468}\u200D\u{1F680}</b><br/>' },
    { type: 'pause', time: 300 },
    { type: 'type', text: "\u{1F4CC} I'm a flexible, self motivated and ambitious lad who is passionate about learning new technologies.<br/>" },
    { type: 'pause', time: 300 },
    { type: 'type', text: '\u{1F4CC} I have a bachelor degree in Electronics and Communication Engineering.' },
    { type: 'pause', time: 350 },
    { type: 'delete' },
    { type: 'type', text: '<b>~$./work \u{1F574}\uFE0F</b><br/>' },
    { type: 'pause', time: 300 },
    { type: 'type', text: "\u{1F4CC} I use Linux/Kubuntu as my main OS \u{1F427}.<br/>" },
    { type: 'pause', time: 300 },
    { type: 'type', text: "\u{1F4CC} My go-to language is C.<br/>" },
    { type: 'pause', time: 300 },
    { type: 'type', text: '\u{1F4CC} Iam also comfortable in C++, Bash and Python.<br/>' },
    { type: 'pause', time: 300 },
    { type: 'type', text: '\u{1F4CC} For work, I use both vim and vscode.' },
    { type: 'pause', time: 450 },
    { type: 'delete' },
    { type: 'type', text: '<b>~$./personal \u{1F939}\u200D\u2642\uFE0F</b><br/>' },
    { type: 'pause', time: 300 },
    { type: 'type', text: "\u{1F408} Cat Person<br/>" },
    { type: 'pause', time: 300 },
    { type: 'type', text: '\u{1F938}\u200D\u2642\uFE0F Loves playing Football, cricket and badminton.<br/>' },
    { type: 'pause', time: 300 },
    { type: 'type', text: "\u{1F90D} Liverpool fan #YWNA <br/>" },
    { type: 'pause', time: 300 },
    { type: 'type', text: '\u{1F3AC} Sci-fi, Thriller and RomCom<br/>' },
    { type: 'pause', time: 300 },
    { type: 'type', text: '\u{1F9D8} "To Live and Let Live."' },
    { type: 'pause', time: 550 },
    { type: 'delete' },
    { type: 'type', text: '<b>~$./contact \u{1F4EC}</b><br/>' },
    { type: 'pause', time: 300 },
    { type: 'type', text: '\u{1F4CC} <a href="http://github.com/shuhaib360">GitHub</a> <br />' },
    { type: 'type', text: '\u{1F4CC} <a href="https://www.linkedin.com/in/shuhaibummer">LinkedIn</a> <br />' },
    { type: 'type', text: '\u{1F4CC} <a href="https://www.instagram.com/shuhaibeee/">Instagram</a> <br />' },
    { type: 'type', text: '\u{1F4CC} <a href="mailto:shuhaib.uk20@gmail.com">Email</a> <br />' },
    { type: 'type', text: '"There are 10 kinds of people in the world - those who understands binary and those who don\'t"' },
    { type: 'pause', time: 1000 }
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runTypewriter() {
    let currentHtml = '';
    
    // Initial pause before typing starts
    await sleep(1000);

    for (const cmd of commands) {
        if (cmd.type === 'type') {
            let i = 0;
            while (i < cmd.text.length) {
                // Instantly append HTML tags
                if (cmd.text[i] === '<') {
                    let endTag = cmd.text.indexOf('>', i);
                    if (endTag === -1) endTag = cmd.text.length - 1;
                    currentHtml += cmd.text.substring(i, endTag + 1);
                    i = endTag + 1;
                } else {
                    currentHtml += cmd.text[i];
                    i++;
                    await sleep(75); // Typing delay
                }
                app.innerHTML = currentHtml + '<span class="cursor">█</span>';
            }
        } else if (cmd.type === 'pause') {
            await sleep(cmd.time);
        } else if (cmd.type === 'delete') {
            currentHtml = '';
            app.innerHTML = '<span class="cursor">█</span>';
        }
    }
}

// Start the animation
runTypewriter();