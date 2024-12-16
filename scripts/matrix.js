const canvas = document.getElementById('bg-animation');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function shuffleString(str)
{
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

const englishLetters = shuffleString('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
const malayalamLetters = shuffleString('അഇഉഋഎഒകഖഗഘങചജടഠഡതഥദധനപഫബഭമയരലവശഷസഹളഴ');
const hindiLetters = shuffleString('अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञड़ढ़फ़य़लृळऴ');
const greekLetters = shuffleString('ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω');
const cyrillicLetters = shuffleString('АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя');
const japaneseLetters = shuffleString('あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ');
const chineseLetters = shuffleString('一二三四五六七八九十零个上下左右前后内外大小高低长短好坏远近新旧多少少多');
const letters = englishLetters + malayalamLetters + hindiLetters + greekLetters + cyrillicLetters + japaneseLetters + chineseLetters;

const fontSize = 16;

const columns = canvas.width / fontSize;
const drops = Array.from({length: columns}).fill(1);

function draw()
{
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) 
    {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, (i * fontSize), drops[i] * fontSize);
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975)
        {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 13);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})