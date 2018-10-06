let cards = [
    // Follow this format:
    //  ["Art Name", "PAGE URL", "Image URL", "Your Name", "Your Github Link"]
    
    ["CSS Dog", "./Art/Dog/index.html", "./Art/Dog/dog.gif", "Chintu Yadav Sara", "https://github.com/chintuyadav" ],
    ["Mahatma Gandhi", "./Art/Mahatma%20Gandhi/index.html", "./Art/Mahatma%20Gandhi/Gandhi.png", "Chintu Yadav Sara", "https://github.com/chintuyadav"],
    ["WindMill Animation", "./Art/WindMill/index.html", "./Art/WindMill/windmill.gif", "Chintu Yadav Sara", "https://github.com/chintuyadav"],
    ["CSS Bird", "./Art/Bird/index.html", "./Art/Bird/Bird.png", "Chintu Yadav Sara", "https://github.com/chintuyadav"],
    ["Robot friend", "./Art/joy/robot.html", "./Art/joy/robot.png", "Joy", "https://github.com/royranger"],
    ["Spookiest fr̶iend", "./Art/pavel/spooky.html", "./Art/pavel/spooky.png","Pavel", "https://github.com/pavelisp"],
    ["Hamburger", "./Art/Aszmel/Hamburger.html", "./Art/Aszmel/hamburger.png", "Aszmel", "https://github.com/Aszmel"],
    ["Polish Flag animation", "./Art/kris/kris.html", "./Art/kris/kris.png", "Kris", "https://github.com/krzysiekh"],
    ["Frog", "./Art/TheMicroGirl/frog.html", "./Art/TheMicroGirl/frog.PNG", "TheMicroGirl", "https://github.com/TheMicroGirl"],
    ["8-bit style Link","./fischbot/index.html",  "./fischbot/link.png", "Fischbot", "https://github.com/fischbot"],
    ["Ghost Animation","./Art/ghost/ghost.html",  "./Art/ghost/ghost.png", "Jhonattan", "https://github.com/jhonattanbenitez"],
    ["Boo","./Art/zach-caldwell/ghost.html",  "./Art/zach-caldwell/ghost.PNG", "Zach", "https://github.com/zach-caldwell"],
    ["Pumpkin", "./Art/Asam/pumpkin.html", "./Art/Asam/pumpkin.png", "Asam", "https://github.com/shan5742"],
    ["Funky Pumpkin", "./Art/Matt/pumpkin.html", "./Art/Matt/icon.PNG", "Matt", "https://github.com/mattcsmith"],
    ["Spooky Androids!", "./Art/hmahajan/androids.html", "./Art/hmahajan/androids.JPG", "hmahajan", "https://github.com/hmahajan99"],
    ["TrailSnail", "./Art/trailsnail/spinner.html", "./Art/trailsnail/spinner.png", "Complex Spinner", "https://github.com/trailsnail"],
    ["Spooky Penguine", "./Art/Shruti/penguine.html", "./Art/Shruti/penguine.PNG", "Shruti", "https://github.com/shruti49"],
    ["Pac-Man Run", "./Art/PaulC/pacman_run.html", "./pac.png", "PaulC", "https://github.com/m2paulc"],
    ["Frankenstein", "./Art/josh/frankie.html", "./Art/josh/storm.jpg", "Josh", "https://github.com/jcothard"],
    ["Koala Head", "./Art/Are/index.html", "./Art/Are/koala.png", "Are", "https://github.com/Ar3Tea"],
    ["CSS Loader", "./Art/Frozenfroggie/index.html", "./Art/Frozenfroggie/loader.gif", "Frozenfroggie", "https://github.com/frozenfroggie"],
    ["Macho Ghost", "./Art/Astro/index.html", "./Art/Astro/ghost.jpeg", "Amy", "https://github.com/astrokwk"]
]


// Creates cards from the array above
// You don't need to modify this
let contents = [];
Shuffle(cards).forEach(c => {
    contents.push([
        `<li class="card">` +
        `<img class="art-image" src='${c[2]}' alt='${c[0]}' />` +
        `<div class="flex-content">` +
        `<a href='${c[1]}'><h3 class="art-title">${c[0]}</h3></a>` +
        `<p class='author'><a href="${c[4]}" target="_blank"><i class="fab fa-github"></i> ${c[3]}</a> </p>` +
        `</div>` +
        `</li>`
    ])
 
    
});


document.getElementById("cards").innerHTML = contents;

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};