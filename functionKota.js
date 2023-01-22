function openKota(namakota) {
    var i;
    var x = document.getElementsByClassName("kota");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(namakota).style.display = "block";
}