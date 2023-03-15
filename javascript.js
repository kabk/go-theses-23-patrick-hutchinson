//MEDIA PIRACY, Thesis START

//DO LIST:
//—



let mobile = "";

//initally set the mobile variable
window.addEventListener("load", function () {
    if (window.innerWidth < 602) {
        mobile = true;
    } else {
        mobile = false;
    }

    if (mobile) {
        document.querySelector("#gridcontainer").style.height = `${(window.innerHeight / 100)*79}px`;
        document.querySelector(".text").style.height = `${(window.innerHeight / 100)*79}px`
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth < 602) {
        mobile = true;
    } else {
        mobile = false;
    }
});




//initally set the currentColors
let currentColor = "background";
let currentTextColor = "#DA212C";


//scroll to 0 0 on pagereload;
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

//lock the scrolling
window.onscroll = function () {
    window.scrollTo(0, 0);
};

//Temporary Console Text Functionality
let i = 0;

setInterval(function () {
    if (i < 14) {
        i++;
    }

    if (i == 1) {
        document.querySelector('.consoleText').innerHTML = "BOOTLEGGING <br>";
    } else if (i == 2) {
        document.querySelector('.consoleText').innerHTML += "RIPPING <br>";
    } else if (i == 3) {
        document.querySelector('.consoleText').innerHTML += "MODDING <br>";
    } else if (i == 4) {
        document.querySelector('.consoleText').innerHTML += "PHREAKING <br>";
    } else if (i == 5) {
        document.querySelector('.consoleText').innerHTML = "HACKING <br>";
    } else if (i == 6) {
        document.querySelector('.consoleText').innerHTML += "CRACKING <br>";
        document.querySelector('#console').classList.toggle("background");

    } else if (i == 7) {
        document.querySelector('.consoleText').innerHTML += "YANKEE THRIFTING <br>";
        document.querySelector('h1#headline').classList.toggle('background');
        document.querySelector('#console').style.zIndex = "2";
    } else if (i == 8) {
        document.querySelector('.consoleText').innerHTML += "MAKESHIFTING <br>";
        document.querySelector('#console').style.transition = "0.5s";
    } else if (i == 9) {
        document.querySelector('.consoleText').innerHTML = "COPYING?";
        document.querySelector('.explainButton').style.opacity = "1";

        //this unlocks the scrolling lock
        window.onscroll = function () {};

        //these setTimeouts take care of the opening animation
        setTimeout(() => {
            document.querySelector('.explainButton').style.transition = "none";
        }, 1000);
        document.querySelector("ul.chapterColumn.desktop").style.transform = "scale(0.55)";
        setTimeout(() => {
            document.querySelector("ul.chapterColumn.desktop").style.position = "absolute";
        }, 2000);
        if (mobile == true) {
            document.querySelector(".placeholder").style.height = "10vh";
        } else {
            document.querySelector(".placeholder").style.height = "0vh";
        }
        setTimeout(() => {
            document.querySelector(".headerTitle.index").style.opacity = 1;
        }, 2000);
        setTimeout(() => {
            document.querySelector(".openconsole").style.height = "3vh";
        }, 3000);
    }
}, 400);




document.querySelector('.explainButton').addEventListener('click', function () {
    if (!mobile) {
        document.querySelector('.explanationText').classList.toggle("visible");
    }
});




//Show Defintion Column on Hover
document.querySelector(".definitionsColumn").addEventListener('mouseenter', function () {
    if (!mobile) {
        document.querySelector(".definitionsColumn").style.opacity = "1";
    }
});
document.querySelector(".definitionsColumn").addEventListener('mouseleave', function () {
    if (!mobile) {
        document.querySelector(".definitionsColumn").style.opacity = "0";
    }
});





//All of the definition and accordeon functionality
document.querySelectorAll('.definitionWord').forEach(function (definitionWord) {
    definitionWord.addEventListener('mouseenter', function () {
        if (!mobile) { // add a check here
            document.querySelectorAll('.definitionsListItem').forEach(function (definitionListItems) {
                if (definitionListItems.textContent.substring(0, 3) == definitionWord.textContent.substring(0, 3)) {
                    definitionListItems.classList.toggle('highlighted');
                    document.querySelector('.footnotesColumn.desktop').style.display = "none";
                    document.querySelector('.definitionsColumn.desktop').style.display = "block";

                    setTimeout(() => {
                        document.querySelector('.definitionsColumn.desktop').style.opacity = "1";
                    }, 100)
                }
            });
        }
    });

    definitionWord.addEventListener('mouseleave', function () {
        if (!mobile) {
            document.querySelectorAll('.definitionsListItem').forEach(function (definitionListItems) {
                if (definitionListItems.textContent.substring(0, 3) == definitionWord.textContent.substring(0, 3)) {
                    definitionListItems.classList.toggle('highlighted');
                    document.querySelector('.definitionsColumn').style.opacity = "0";
                }
            });
        }
    });
});

