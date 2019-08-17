var vdoID = ["56794S-nfGM", "j6jb4-wX6Tc", "mfk4dmZ2TUo", "aPjbzctE9jc", "23BA9X6Pphk", "J66ua-ELj8I"]

function playvdo(id) {
    document.getElementById(id).innerHTML = '<iframe width="320" height="196"src="https://www.youtube.com/embed/' + vdoID[id - 1] + '?rel=0&amp;showinfo=0&amp;autoplay=1"'
        + 'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
}


for (var i = 1; i <= vdoID.length; i++) {
    document.getElementById(i).innerHTML += '<img src="https://img.youtube.com/vi/' + vdoID[i - 1] + '/mqdefault.jpg" alt="">'
    document.getElementById(i).innerHTML += '<div class="play-btn" onclick="playvdo(' + i + ')"></div>'
}
