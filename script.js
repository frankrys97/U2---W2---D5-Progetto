const currYear = new Date().getFullYear();
document.getElementById("currYear").innerText = currYear;

const iconVolume = document.getElementById('volumeStatus')
const volumeButton = document.getElementById('volumeButton')
const previewFilm = document.getElementById('Film')

const cambiaIconaVolume = function () {
    if (iconVolume.classList[1] === "bi-volume-mute-fill") {
        iconVolume.classList.remove("bi-volume-mute-fill")
        iconVolume.classList.add("bi-volume-up-fill")
    } else {
        if (iconVolume.classList[1] === "bi-volume-up-fill") {
            iconVolume.classList.remove("bi-volume-up-fill")
            iconVolume.classList.add("bi-volume-mute-fill")
        }
    }
}

const cambiaVolume = function () {
    if (Film.muted) {
        Film.muted = false;
        Film.volume = 0.5;
    } else {
        Film.muted = true;
    }
}

const tastoVolumePremuto = function () {
    cambiaIconaVolume()
    cambiaVolume()
}