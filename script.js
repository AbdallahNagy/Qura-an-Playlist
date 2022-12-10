//get json bands file
let rockbands;

let xhr = new XMLHttpRequest();
xhr.open("get", "rockbands.json");
xhr.send();

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        rockbands = xhr.response;
        rockbands = JSON.parse(rockbands);
        console.log(rockbands);
    }
});

const bands = document.querySelector("#bands");
console.log(bands);

const artists = document.querySelector("#artists");
console.log(artists);

let selectedBand;

//artists list
bands.addEventListener("change", (e) => {
    selectedBand = e.target.value;
    let selectedArtists = rockbands[selectedBand];

    console.log(selectedBand)
    artists.innerHTML = "";
    for(let i=0; i<selectedArtists.length; i++){
        artists.innerHTML += `
            <option value="${selectedArtists[i].name}">
            ${selectedArtists[i].name}
            </option>`;
    }
});

artists.addEventListener("change", (e) => {
    let artistArr = rockbands[selectedBand];

    for(let i=0; i<artistArr.length; i++){
        if(artistArr[i].name === e.target.value){
            let songURL = artistArr[i].value;
            open(songURL);
        }
    }
});