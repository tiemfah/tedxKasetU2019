// Video ID
var vdoID_17 = [
    { no: 1, id: "XJomMljKX9o" }, 
    { no: 2, id: "J66ua-ELj8I" }, 
    { no: 3, id: "V9q9zAAJXQo" },
    { no: 4, id: "WJF9eVSn8ZI" }, 
    { no: 5, id: "yRUm1voMUV0" },
    { no: 6, id: "JS87t0lPVNo" },
    { no: 7, id: "23BA9X6Pphk" },
    { no: 8, id: "_Pp8q-g0JGk" },
    { no: 9, id: "p0CSG7rxW_s" }, 
    { no: 10, id : "JVSTp23IGQY" }, 
    // { no: 11, id : "23BA9X6Pphk" }, 
    // { no: 12, id : "gwY8Q-jgaLU"}
]

var vdoID_18 = [
    { no: 1, id: "k8vGjREtXIs" }, 
    { no: 2, id: "kmBMMtMTNrE" }, 
    { no: 3, id: "gwY8Q-jgaLU" },
    { no: 4, id: "mfk4dmZ2TUo" }, 
    { no: 5, id: "j6jb4-wX6Tc" },
    { no: 6, id: "qYbV5EY1yxU" },
    { no: 7, id: "aPjbzctE9jc" },
    { no: 8, id: "2UoGnz3jtR0" },
    { no: 9, id: "56794S-nfGM" }, 
    { no: 10, id : "HLmEC-3QXKw" }, 
    // { no: 11, id : "23BA9X6Pphk" }, 
    // { no: 12, id : "gwY8Q-jgaLU"}
]


// Add video embed
function playvdo(vdoyr, vdoid) {
    if (vdoyr == vdoID_18){
        yr_text = 'yr18';
    } else {
        yr_text = 'yr17';
    }
    console.log(yr_text)
    var select_yr = document.querySelectorAll("#" + yr_text + " .row .ytbuild .vdo-border .yt-thumbnail");
    if (select_yr[vdoid - 1].id == vdoid) {
        select_yr[vdoid - 1].innerHTML = '<iframe width="320" height="196"src="https://www.youtube.com/embed/' + vdoyr[vdoid - 1].id + '?rel=0&amp;showinfo=0&amp;autoplay=1"'
        + 'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    }
}

// Add preview
function buildpreview(yr) {
    var vdo_yr = null;
    var yr_text = '';
    var vdo_text = '';
    if (yr == 'yr18') {
        vdo_yr = vdoID_18;
        yr_text = 'yr18';
        vdo_text = 'vdoID_18';
    } else {
        vdo_yr = vdoID_17;
        yr_text = 'yr17';
        vdo_text = 'vdoID_17';
    }
    for (var i = 1; i <= vdo_yr.length; i++) {
        var vdo = document.querySelectorAll("#" + yr_text + " .row .ytbuild .vdo-border .yt-thumbnail");
        if (vdo[i - 1].id == i) {
            vdo[i - 1].innerHTML += '<img src="https://img.youtube.com/vi/' + vdo_yr[i - 1].id + '/mqdefault.jpg" alt="">'
            vdo[i - 1].innerHTML += '<div class="play-btn" onclick="playvdo(' + vdo_text + ',' + i + ')"></div>'
        }
    }
}

buildpreview('yr18');
buildpreview('yr17');

// var lazyLoadInstance = new LazyLoad({
//     elements_selector: ".lazy",
//     load_delay: 300,
//     threshold: 0
// });

// if (lazyLoadInstance) {
//     lazyLoadInstance.update();
// }
