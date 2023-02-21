//let styles = ["style_1", "style_2", "style_3", "style_4", "style_5"]
//let bg_colors = ["#262626", "#ffffff"]
//
//let randomstyle = Math.floor(Math.random() * styles.length);


//document.querySelectorAll('li').forEach(function (listitem, index, array) {
//    listitem.classList.add(styles[randomstyle]);
//    randomstyle = Math.floor(Math.random() * styles.length);
//});
//document.querySelector('.chapter-headline').classList.add(styles[randomstyle]);


if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

window.onscroll = function () {
    window.scrollTo(0, 0);
};


let i = 0;

setInterval(function () {
    if (i < 14) {
        i++
    };

    if (i == 1) {
        document.querySelector('.consoleText').innerHTML = ">ACCESSING WEBSITEs:";
    } else if (i == 2) {
        document.querySelector('.consoleText').innerHTML += "<br> >nytimes.com";
    } else if (i == 3) {
        document.querySelector('.consoleText').innerHTML += "<br> >zeit.de";
    } else if (i == 4) {
        document.querySelector('.consoleText').innerHTML += "<br> >nzz.ch";
    } else if (i == 5) {
        document.querySelector('.consoleText').textContent = ">ACCESSIG HTML...";
    } else if (i == 6) {
        document.querySelector('.consoleText').textContent = ">LOADED";
        document.querySelector('#console').classList.toggle("background");

    } else if (i == 7) {
        document.querySelector('.consoleText').textContent = ">FETCHING STYLES";
        document.querySelector('h1.headline').style.color = "#e0e2e2";
        document.querySelector('h1.headline').style.textShadow = "#e0e2e2 -2px 5px 5px;";
        document.querySelector('h1.headline').style.opacity = "0.5";
        document.querySelector('#console').style.zIndex = "2";
        document.querySelector('body').style.background = "transparent";
    } else if (i == 8) {
        document.querySelector('.consoleText').textContent = ">LOADING TO .JSON";
        document.querySelector('#console').style.transition = "0.5s";
    } else if (i == 9) {
        document.querySelector('.consoleText').textContent = ">LOADED";
    } else if (i == 10) {
        document.querySelector('.consoleText').textContent = ">APPLYING";
    } else if (i == 11) {
        document.querySelector('.consoleText').textContent = ">APPLIED. FINISHING";

    } else if (i == 12) {
        document.querySelector('.consoleText').textContent = ">COPIED AND APPLIED";
        document.querySelector('.explainButton').style.opacity = "1";
        window.onscroll = function () {};
    }
}, 400);

document.querySelector('.explainButton').addEventListener('click', function () {

    document.querySelector('.explanationText').classList.toggle("visible");
    document.querySelector('.explanationFooter').classList.toggle("visible");
    document.querySelector('#console').classList.toggle("background");
    document.querySelector('#console').classList.toggle("foreground");
});



//Chapterlist Size Changing
window.addEventListener('scroll', function () {

    if (window.pageYOffset > 20) {
        document.querySelector("ul.chapterColumn").style.transform = "scale(0.5)";
    }

    //this line locks the Chapterlist into the grid
    if (window.pageYOffset > window.innerHeight - 20) {
        document.querySelector("ul.chapterColumn").style.position = "absolute";
        document.querySelector("ul.chapterColumn").style.left = "0";
        document.querySelector("ul.chapterColumn").style.top = "0";
        //        document.querySelector("ul.chapters").style.marginTop = "0";
    }
    //    else if (window.pageYOffset < 20) {
    //        document.querySelector("ul.chapters").style.transform = "scale(1)";
    //    }
});

window.addEventListener('scroll', function () {
    if (window.pageYOffset > (document.body.scrollHeight / 2.05)) {
        document.querySelector(".headerTitle.index").style.opacity = "1";
    };

    if (window.pageYOffset < 0 && document.querySelector("ul.chapterColumn").style.position == "absolute") {
        document.querySelector("#console").style.background = "#000";
        document.querySelector("h1.headline").style.opacity = "1";
        document.querySelector("h1.headline").style.color = "#fff";
    }

    if (window.pageYOffset > 50) {
        document.querySelector("#console").style.background = "#fff";
        document.querySelector("h1.headline").style.opacity = "0.5";
        document.querySelector('h1.headline').style.color = "#e0e2e2";

    }

});