//when clicking on a definitionTag, expand the corresponding definitionText
document.querySelectorAll('.definitionWord').forEach(function (definitionWord) {
    definitionWord.addEventListener('click', function () {
        document.querySelectorAll('.definitionsListItem').forEach(function (definitionListItems) {
            if (definitionListItems.textContent.substring(0, 3) == definitionWord.textContent.substring(0, 3)) {
                if (definitionListItems.nextElementSibling.style.maxHeight) {
                    definitionListItems.nextElementSibling.style.maxHeight = null;
                } else {
                    definitionListItems.nextElementSibling.style.maxHeight = definitionListItems.nextElementSibling.scrollHeight + "px";
                }
                definitionListItems.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        });
    });

    //in mobile, add a scrollback function to the definitioncontent
    document.querySelectorAll(".panel").forEach(function (definitionPanels) {
        definitionPanels.addEventListener("click", function () {
            if (mobile) {
                if (definitionPanels.previousElementSibling.textContent.substring(0, 3) == definitionWord.textContent.substring(0, 3)) {
                    definitionWord.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
            }
        })
    })
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




//Footnote Highlighting Functionality
document.querySelectorAll('.footnote-marker').forEach(function (footnoteMarker) {
    footnoteMarker.addEventListener("mouseenter", function () {
        if (!mobile) {
            document.querySelector('.definitionsColumn').style.display = "none";
            document.querySelector('.footnotesColumn').style.display = "block";
            document.querySelector('.footnotesColumn').style.opacity = "1";

            document.querySelectorAll('.footnoteItem').forEach(function (footnoteItem) {
                if (footnoteItem.classList.contains(`${footnoteMarker.classList[1]}`)) {
                    footnoteItem.classList.add("highlighted");
                    footnoteItem.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
            });
        }
    })
})
document.querySelectorAll('.footnote-marker').forEach(function (footnoteMarker) {
    footnoteMarker.addEventListener("mouseleave", function () {
        if (!mobile) {
            document.querySelector('.footnotesColumn').style.opacity = "0";
            document.querySelectorAll('.footnoteItem').forEach(function (footnoteItem) {
                if (footnoteItem.classList.contains(`${footnoteMarker.classList[1]}`)) {
                    footnoteItem.classList.remove("highlighted");
                }
            });
        }
    })
})

//    //Footnote Highlighting Functionality (Mobile)
document.querySelectorAll('.footnote-marker').forEach(function (footnoteMarker) {
    footnoteMarker.addEventListener("click", function () {
        document.querySelectorAll('.footnoteItem').forEach(function (footnoteItem) {
            if (footnoteItem.classList.contains(`${footnoteMarker.classList[1]}`)) {

                if (mobile) {
                    var footnoteItems = document.querySelectorAll(".footnoteItem");
                    for (var i = 0; i < footnoteItems.length; i++) {
                        footnoteItems[i].classList.remove("highlighted");
                    }

                    footnoteItem.classList.toggle("highlighted");
                }
                footnoteItem.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        });

    })
})
//
document.querySelectorAll('.footnoteItem').forEach(function (footnoteItem) {
    footnoteItem.addEventListener("click", function () {
        document.querySelectorAll('.footnote-marker').forEach(function (footnoteMarker) {
            if (footnoteMarker.classList.contains(`${footnoteItem.classList[1]}`)) {
                //                footnoteItem.classList.toggle("highlighted");
                footnoteMarker.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        });

        if (mobile) {
            var footnoteItems = document.querySelectorAll(".footnoteItem");
            for (var i = 0; i < footnoteItems.length; i++) {
                footnoteItems[i].classList.add("highlighted");
            }
        }
    })
})




//Chapter ScrollTo Functionality
document.querySelectorAll('.chapterItem').forEach(function (chapterItems) {
    chapterItems.addEventListener('click', function () {
        document.querySelectorAll('.chapterHeadline').forEach(function (chapterHeadlines) {
            if (chapterHeadlines.classList.contains(`${chapterItems.firstChild.classList[1]}`)) {
                chapterHeadlines.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        })
    })
})




//Change style when a new chapter is reached
let consolecounter = 0;
let chapterCounter = 0;


//Assign Themecolors to each chapter
document.querySelector('.text').addEventListener('scroll', function () {

    if (document.querySelector(".chapterHeadline.culturedigital").getBoundingClientRect().top > 120) {
        chapterCounter = 0;
    }
    if (document.querySelector(".chapterHeadline.culturedigital").getBoundingClientRect().top < 120) {
        chapterCounter = 0.5;
    }
    if (document.querySelector(".chapterHeadline.legalities").getBoundingClientRect().top < 120) {
        chapterCounter = 1;
    }
    if (document.querySelector(".chapterHeadline.hacking").getBoundingClientRect().top < 120) {
        chapterCounter = 2;
    }
    if (document.querySelector(".chapterHeadline.nonlaw").getBoundingClientRect().top < 120) {
        chapterCounter = 3;
    }
    if (document.querySelector(".chapterHeadline.labelling").getBoundingClientRect().top < 120) {
        chapterCounter = 4;
    }
    if (document.querySelector(".chapterHeadline.fisherprice").getBoundingClientRect().top < 120) {
        chapterCounter = 5;
    }
    if (document.querySelector(".chapterHeadline.reframing").getBoundingClientRect().top < 120) {
        chapterCounter = 6;
    }


    //CHAPTER "MOODTEXT"
    if (chapterCounter == 0) {
        currentColor = "background";
        currentTextColor = "#00000e";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelector("#console").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").className = "";
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#00000e');
        document.querySelector('.consoleText').textContent = ">APPLIED DEFAULT COLORING.";
    }

    //CHAPTER "CULTURE DIGITAL"
    if (chapterCounter == 0.5) {
        currentColor = "greyred";
        currentTextColor = "#DA212C";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelectorAll(".chapterTitle.culturedigital").forEach(function (chaptertitles) {
            chaptertitles.style.color = currentTextColor;
        });
        document.querySelector("#console").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").className = "";
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#DA212C');
        //        document.querySelector('#gridcontainer').style.opacity = 0;
        //        document.querySelector('#console').classList = "";
        //        document.querySelector('#console').classList.add("foreground");
        document.querySelector('.consoleText').textContent = ">APPLIED RED COLORING.";
    }

    //CHAPTER "LEGALITIES"
    if (chapterCounter == 1) {
        currentColor = "grey";
        currentTextColor = "#fffffa";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelectorAll(".chapterTitle.legalities").forEach(function (chaptertitles) {
            chaptertitles.style.color = currentTextColor;
        });
        document.querySelector("#console").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").className = "";
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#fffffa');
        //        document.querySelector(".chapterTitle.legalities").style.color = "var(--main-font-color) !important";
        document.querySelector('.consoleText').textContent = ">APPLIED GREY COLORING.";
    }


    //CHAPTER "ARTISTIC THOUGHTS IN PLAGIARISM AND REPRODUCTION"
    if (chapterCounter == 2) {
        currentColor = "red";
        currentTextColor = "#00000e";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelectorAll(".chapterTitle.hacking").forEach(function (chaptertitles) {
            chaptertitles.style.color = currentTextColor;
        });
        document.querySelector("#console").className = "";
        document.querySelector("h1#headline").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#00000e');
        document.querySelector('.consoleText').textContent = ">APPLIED RED COLORING.";
    }

    //CHAPTER INTERNET NON-LAW
    if (chapterCounter == 3) {
        currentColor = "grey";
        currentTextColor = "#fffffa";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelectorAll(".chapterTitle.nonlaw").forEach(function (chaptertitles) {
            chaptertitles.style.color = currentTextColor;
        });
        document.querySelector("#console").className = "";
        document.querySelector("h1#headline").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#fffffa');
        document.querySelector('.consoleText').textContent = ">APPLIED GREY COLORING.";
    }

    //BREAK: THOUGHTS ON LABELLING YOUR BELONGINGS
    if (chapterCounter == 4) {
        currentColor = "yellow";
        currentTextColor = "#f6fb40";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelectorAll(".chapterTitle.labelling").forEach(function (chaptertitles) {
            chaptertitles.style.color = currentTextColor;
        });
        document.querySelector("#console").className = "";
        document.querySelector("h1#headline").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#f6fb40');
        document.querySelector('.consoleText').textContent = ">APPLIED NEON COLORING.";
    }

    //CHAPTER HACKING, FIXING AND MAINTAINTING A 70's FISHER PRICE TOY
    if (chapterCounter == 5) {
        currentColor = "blue";
        currentTextColor = "#fff";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelectorAll(".chapterTitle.fisherprice").forEach(function (chaptertitles) {
            chaptertitles.style.color = currentTextColor;
        });
        document.querySelector("#console").className = "";
        document.querySelector("h1#headline").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#fff');
        document.querySelector('.consoleText').textContent = ">APPLIED <TWIITER> COLORING.";
    }

    //CHAPTER REFRAMING INTERNET COPYRIGHT
    if (chapterCounter == 6) {
        currentColor = "grey";
        currentTextColor = "#fff";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelectorAll(".chapterTitle.reframing").forEach(function (chaptertitles) {
            chaptertitles.style.color = currentTextColor;
        });
        document.querySelector("#console").className = "";
        document.querySelector("h1#headline").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#fff');
        document.querySelector('.consoleText').textContent = ">APPLIED GREY COLORING.";
    }
});




//Show FootnotesColumn When Hovered (Backup for CSS)
document.querySelector('.footnotesColumn').addEventListener('mouseenter', function () {
    if (!mobile) {
        document.querySelector('.footnotesColumn').style.opacity = "1";
    }
});
document.querySelector('.footnotesColumn').addEventListener('mouseleave', function () {
    if (!mobile) {
        document.querySelector('.footnotesColumn').style.opacity = "0";
    }
});




//When Top Tags are hovered, show respective columns
document.querySelector('.footnotesTag').addEventListener('mouseenter', function () {
    if (!mobile) {
        document.querySelector('.definitionsColumn').style.display = "none";
        document.querySelector('.footnotesColumn').style.display = "block";
        document.querySelector('.footnotesColumn').style.opacity = "1";
    }
});
document.querySelector('.footnotesTag').addEventListener('mouseleave', function () {
    if (!mobile) {
        document.querySelector(".footnotesColumn").style.opacity = "0";
    }
});

document.querySelector('.definitionsTag').addEventListener('mouseenter', function () {
    if (!mobile) {
        document.querySelector('.footnotesColumn').style.display = "none";
        document.querySelector('.definitionsColumn').style.display = "block";
        document.querySelector('.definitionsColumn').style.opacity = "1";
    }
});
document.querySelector('.definitionsTag').addEventListener('mouseleave', function () {
    if (!mobile) {
        document.querySelector(".definitionsColumn").style.opacity = "0";
    }
});




//on the mobile version, jump to section when pressing menu buttons
document.querySelector(".footerfootnotes").addEventListener("click", function () {
    console.log("clicked footerfootnotes!");
    document.querySelector(".subheadlineFootnotes").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})
document.querySelector(".footerdefinitions").addEventListener("click", function () {
    console.log("clicked footerfootnotes!");
    document.querySelector(".subheadlineDefinitions").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})




//scroll to footnotes, and color them accordingly 
document.querySelectorAll(".footnote-ref").forEach(function (inTextFootnoteRef) {
    inTextFootnoteRef.addEventListener("click", function () {
        console.log(inTextFootnoteRef.getAttribute("href").slice(1));

        document.querySelectorAll(".footnoteReference").forEach(function (fullReferenceItem) {
            if (fullReferenceItem.id == inTextFootnoteRef.getAttribute("href").slice(1)) {
                fullReferenceItem.style.color = "#fff";
                fullReferenceItem.style["-webkit-text-stroke"] = "#fff 1.02px";

                fullReferenceItem.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            } else {
                fullReferenceItem.style.color = "#bfbfbf";
                fullReferenceItem.style["-webkit-text-stroke"] = "#bfbfbf 1.02px";
            }
        });
    })
})

document.querySelectorAll(".footnoteReference").forEach(function (fullReferenceItem) {
    fullReferenceItem.addEventListener("click", function () {
        document.querySelectorAll(".footnote-ref").forEach(function (inTextFootnoteRef) {
            if (fullReferenceItem.id == inTextFootnoteRef.getAttribute("href").slice(1)) {
                inTextFootnoteRef.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        });

        var footnoteReferences = document.querySelectorAll(".footnoteReference");
        for (var i = 0; i < footnoteReferences.length; i++) {
            footnoteReferences[i].style.color = "#fff";
            footnoteReferences[i].style["-webkit-text-stroke"] = "#fff 1.02px";
        }
    })
});




//show console on 1uestionmark click
document.querySelector(".questionMark").addEventListener("click", function () {
    document.querySelector(".placeholder").style.transition = "background 2s, height 0.5s";
    document.querySelector(".placeholder").classList.toggle("extended");
})
