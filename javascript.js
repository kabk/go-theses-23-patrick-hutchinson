//let styles = ["style_1", "style_2", "style_3", "style_4", "style_5"]
//let bg_colors = ["#262626", "#ffffff"]
//
//let randomstyle = Math.floor(Math.random() * styles.length);


//document.querySelectorAll('li').forEach(function (listitem, index, array) {
//    listitem.classList.add(styles[randomstyle]);
//    randomstyle = Math.floor(Math.random() * styles.length);
//});
//document.querySelector('.chapter-headline').classList.add(styles[randomstyle]);




//DO LIST:
// Color of current chapter is main color, else are greyed out
// Same with Footnotes & Definition

//When hovering the word "Definition" and "Footnotes", the cooresponding column shows up.
let currentColor = "background";
let currentTextColor = "#DA212C";



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
        window.onscroll = function () {};

        setTimeout(() => {
            document.querySelector('.explainButton').style.transition = "none";
        }, 1000);


        //        setTimeout(() => {
        document.querySelector("ul.chapterColumn.desktop").style.transform = "scale(0.55)";
        //        }, 500);
        setTimeout(() => {
            document.querySelector("ul.chapterColumn.desktop").style.position = "absolute";
            //            document.querySelector("ul.chapterColumn.desktop").style.left = "0";
            //            document.querySelector("ul.chapterColumn.desktop").style.top = "0";
        }, 2000);
        document.querySelector(".placeholder").style.height = "0vh";

        setTimeout(() => {
            document.querySelector(".headerTitle.index").style.opacity = 1;
        }, 2000);
        setTimeout(() => {
            document.querySelector(".openconsole").style.height = "3vh";
        }, 3000);
        setTimeout(() => {
            document.querySelector(".openconsole").style.height = "0vh";
            document.querySelector(".placeholder").style.transition = "0.5s";

        }, 4000);
    }
}, 40);

document.querySelector('.explainButton').addEventListener('click', function () {

    document.querySelector('.explanationText').classList.toggle("visible");
    document.querySelector('.explanationFooter').classList.toggle("visible");
    document.querySelector('#console').className = "";
    document.querySelector('#console').classList.toggle("foreground");
    document.querySelector('h1#headline').className = "";
    document.querySelector('h1#headline').classList.toggle("foreground");
});


//any global scroll events are here





//Show Defintion Column on Hover
document.querySelector(".definitionsColumn").addEventListener('mouseenter', function () {
    document.querySelector(".definitionsColumn").style.display = "block";
    document.querySelector(".definitionsColumn").style.opacity = "1";
});
document.querySelector(".definitionsColumn").addEventListener('mouseleave', function () {
    document.querySelector(".definitionsColumn").style.opacity = "0";
});



//Hightlight Definition and Accordeon
document.querySelectorAll('.definitionWord').forEach(function (definitionWord) {
    //if on desktop
    if (window.innerWidth > 602) {
        definitionWord.addEventListener('mouseenter', function () {
            document.querySelectorAll('.definitionsListItem').forEach(function (definitionListItems) {
                if (definitionListItems.textContent.substring(0, 3) == definitionWord.textContent.substring(0, 3)) {
                    definitionListItems.style.color = "var(--main-font-color)";
                    definitionListItems.classList.toggle('highlighted');
                    document.querySelector('.footnotesColumn.desktop').style.display = "none";
                    document.querySelector('.definitionsColumn').style.display = "block";

                    setTimeout(() => {
                        document.querySelector('.definitionsColumn').style.opacity = "1";
                    }, 100)
                }
            });
        });

        definitionWord.addEventListener('mouseleave', function () {
            document.querySelectorAll('.definitionsListItem').forEach(function (definitionListItems) {
                if (definitionListItems.textContent.substring(0, 3) == definitionWord.textContent.substring(0, 3)) {
                    definitionListItems.classList.toggle('highlighted');
                    document.querySelector('.definitionsColumn').style.opacity = "0";
                    definitionListItems.style.color = "#bfbfbf";
                }
            });
        });

    }

    //if on mobile

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

    if (window.innerWidth < 602) {
        document.querySelectorAll(".panel").forEach(function (definitionPanels) {
            definitionPanels.addEventListener("click", function () {
                if (definitionPanels.previousElementSibling.textContent.substring(0, 3) == definitionWord.textContent.substring(0, 3)) {
                    definitionWord.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
            })
        })
    }
});

document.querySelectorAll(".definitionsListItem").forEach(function (definitionsListItems) {
    definitionsListItems.addEventListener('mouseenter', function () {
        definitionsListItems.style.color = "var(--main-font-color)";

    })
})
document.querySelectorAll(".definitionsListItem").forEach(function (definitionsListItems) {
    definitionsListItems.addEventListener('mouseleave', function () {
        definitionsListItems.style.color = "#bfbfbf";

    })
})

document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
    chapterTitles.addEventListener('mouseenter', function () {
        chapterTitles.style.color = "var(--main-font-color)";

    })
})
document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
    chapterTitles.addEventListener('mouseleave', function () {
        chapterTitles.style.color = "#bfbfbf";

    })
})


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