//Hightlight Definition and Accordeon
document.querySelectorAll('.definitionWord').forEach(function (definitionWord) {
    definitionWord.addEventListener('mouseenter', function () {
        document.querySelectorAll('.definitionsListItem').forEach(function (definitionListItems) {
            if (definitionListItems.textContent == definitionWord.textContent) {
                definitionListItems.classList.toggle('highlighted');
                document.querySelector('.footnotesColumn').style.display = "none";
                document.querySelector('.definitionsColumn').style.display = "block";

                setTimeout(() => {
                    document.querySelector('.definitionsColumn').style.opacity = "1";
                }, 100)
            }
        });
    });

    definitionWord.addEventListener('mouseleave', function () {
        document.querySelectorAll('.definitionsListItem').forEach(function (definitionListItems) {
            if (definitionListItems.textContent == definitionWord.textContent) {
                definitionListItems.classList.toggle('highlighted');
                document.querySelector('.definitionsColumn').style.opacity = "0";
            }
        });
    });

    definitionWord.addEventListener('click', function () {
        document.querySelectorAll('.definitionsListItem').forEach(function (definitionListItems) {
            if (definitionListItems.textContent == definitionWord.textContent) {
                if (definitionListItems.nextElementSibling.style.maxHeight) {
                    definitionListItems.nextElementSibling.style.maxHeight = null;
                } else {
                    definitionListItems.nextElementSibling.style.maxHeight = definitionListItems.nextElementSibling.scrollHeight + "px";
                }
            }
        });
    });
});


//Alternative Accordeon Functionality
var acc = document.querySelectorAll(".definitionsListItem");
var j;


for (j = 0; j < acc.length; j++) {
    acc[j].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


//Chapter ScrollTo Functionality
document.querySelectorAll('.chapterItem').forEach(function (chapterItems) {
    chapterItems.addEventListener('click', function () {

        document.querySelectorAll('.chapterHeadline').forEach(function (chapterHeadlines) {
            console.log(chapterHeadlines.textContent);
            if (chapterItems.textContent == chapterHeadlines.textContent) {
                //                document.querySelector('.text').scrollTop = chapterHeadlines.offsetTop - 100 + "px";
                chapterHeadlines.scrollIntoView();
            }
        })
    })
})


//Lock and Unlock Scrolling on TextContainer
window.addEventListener('scroll', function () {
    if (document.querySelector('#gridcontainer').getBoundingClientRect().top < 30) {
        document.querySelector('.text').style.overflow = "scroll";

    } else {
        document.querySelector('.text').style.overflow = "hidden";

    }
})


let consolecounter = 0;

document.querySelector('.text').addEventListener('scroll', function () {
    //    console.log(document.querySelector(".chapterHeadline.legalities").getBoundingClientRect().top);

    if (document.querySelector(".chapterHeadline.legalities").getBoundingClientRect().top < 100 && consolecounter < 1) {

        document.querySelector("h1.headline").style.zIndex = "4";
        document.querySelector("h1.headline").style.opacity = "1";
        document.querySelector("h1.headline").style.color = "#000";
        consolecounter++;

        setTimeout(() => {
            document.querySelector("h1.headline").style.zIndex = "2";
            document.querySelector("h1.headline").style.opacity = "0.5";
            document.querySelector("h1.headline").style.color = "#e0e2e2";
        }, 2000)
    }
});


document.querySelector('#fnref34').addEventListener('mouseover', function () {
    document.querySelector('.definitionsColumn').style.display = "none";
    document.querySelector('.footnotesColumn').style.display = "block";
    setTimeout(() => {
        document.querySelector('.footnotesColumn').style.opacity = "1";
    }, 100)
});

document.querySelector('#fnref34').addEventListener('mouseleave', function () {
    document.querySelector('.footnotesColumn').style.opacity = "0";
});



document.querySelector('.footnotesColumn').addEventListener('mouseenter', function () {
    document.querySelector('.footnotesColumn').style.opacity = "1";
})
document.querySelector('.footnotesColumn').addEventListener('mouseleave', function () {
    document.querySelector('.footnotesColumn').style.opacity = "0";
})
document.querySelector('.definitionsColumn').addEventListener('mouseenter', function () {
    document.querySelector('.definitionsColumn').style.opacity = "1";
})
document.querySelector('.definitionsColumn').addEventListener('mouseleave', function () {
    document.querySelector('.definitionsColumn').style.opacity = "0";
})


window.addEventListener('scroll', function () {
    console.log(document.querySelector('#fnref1').getBoundingClientRect().top);
})

document.querySelector('.footnoteOne').style.position = "relative";
document.querySelector('.footnoteOne').style.marginTop = document.querySelector('#fnref1').getBoundingClientRect().top + "px";
