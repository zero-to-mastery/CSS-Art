# CSS ART - General Edition

[View CSS Art - General Edition Site](https://zero-to-mastery.github.io/CSS-Art/)

**UPDATE**

**This CSS Art repo has been split into two editions. The Hacktoberfest Edition was locked at the end of October to preserve its state at the end of Hacktoberfest. If you would like to continue its development, you can do so in this edition or you can check out the preserved state [HERE](https://github.com/zero-to-mastery/CSS-Art-Hacktoberfest-Edition/edit/master/README.md)**

Welcome to CSS Art, a fun, beginner-friendly challenge for Hacktoberfest!

What shapes, pictures and animations can you come up with, using plain HTML divs and CSS? Let's showcase the artistry of ZTM students, and get a free t-shirt into the bargain!
If you're not sure what this is or how to go about doing it, take a look at [this tutorial](https://codepen.io/mikemang/post/a-beginner-s-guide-to-pure-css-images), which will teach you all about how to make pure CSS images.

# What is Hacktoberfest?
Every October, Digital Ocean runs Hacktoberfest, a month-long celebration of open-source software! All you have to do to take part is sign up on [their website](https://hacktoberfest.digitalocean.com/)  - and make five pull requests in the month of October. Any pull request to any public repo on Github will count, which means, of course, that any PRs you make to this project will help you on your way to getting a cool t-shirt!

# Instructions
If you've never forked a repository or made a pull request before, we recommend making your first one over at https://github.com/zero-to-mastery/start-here-guidelines . That will count towards your total, and then you'll be ready to take on this challenge with your new GitHub skills!
=======
---
> ### **UPDATE:** Event Concluded!
  >
  > **This project started as a project for Hacktoberfest 2019, Thank you to everyone that participated and made this project what it is today and we look forward to seeing you all at Hacktoberfest 2020!.
  > Feel free to continue adding your designs to the master branch, you can check out the `Hactoberfest-Edition` branch to see the project as it was at the end of the event.**
  >
  > **Interested in more events? keep an eye on our Events page [HERE](https://zerotomastery.io/community/events)**
---

![](./colourpencils.png)

_Sharpen your pencils, we're getting creative!_

# Animation Nation

Hello and welcome to Animation Nation, a ZTM project for Hacktoberfest 2019! This site aims to showcase the creative talents of the ZTM community :)

# Rules

The rules are simple. You have to:

- Use HTML `<divs>` and CSS only! No JS, and no SVGs!
- Have at least one animation in your work
- Please make sure that the code is indeed your own, and not copied from someone else
- That's it!

**All discussions around this event can now be had in our #hacktoberfest-2019 channel on Discord!**

# How to contribute

If you've never forked a repository or made a pull request before, we recommend making your first one over at [https://github.com/zero-to-mastery/start-here-guidelines](https://github.com/zero-to-mastery/start-here-guidelines). That will count towards your total, and then you'll be ready to take on this challenge with your new GitHub skills!

A cool resource to learn about the fork workflow can also be found here - [https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)

Now, once you've forked this repo and got a local version up on your computer, follow these steps:

1. In the Art directory (folder), create a directory named after yourself.
2. Within this folder you just made, create two files, an HTML file and a CSS file.
3. Link your CSS file to your HTML file.
4. Using only HTML and CSS (no <script> allowed!!), create a work of art! It can be as simple or as complex as you like.
5. Take a screenshot of your finished work! Try to crop it so that it looks good as a smallish (preferably squarish) image. Save this in your directory, together with your HTML and CSS files.
6. Go to the root include.js. You will see a list of arrays, each one represents a work of art that someone has created. Copy the example array and paste it at the end. Here is an example:


```
  let cards = [
    //  Add your card in this section
    //  Follow this example format:
    //  ["Art Name", "Page URL", "Image URL", "Your Name", "Your Github Link"],
    
    ["CSS Dog", "./Art/Dog/index.html", "./Art/Dog/dog.gif", "Chintu Yadav Sara", "https://github.com/chintuyadav" ],
    ["Mahatma Gandhi", "./Art/Mahatma%20Gandhi/index.html", "./Art/Mahatma%20Gandhi/Gandhi.png", "Chintu Yadav Sara", "https://github.com/chintuyadav"],
    ["WindMill Animation", "./Art/WindMill/index.html", "./Art/WindMill/windmill.gif", "Chintu Yadav Sara", "https://github.com/chintuyadav"],
    ["Art Name", "Page URL", "Image URL", "Your Name", "Your Github Link"],
]

```
7. Now replace `Art Name`, `Page URL`, `Image URL`, `Your Name`, `Your Github Link` with your art information and links.
8. Save everything, and commit to your repo.
9. Make a pull request!

And congratulations! You're all done. Have fun!
2. Within this folder you just made, create two files, an HTML file, and a CSS file.
3. Link your CSS file to your HTML file.
4. Using only HTML and CSS (no `<script>` allowed!!), create a work of art! It can be as simple or as complex as you like, as long as it's animated in some way!
5. Get a screen recording of your finished work, **and make a gif**! Try to crop it so that it looks good as a smallish (preferably squarish) image. Save this in your directory, together with your HTML and CSS files. Static screenshots are also acceptable.  
   _If you don't add a gif/screenshot, the website won't show your animation._
6. Go to the root `include.js`. You will see an array of objects, each one represents a work of art that someone has created. Copy an example object and paste it at the end, filling it out with your art information and links:

```js
let cards = [
  //  Add your card in this section
  {
    pageLink: "./Art/Joy/triangle/triangle.html",
    imageLink: "./Art/Joy/triangle/triangle.gif",
    author: "Joy",
    githubLink: "https://github.com/royranger",
  },
]
```