//Footnote Highlighting Functionality (Desktop)
if (window.innerWidth > 802) {
    document.querySelectorAll('.footnote-marker').forEach(function (footnoteMarker) {
        footnoteMarker.addEventListener("mouseenter", function () {
            document.querySelector('.footnotesColumn').style.display = "block";
            document.querySelector('.definitionsColumn').style.display = "none";
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
        })
    })
    document.querySelectorAll('.footnote-marker').forEach(function (footnoteMarker) {
        footnoteMarker.addEventListener("mouseleave", function () {
            document.querySelector('.footnotesColumn').style.opacity = "0";
            document.querySelectorAll('.footnoteItem').forEach(function (footnoteItem) {
                if (footnoteItem.classList.contains(`${footnoteMarker.classList[1]}`)) {
                    footnoteItem.classList.remove("highlighted");
                }
            });
        })
    })
}

//Footnote Highlighting Functionality (Mobile)
document.querySelectorAll('.footnote-marker').forEach(function (footnoteMarker) {
    footnoteMarker.addEventListener("click", function () {
        document.querySelectorAll('.footnoteItem').forEach(function (footnoteItem) {
            if (footnoteItem.classList.contains(`${footnoteMarker.classList[1]}`)) {

                if (window.innerWidth < 602) {
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

        if (window.innerWidth < 602) {
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
                    block: "center"
                });
            }
        })
    })
})


if (window.innerWidth < 802) {
    document.querySelector(".chapterColumn.desktop").remove();
}



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
        //        document.querySelector(".footeritem").style.opacity = "1";
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
if (window.innerWidth > 802) {
    document.querySelector('.footnotesColumn').addEventListener('mouseenter', function () {
        document.querySelector('.footnotesColumn').style.opacity = "1";
    });
    document.querySelector('.footnotesColumn').addEventListener('mouseleave', function () {
        document.querySelector('.footnotesColumn').style.opacity = "0";
    });


    //When Top Tags are hovered, show respective columns
    document.querySelector('.footnotesTag').addEventListener('mouseenter', function () {
        document.querySelector('.footnotesColumn').style.display = "block";
        document.querySelector('.definitionsColumn').style.display = "none";
        document.querySelector('.footnotesColumn').style.opacity = "1";
    });
    document.querySelector('.footnotesTag').addEventListener('mouseleave', function () {
        document.querySelector(".footnotesColumn").style.opacity = "0";
    });

    document.querySelector('.definitionsTag').addEventListener('mouseenter', function () {
        document.querySelector('.definitionsColumn').style.display = "block";
        document.querySelector('.footnotesColumn').style.display = "none";
        document.querySelector('.definitionsColumn').style.opacity = "1";
    });
    document.querySelector('.definitionsTag').addEventListener('mouseleave', function () {
        document.querySelector(".definitionsColumn").style.opacity = "0";
    });
}

//change color of footnoteItem on hover
document.querySelectorAll(".footnoteItem").forEach(function (footnoteItem) {
    footnoteItem.addEventListener("mouseenter", function () {
        footnoteItem.classList.toggle("highlighted");
    })

    footnoteItem.addEventListener("mouseleave", function () {

        footnoteItem.classList.toggle("highlighted");
    })
})

document.querySelector(".footerfootnotes").addEventListener("click", function () {
    document.querySelector(".subheadlineFootnotes").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
})

document.querySelector(".footerdefinitions").addEventListener("click", function () {
    document.querySelector(".subheadlineDefinitions").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
})

document.querySelector("body").addEventListener("mousemove", function () {
    var rect = event.currentTarget.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    if (y < 10) {
        document.querySelector(".openconsole").style.height = "5vh";
    } else {
        document.querySelector(".openconsole").style.height = "0vh";
    }


    if (document.querySelector(".placeholder").style.height == "100vh" && y > (window.innerHeight) - 50) {
        document.querySelector(".placeholder").style.height = "0vh";
        document.querySelector("#console").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").className = "";
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(".openconsole").style.background = "#000";
        document.querySelector("#gridcontainer").classList = "";

    }
})

document.querySelector(".openconsole").addEventListener("click", function () {
    this.style.background = "transparent";
    document.querySelector(".placeholder").style.height = "100vh";
    document.querySelector(".placeholder").style.transition = "0.5s";
    document.querySelector("#console").className = "";
    document.querySelector("#console").classList.toggle("foreground");
    document.querySelector("h1#headline").className = "";
    document.querySelector("h1#headline").classList.toggle("foreground");

    document.querySelector("#gridcontainer").classList.toggle(currentColor);
})

//if (window.innerWidth < 602) {
//    Array.from(document.querySelector("ol").children).forEach(function (referenceitem) {
//        referenceitem.style.color = "#bfbfbf";
//        referenceitem.style["-webkit-text-stroke"] = "#bfbfbf 1.02px";
//
//        if (document.querySelector(".subheadline.references").getBoundingClientRect().top < 120) {
//            referenceitem.style.color = "red";
//            referenceitem.style["-webkit-text-stroke"] = "red 1.02px";
//        } else {
//            referenceitem.style.color = "#bfbfbf";
//            referenceitem.style["-webkit-text-stroke"] = "#bfbfbf 1.02px";
//        }
//    });
//}

document.querySelectorAll(".footnote-ref").forEach(function (inTextFootnoteRef) {
    inTextFootnoteRef.addEventListener("click", function () {
        console.log(inTextFootnoteRef.getAttribute("href").slice(1));

        document.querySelectorAll(".footnoteReference").forEach(function (fullReferenceItem) {
            if (fullReferenceItem.id == inTextFootnoteRef.getAttribute("href").slice(1)) {
                fullReferenceItem.style.color = "#fff";
                fullReferenceItem.style["-webkit-text-stroke"] = "#fff 1.02px";
                console.log(fullReferenceItem);
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
