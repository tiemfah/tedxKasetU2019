import React, { Component } from "react";
import ReactDOM from "react-dom";
// import '../public/css/watch.css'

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
    { no: 10, id: "JVSTp23IGQY" },
]

var vdoID_18 = [
    { no: 1, id: "aPjbzctE9jc" },
    { no: 2, id: "2UoGnz3jtR0" },
    { no: 3, id: "56794S-nfGM" },
    { no: 4, id: "mfk4dmZ2TUo" },
    { no: 5, id: "j6jb4-wX6Tc" },
    { no: 6, id: "qYbV5EY1yxU" },
    { no: 7, id: "k8vGjREtXIs" },
    { no: 8, id: "kmBMMtMTNrE" },
    { no: 9, id: "gwY8Q-jgaLU" },
    { no: 10, id: "HLmEC-3QXKw" },
]

function set_yr_id(yr) {
    yr_text = yr == vdoID_18 ? yr_text = 'yr18' : yr_text = 'yr17';
    return yr_text;
}

// Add video embed
// function playvdo(vdo_yr, vdoid) {
//     var yr_text = set_yr_id(vdo_yr);
//     // var select_yr = document.querySelectorAll("#" + yr_text + " .row .ytbuild .vdo-border .yt-thumbnail");
//     var select_yr = document.getElementById(yr_text);
//     if (select_yr[vdoid - 1].id == vdoid) {
//         element = '<iframe width="320" height="196"src="https://www.youtube.com/embed/' + vdo_yr[vdoid - 1].id + '?rel=0&amp;showinfo=0&amp;autoplay=1"'
//             + 'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
//         ReactDOM.render(
//             element, select_yr[vdoid - 1]
//         );
//     }
// }

class PlayVDO extends React.Component {
    playVDO(vdo_yr, vdoid) {
        var yr_text = set_yr_id(vdo_yr);
        // var select_yr = document.querySelectorAll("#" + yr_text + " .row .ytbuild .vdo-border .yt-thumbnail");
        var select_yr = ReactDOM.createPortal(this.props.children, document.querySelector("#" + yr_text))
        if (select_yr[vdoid - 1].id == vdoid) {
            element = '<iframe width="320" height="196"src="https://www.youtube.com/embed/' + vdo_yr[vdoid - 1].id + '?rel=0&amp;showinfo=0&amp;autoplay=1"'
                + 'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
            ReactDOM.render(
                element, select_yr[vdoid - 1]
            );
        }
    }

    render() {
        return <div class="play-btn" onclick={() => playVDO('yr18',1)}></div>
    }
}

// ReactDOM.render(<PlayVDO />, document.getElementById("1"));

// function playvdo() {
//     var yr_text = 'yr18';
//     // var select_yr = document.querySelectorAll("#" + yr_text + " .row .ytbuild .vdo-border .yt-thumbnail");
//     var select_yr = document.getElementById(yr_text);
//     if (select_yr[1 - 1].id == vdoid) {
//         element = '<iframe width="320" height="196"src="https://www.youtube.com/embed/' + vdo_yr[1 - 1].id + '?rel=0&amp;showinfo=0&amp;autoplay=1"'
//         + 'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
//         ReactDOM.render(
//             element, select_yr[1 - 1]
//         );
//     }
// }

// // Add preview
// function buildpreview(vdo_yr) {
//     var yr_text = set_yr_id(vdo_yr);
//     var vdo_text = yr_text == 'yr18' ? vdo_text = 'vdoID_18' : vdo_text = 'vdoID_17';
//     for (var i = 1; i <= vdo_yr.length; i++) {
//         // var vdo = document.querySelectorAll("#" + yr_text + " .row .ytbuild .vdo-border .yt-thumbnail");
//         // var vdo_ele = document.getElementById(yr_text).value;
//         var vdo = React.Children.toArray(this.props.children)
//         if (vdo[i - 1].id == i) {
//             vdo[i - 1].innerHTML += '<img src="https://img.youtube.com/vi/' + vdo_yr[i - 1].id + '/mqdefault.jpg" alt="">'
//             vdo[i - 1].innerHTML += '<div class="play-btn" onclick="playvdo(' + vdo_text + ',' + i + ')"></div>'
//             script = '<img src="https://img.youtube.com/vi/' + vdo_yr[i - 1].id + '/mqdefault.jpg" alt="">'
//             script += '<div class="play-btn" onclick="playvdo(' + vdo_text + ',' + i + ')"></div>'
//             ReactDOM.render(script, document.getElementById(yr_text));
//         }
//     }
// }

// buildpreview(vdoID_18);
// buildpreview(vdoID_17);
