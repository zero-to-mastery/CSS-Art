let cards = [
    //  Add your card in this section
    //  Follow this example format:
    //  ["Art Name", "Page URL", "Image URL", "Your Name", "Your Github Link"],
    ["Shy Rabbit", "./Art/teits/index.html", "./Art/teits/preview.png", "Teits", "https://github.com/teitss"],
    ["Pikachu", "./Art/julesdowork/index.html", "./Art/julesdowork/pikachu.png", "Julesdowork", "https://github.com/Julesdowork"],
    ["CSS Ace", "./Art/TinatheAce/ace.html", "./Art/TinatheAce/ace.png", "Tina the Ace", "https://github.com/nnh242"],
    ["Frank", "./Art/AndrewDiedrich/index.html", "./Art/AndrewDiedrich/Frank.PNG", "Andrew Diedrich", "https://github.com/AndrewDiedrich"],
    ["CSS Dog", "./Art/Dog/index.html", "./Art/Dog/dog.gif", "Chintu Yadav Sara", "https://github.com/chintuyadav"],
    ["No Face", "./Art/saamiyah/no-face.html", "./Art/saamiyah/no-face.gif", "Saamiyah", "https://github.com/Saamiyah"],
    ["Mahatma Gandhi", "./Art/Mahatma%20Gandhi/index.html", "./Art/Mahatma%20Gandhi/Gandhi.png", "Chintu Yadav Sara", "https://github.com/chintuyadav"],
    ["WindMill Animation", "./Art/WindMill/index.html", "./Art/WindMill/windmill.gif", "Chintu Yadav Sara", "https://github.com/chintuyadav"],
    ["CSS Bird", "./Art/Bird/index.html", "./Art/Bird/Bird.png", "Chintu Yadav Sara", "https://github.com/chintuyadav"],
    ["Robot friend", "./Art/joy/robot.html", "./Art/joy/robot.png", "Joy", "https://github.com/royranger"],
    ["Spookiest fr̶iend", "./Art/pavel/spooky.html", "./Art/pavel/spooky.png", "Pavel", "https://github.com/pavelisp"],
    ["Hamburger", "./Art/Aszmel/Hamburger.html", "./Art/Aszmel/hamburger.png", "Aszmel", "https://github.com/Aszmel"],
    ["Polish Flag animation", "./Art/kris/kris.html", "./Art/kris/kris.png", "Kris", "https://github.com/krzysiekh"],
    ["Frog", "./Art/TheMicroGirl/frog.html", "./Art/TheMicroGirl/frog.PNG", "TheMicroGirl", "https://github.com/TheMicroGirl"],
    ["8-bit style Link", "./fischbot/index.html", "./Art/fischbot/link.png", "Fischbot", "https://github.com/fischbot"],
    ["Ghost Animation", "./Art/ghost/ghost.html", "./Art/ghost/ghost.png", "Jhonattan", "https://github.com/jhonattanbenitez"],
    ["Boo", "./Art/zach-caldwell/ghost.html", "./Art/zach-caldwell/ghost.PNG", "Zach", "https://github.com/zach-caldwell"],
    ["Pumpkin", "./Art/Asam/pumpkin.html", "./Art/Asam/pumpkin.png", "Asam", "https://github.com/shan5742"],
    ["Funky Pumpkin", "./Art/Matt/pumpkin.html", "./Art/Matt/icon.PNG", "Matt", "https://github.com/mattcsmith"],
    ["Spooky Androids!", "./Art/hmahajan/androids.html", "./Art/hmahajan/androids.JPG", "hmahajan", "https://github.com/hmahajan99"],
    ["TrailSnail", "./Art/trailsnail/spinner.html", "./Art/trailsnail/spinner.png", "Complex Spinner", "https://github.com/trailsnail"],
    ["Spooky Penguine", "./Art/Shruti/penguine.html", "./Art/Shruti/penguine.PNG", "Shruti", "https://github.com/shruti49"],
    ["Pac-Man Run", "./Art/PaulC/pacman_run.html", "./Art/PaulC/pac.png", "PaulC", "https://github.com/m2paulc"],
    ["Frankenstein", "./Art/josh/frankie.html", "./Art/josh/Capture.PNG", "Josh", "https://github.com/jcothard"],
    ["Koala Head", "./Art/Are/index.html", "./Art/Are/koala.png", "Are", "https://github.com/Ar3Tea"],
    ["CSS Loader", "./Art/Frozenfroggie/index.html", "./Art/Frozenfroggie/loader.gif", "Frozenfroggie", "https://github.com/frozenfroggie"],
    ["Macho Ghost", "./Art/Astro/index.html", "./Art/Astro/ghost.jpeg", "Amy", "https://github.com/astrokwk"],
    ["Pumpkin", "./Art/katcode/index.html", "./Art/katcode/pumpkin.png", "katcode", "https://github.com/katcode"],
    ["Javascript Coffee Cu", "./Art/JS Coffee Cup/js_coffee_cup.html", "./Art/JS Coffee Cup/js_coffee_cup.gif", "Bilal Younso", "https://github.com/bilalyounso"],
    ["CSS Clock", "./Art/Sean-Dees/sean.html", "./Art/Sean-Dees/clock.PNG", "Sean Dees", "https://github.com/sdees82"],
    ["Linux", "./Art/linux/index.html", "./Art/linux/linux.gif", "Thea", "https://github.com/highflyer910"],
    ["Devices", "./Art/virtual/index.html", "./Art/virtual/virtual.png", "Virtual", "https://github.com/virtual"],
    ["Owl", "./Art/owl/owl.html", "./Art/owl/owl.png", "Thea", "https://github.com/highflyer910"],
    ["Sunrise and Sunset", "./Art/sanjithpk/index.html", "./Art/sanjithpk/sun.png", "Sanjith", "https://github.com/sanjithpk"],
    ["Halloween Cat", "./Art/Martyav/halloween_cat.html", "./Art/Martyav/halloween_cat.png", "Martyav", "https://github.com/martyav"],
    ["Pumpkin", "./Art/pohyi-k/index.html", "./Art/pohyi-k/pumkin.png", "pohyi-k", "https://github.com/pohyi-k"],
    ["8bit-Pumpkin", "./Art/8bit-pumpkin/index.html", "./Art/8bit-pumpkin/8bit-Pumpkin.png", "MatthewS", "https://github.com/MatthewStoddart"],
    ["Catrina", "./Art/catrina/index.html", "./Art/catrina/catrina.png", "Tahi", "https://github.com/cTahirih"],
    ["Run to Win", "./Art/run to win/index.html", "./Art/run to win/my.png", "Sanidhya", "https://github.com/sanidhya2000"],
    ["Hallucinations", "./Art/kahwaii/kahwaii.html", "./Art/kahwaii/dizzy.PNG", "kahwaii", "https://github.com/kahwaii"],
    ["CSS Clock", "./Art/KwanwooJeong/index.html", "./Art/KwanwooJeong/css-clock.png", "Kwanwoo Jeong", "https://github.com/kwanwooi25"],
    ["Bear", "./Art/MAG/bear.html", "./Art/MAG/bear.png", "gettaplay", "https://github.com/gettaplay"],
    ["SPOOKY FAMILY", "./Art/Anca/index.html", "./Art/Anca/family.png", "Anca", "https://github.com/AncaWebDev"],
    ["Heart", "./Art/mamta/heart.html", "./Art/mamta/heart.png", "palmamta", "https://github.com/palmamta"],
    ["The Grim Reaper", "./Art/OhSnapdragon/reaper.html", "./Art/OhSnapdragon/reaper.PNG", "OhSnapdragon", "https://github.com/OhSnapdragon"],
    ["Flying Bird", "./Art/mamta/index2.html", "./Art/mamta/flying.png", "palmamta", "https://github.com/palmamta"],
    ["Creepy Selfie", "./Art/Creepy Selfie/index.html", "./Art/Creepy Selfie/CreepySelfie.png", "bronasek", "https://github.com/bronasek"],
    ["Redvan's Apple", "./Art/redvan/index.html", "./Art/redvan/redvansApple.jpg", "Redvanisation", "https://github.com/Redvanisation"],
    ["Heart", "./Art/Heart/index.html", "./Art/Heart/heart.gif", "SliceOLife", "https://github.com/SliceOLife"],
    ["Hamburger", "./Art/Nikhil/index.html", "./Art/Nikhil/hamburger.png", "Nikhil Shrivastava", "https://github.com/NikhilShrivastava"],
    ["Arc Reactor", "./Art/AhmedH14/index.html", "./Art/AhmedH14/ScreenShot.png", "Ahmed Hajat", "https://github.com/AhmedH14"],
    ["Pixel Charizard", "./Art/mctrl/index.html", "./Art/mctrl/charizard.jpg", "Martina", "https://github.com/mctrl"],
    ["Funky Monkey", "./Art/andra/index.html", "./Art/andra/andra.png", "Andra", "https://github.com/andrapetronela"],
    ["Kirby", ".Art/Kirby.index.html", "./Art/Kirby/Kirby.png", "Aldiekmann", "https://github.com/aldiekmann"],
    ["Cartoon Skull", "./Art/Jose-Rios/index.html", "./Art/Jose-Rios/skull_css.JPG", "Jose", "https://github.com/Riosjl41"],
    ["Butterfly", "./Art/R-Butterfly/index.html", "./Art/R-Butterfly/R-Butterfly.png", "Russell", "https://github.com/russellsoppe"],
    ["Robo - Dancer", "./Art/Florin/index.html", "./Art/Florin/robo-dancer.png", "Florin", "https://github.com/LoposFlorin"],
    ["Smiley", "./Art/adrianomi/index.html", "./Art/adrianomi/smiley.jpg", "adrianomi", "https://github.com/adrianomi"],
    ["Watermelon", "./Art/watermelon/index.html", "./Art/watermelon/watermelon-screenshot.PNG", "Dan Horsch", "https://github.com/danhorsch"],
    ["Beach", "./Art/sdfnz/beach.html", "./Art/sdfnz/beach.jpg", "sdfnz", "https://github.com/sdfnz"],
    ["Funny Avocado", "./Art/yokesharun/index.html", "./Art/yokesharun/avocado.png", "yokesharun", "https://github.com/yokesharun"],
    ["Gameboy", "./Art/mctrl/gameboy.html", "./Art/mctrl/gameboy.jpg", "Martina", "https://github.com/mctrl"],
    ["Frog", "./Art/Elin-frog/index.html", "./Art/Elin-frog/frog.png", "elindjuren", "https://github.com/elindjuren"],
    ["Fita Cassete", "./Art/Pliavi/index.html", "./Art/Pliavi/print.png", "Vitor \"Pliavi\" Silvério", "https://github.com/Pliavi"],
    ["Panda", "./Art/Madhuri/index.html", "./Art/Madhuri/Screenshot.png", "Madhuri Soni", "https://github.com/sonimadhuri"],
    ["Xmas", "./Art/Chrissy/xmas.html", "./Art/Chrissy/xmas.png", "Chrissy", "https://github.com/charlecoda88"],
    ["Spooky violin", "./Art/JaniH92/index.html", "./Art/JaniH92/spookyViolin.GIF", "Jani Hänninen", "https://github.com/jh1992jh"],
    ["Responsive Bars", "./Art/Rahul/index.html", "./Art/Rahul/index.png", "Rahul", "https://github.com/rik-96"],
    ["Boat", "./Art/Boat/index.html", "./Art/Boat/Boat.png", "Titi Arimba", "https://github.com/titiarimba"],
    ["Koala", "./Art/Chrissy/koala.html", "./Art/Chrissy/koalaedit.png", "Chrissy", "https://github.com/charlecoda88"],
    ["Landscape", "./Art/David/index.html", "./Art/David/landscape.png", "The24thDS", "https://github.com/the24thds"],
    ["Birthday Balloon", "./Art/Dazzla2020/index.html", "./Art/Dazzla2020/bithday-balloon.png", "Dazzla", "https://github.com/Dazzla2020"],
    ["Spinning Shuriken", "./Art/Mr.Zilox/index.html", "./Art/Mr.Zilox/ninga.png", "Mr.Zilox", "https://github.com/mitchellKalcher/"],
    ["Sunny apple", "./Art/DepSteph/my-art.html", "./Art/DepSteph/my-art.png", "DepSteph", "https://github.com/StephDs"],
    ["Airplane", "./Art/jen/plane.html", "./Art/jen/plane.png", "Jen", "https://github.com/jenwr"],
    ["Mouse", "./Art/jen/mouse.html", "./Art/jen/mouse.png", "Jen", "https://github.com/jenwr"],
    ["Hungry Caterpillar", "./Art/CarmenIancu/index.html", "./Art/CarmenIancu/hungry_caterpillar.JPG", "CarmenIancu", "https://github.com/CarmenIancu"],
    ["CSS Flower", "./Art/Kim/index.html", "./Art/Kim/Flower.png", "Kim", "https://github.com/QAMinn2468"],
    ["Mario Pipe", "./Art/iggyzane/index.html", "./Art/iggyzane/MarioPipe.PNG", "Iggy Baker", "https://github.com/iggyzane"],
    ["Pizza", "./Art/carter/pizza.html", "./Art/carter/pizza.png", "Carter", "https://github.com/carterschieffer"],
    ["Rocket", "./Art/cbh6/rocket.html", "./Art/cbh6/rocket.jpg", "Cristian", "https://github.com/cbh6"],
    ["Space Invader", "./Art/JFox/spaceInvader.html", "./Art/JFox/spaceInvader.png", "Jeremy Fox", "https://github.com/jeremyfox36"],
    ["Cactus in a Pot", "./Art/danIancuV/index.html", "./Art/danIancuV/CactusInAPot.jpg", "danIancuV", "https://github.com/danIancuV"],
    ["Beating Heart", "./Art/nikiya/index.html", "./Art/nikiya/heart-beat.png", "Nikiya Simpson", "https://github.com/nikiyasimpson"],
    ["Waving Penguin", "./Art/orinayo/index.html", "./Art/orinayo/penguin_art.png", "Orinayo Oyelade", "https://github.com/orinayo"],
    ["Taco Animation", "./Art/roninmittal/index.html", "./Art/roninmittal/taco.png", "Ronin Mittal", "https://github.com/roninmittal"],
    ["Ghost", "./Art/toserjude/ghost.html", "./Art/toserjude/ghost.jpg", "toserjude", "https://github.com/toserjude"],
    ["JS Logo", "./Art/Thulasi/index.html", "./Art/Thulasi/js-logo.png", "ThulasiA", "https://github.com/ThulasiA"],
    ["Black Cat", "./Art/toserjude/blackCat.html", "./Art/toserjude/cat.jpg", "toserjude", "https://github.com/toserjude"],
    ["Baymax", "./Art/dziukers/index.html", "./Art/dziukers/Baymax.JPG", "dziukers", "https://github.com/dziukers"],
    ["Smart Phone", "./Art/chathurasam/smartphone.html", "./Art/chathurasam/screenshot.png", "Chathura Samarajeewa", "https://github.com/ChathuraSam"],
    ["Pikachu", "./Art/Sherin/pikachu.html", "./Art/Sherin/pikachu.png", "Sherin Binu", "https://github.com/SherOnDale"],
    ["Fox", "./Art/Platy/index.html", "./Art/Platy/fox.png", "Atti", "https://github.com/Platyka"],
    ["Captain's Shield", "./Art/napvlm/shield.html", "./Art/Dog/shield.png", "Ruslan Anisimov", "https://github.com/napvlm" ]


];


// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+

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
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
