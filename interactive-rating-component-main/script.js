let rating          = document.querySelector(".rating_p")
let ratingUn        = document.querySelector("#rating_un");
let ratingDeux      = document.querySelector("#rating_deux");
let ratingTrois     = document.querySelector("#rating_trois");
let ratingQuatre    = document.querySelector("#rating_quatre");
let ratingCinq      = document.querySelector("#rating_cinq");

let submit          = document.querySelector("#submit");
let containerUn     = document.querySelector("#container_un");
let containerDeux   = document.querySelector("#container_deux");
let selection       = document.querySelector("#selection p");
let choix           = true;


function changeColor (rating){
    rating.style.backgroundColor = "#262e38";
    rating.style.color = "#7C8798";
}


// RATING UN 

ratingUn.addEventListener("click", () => {
    if(choix){
        ratingUn.style.backgroundColor = "#FC7614";
        ratingUn.style.color = "white";
        changeColor(ratingDeux);
        changeColor(ratingTrois);
        changeColor(ratingQuatre);
        changeColor(ratingCinq);
        selection.textContent = "You selected 1 out of 5";
        choix = false;
    }
    else {
        ratingUn.addEventListener("onmouseover", () => {
            ratingUn.style.backgroundColor = "#7C8798";
            ratingUn.style.color = "white";
        
        
        });
        ratingUn.style.backgroundColor = "#262e38";
        ratingUn.style.color = "#7C8798";
        choix = true;
    }
});


// RATING DEUX

ratingDeux.addEventListener("click", () => {
    if(choix){
        ratingDeux.style.backgroundColor = "#FC7614";
        ratingDeux.style.color = "white";
        changeColor(ratingUn);
        changeColor(ratingTrois);
        changeColor(ratingQuatre);
        changeColor(ratingCinq);
        selection.textContent = "You selected 2 out of 5";
        choix = false;
    }
    else {
        ratingDeux.addEventListener("onmouseover", () => {
            ratingDeux.style.backgroundColor = "#7C8798";
            ratingDeux.style.color = "white";
        
        
        });
        ratingDeux.style.backgroundColor = "#262e38";
        ratingDeux.style.color = "#7C8798";
        choix = true;
    }
});


// RATING TROIS

ratingTrois.addEventListener("click", () => {
    if(choix){
        ratingTrois.style.backgroundColor = "#FC7614";
        ratingTrois.style.color = "white";
        changeColor(ratingUn);
        changeColor(ratingDeux);
        changeColor(ratingQuatre);
        changeColor(ratingCinq);
        selection.textContent = "You selected 3 out of 5";
        choix = false;
    }
    else {
        ratingTrois.addEventListener("onmouseover", () => {
            ratingTrois.style.backgroundColor = "#7C8798";
            ratingTrois.style.color = "white";
        
        
        });
        ratingTrois.style.backgroundColor = "#262e38";
        ratingTrois.style.color = "#7C8798";
        choix = true;
    }
});


// RATING QUATRE

ratingQuatre.addEventListener("click", () => {
    if(choix){
        ratingQuatre.style.backgroundColor = "#FC7614";
        ratingQuatre.style.color = "white";
        changeColor(ratingUn);
        changeColor(ratingDeux);
        changeColor(ratingTrois);
        changeColor(ratingCinq);
        selection.textContent = "You selected 4 out of 5";
        choix = false;
    }
    else {
        ratingQuatre.addEventListener("onmouseover", () => {
            ratingQuatre.style.backgroundColor = "#7C8798";
            ratingQuatre.style.color = "white";
        
        
        });
        ratingQuatre.style.backgroundColor = "#262e38";
        ratingQuatre.style.color = "#7C8798";
        choix = true;
    }
});

// RATING CINQ

ratingCinq.addEventListener("click", () => {
    if(choix){
        ratingCinq.style.backgroundColor = "#FC7614";
        ratingCinq.style.color = "white";
        changeColor(ratingDeux);
        changeColor(ratingTrois);
        changeColor(ratingQuatre);
        changeColor(ratingUn);
        selection.textContent = "You selected 5 out of 5";
        choix = false;
    }
    else {
        ratingCinq.addEventListener("onmouseover", () => {
            ratingCinq.style.backgroundColor = "#7C8798";
            ratingCinq.style.color = "white";
        
        
        });
        ratingCinq.style.backgroundColor = "#262e38";
        ratingCinq.style.color = "#7C8798";
        choix = true;
    }
});

submit.addEventListener("click", () => {
        containerUn.style.display   = "none";
        containerDeux.style.display = "flex";
});
