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
]


// Creates cards from the array above
// You don't need to modify this
let contents;
cards.forEach(c => {
    document.getElementById("cards").innerHTML =
    (contents ? contents : '') +
    `<li class="card">` +
    `<img class="art-image" src='${c[2]}' alt='${c[0]}' />` +
    `<div class="flex-content">` +
    `<a href='${c[1]}'><h3 class="art-title">${c[0]}</h3></a>` +
    `<p class='author'><a href="${c[4]}" target="_blank"><i class="fab fa-github"></i> ${c[3]}</a> </p>` +
    `</div>` +
    `</li>`
 
    contents = document.getElementById("cards").innerHTML;   
});