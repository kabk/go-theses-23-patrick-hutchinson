let mobile = "";



//initally set the mobile variable
window.addEventListener("load", function () {
    if (window.innerWidth < 602) {
        mobile = true;
    } else {
        mobile = false;
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth < 602) {
        mobile = true;
    } else {
        mobile = false;
    }
});

//window.addEventListener("click", function () {
//    if (window.innerWidth < 602) {
//        mobile = true;
//    } else {
//        mobile = false;
//    }
//})




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
        document.querySelector('.consoleText').innerHTML = " >ACCESSING WEBSITEs:";
    } else if (i == 2) {
        document.querySelector('.consoleText').innerHTML += "<br> >nytimes.com";
    } else if (i == 3) {
        document.querySelector('.consoleText').innerHTML += "<br> >zeit.de";
    } else if (i == 4) {
        document.querySelector('.consoleText').innerHTML += "<br> >nzz.ch";
    } else if (i == 5) {
        document.querySelector('.consoleText').textContent = ">ACCESSIG HTML... ";
    } else if (i == 6) {
        document.querySelector('.consoleText').textContent = ">LOADED <br>";
        document.querySelector('#console').classList.toggle("background");

    } else if (i == 7) {
        document.querySelector('.consoleText').textContent = ">FETCHING STYLES ";
        document.querySelector('h1#headline').classList.toggle('background');
        document.querySelector('#console').style.zIndex = "2";
    } else if (i == 8) {
        document.querySelector('.consoleText').textContent = ">LOADING TO .JSON ";
        document.querySelector('#console').style.transition = "0.5s";
    } else if (i == 9) {
        document.querySelector('.consoleText').textContent = ">LOADED ";
    } else if (i == 10) {
        document.querySelector('.consoleText').textContent = ">APPLYING";
    } else if (i == 11) {
        document.querySelector('.consoleText').textContent = ">APPLIED. FINISHING";
    } else if (i == 12) {
        document.querySelector('.consoleText').textContent = ">COPIED AND APPLIED";
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
}, 40);



//    document.querySelector('.explainButton').addEventListener('click', function () {
//
//        document.querySelector('.explanationText').classList.toggle("visible");
//        document.querySelector('.explanationFooter').classList.toggle("visible");
//        document.querySelector('#console').className = "";
//        document.querySelector('#console').classList.toggle("foreground");
//        document.querySelector('h1#headline').className = "";
//        document.querySelector('h1#headline').classList.toggle("foreground");
//    });



//Show Defintion Column on Hover
//>>> it could be that an if(!mobile) needs to be added after the eventlistener
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


    if (chapterCounter == 0.5) {
        currentColor = "greyred";
        currentTextColor = "#DA212C";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelector(".chapterTitle.culturedigital").style.color = currentTextColor;
        document.querySelector("#console").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").className = "";
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#DA212C');
        document.querySelector('.consoleText').textContent = ">APPLIED RED COLORING.";
    }


    if (chapterCounter == 1) {
        currentColor = "grey";
        currentTextColor = "#fffffa";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelector(".chapterTitle.legalities").style.color = currentTextColor;
        document.querySelector("#console").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").className = "";
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#fffffa');
        document.querySelector('.consoleText').textContent = ">APPLIED GREY COLORING.";
    }


    if (chapterCounter == 2) {
        currentColor = "red";
        currentTextColor = "#00000e";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelector(".chapterTitle.hacking").style.color = currentTextColor;
        document.querySelector("#console").className = "";
        document.querySelector("h1#headline").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#00000e');
        document.querySelector('.consoleText').textContent = ">APPLIED RED COLORING.";
    }


    if (chapterCounter == 3) {
        currentColor = "grey";
        currentTextColor = "#fffffa";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelector(".chapterTitle.nonlaw").style.color = currentTextColor;
        document.querySelector("#console").className = "";
        document.querySelector("h1#headline").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#fffffa');
        document.querySelector('.consoleText').textContent = ">APPLIED GREY COLORING.";
    }


    if (chapterCounter == 4) {
        currentColor = "yellow";
        currentTextColor = "#f6fb40";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelector(".chapterTitle.labelling").style.color = currentTextColor;
        document.querySelector("#console").className = "";
        document.querySelector("h1#headline").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#f6fb40');
        document.querySelector('.consoleText').textContent = ">APPLIED NEON COLORING.";
    }


    if (chapterCounter == 5) {
        currentColor = "blue";
        currentTextColor = "#fff";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelector(".chapterTitle.fisherprice").style.color = currentTextColor;
        document.querySelector("#console").className = "";
        document.querySelector("h1#headline").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#fff');
        document.querySelector('.consoleText').textContent = ">APPLIED <TWIITER> COLORING.";
    }


    if (chapterCounter == 6) {
        currentColor = "grey";
        currentTextColor = "#fff";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelector(".chapterTitle.reframing").style.color = currentTextColor;
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

//
//    document.querySelector("body").addEventListener("mousemove", function () {
//        var rect = event.currentTarget.getBoundingClientRect();
//        var x = event.clientX - rect.left;
//        var y = event.clientY - rect.top;
//        if (y < 10) {
//            document.querySelector(".openconsole").style.height = "5vh";
//        } else {
//            document.querySelector(".openconsole").style.height = "0vh";
//        }
//
//
//        if (document.querySelector(".placeholder").style.height == "100vh" && y > (window.innerHeight) - 50) {
//            document.querySelector(".placeholder").style.height = "0vh";
//            document.querySelector("#console").className = "";
//            document.querySelector("#console").classList.toggle(currentColor);
//            document.querySelector("h1#headline").className = "";
//            document.querySelector("h1#headline").classList.toggle(currentColor);
//            document.querySelector(".openconsole").style.background = "#000";
//            document.querySelector("#gridcontainer").classList = "";
//        }
//    })
//
//    document.querySelector(".openconsole").addEventListener("click", function () {
//        this.style.background = "transparent";
//        document.querySelector(".placeholder").style.height = "100vh";
//        document.querySelector(".placeholder").style.transition = "0.5s";
//        document.querySelector("#console").className = "";
//        document.querySelector("#console").classList.toggle("foreground");
//        document.querySelector("h1#headline").className = "";
//        document.querySelector("h1#headline").classList.toggle("foreground");
//
//        document.querySelector("#gridcontainer").classList.toggle(currentColor);
//    })
//
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
