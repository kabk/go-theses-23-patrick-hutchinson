//fetch('./data.json')
//    .then(function (response) {
//        return response.json();
//    })
//    .then(function (json) {
//        var data = json.data;
//
//        data.forEach(function (colors, index, array) {
//            let randomnumber = Math.floor(Math.random() * 50);
//            document.querySelector('body').style.color = `${array[randomnumber].font_colors}`;
//            document.querySelector('body').style.backgroundColor = `${array[randomnumber].bg_colors}`;
//        })
//    });

let styles = ["style_1", "style_2", "style_3", "style_4", "style_5"]
let bg_colors = ["#262626", "#ffffff"]

let randomstyle = Math.floor(Math.random() * styles.length);

document.querySelectorAll('li').forEach(function (listitem, index, array) {
    listitem.classList.add(styles[randomstyle]);
    //    console.log(styles[randomstyle]);
    randomstyle = Math.floor(Math.random() * styles.length);

})

//document.querySelector('body').style.backgroundColor = bg_colors[Math.floor(Math.random() * bg_colors.length)];
//console.log(document.querySelector('body').style.backgroundColor);
//
//if (document.querySelector('body').style.backgroundColor == "rgb(255, 255, 255)") {
//    document.querySelector("h1").style.color = "#000";
//    //    document.querySelector(".style_5").style.color = "white";
//} else {
//    document.querySelector("h1").style.color = "#fff";
//    document.querySelector(".style_5").style.color = "#fff";
//    //    document.querySelector(".style_5").style.color = "black";
//};

//if (document.querySelector('body').style.backgroundColor == "rgb(255, 255, 255)") {
//    //    document.querySelector("h1").style.color = "#000";
//    document.querySelector(".style_5").style.color = "#000";
//} else {
//    document.querySelector(".style_5").style.color = "#fff";
//};
