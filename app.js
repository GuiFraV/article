const paragraphe = document.querySelector("p");
const titleTag = document.querySelector("h1");
const next = document.querySelector("#next");
const previous = document.querySelector("#previous");

let count = 0;

const title = [
  "'Le Jeu de la Dame' : Une série captivante qui redéfinit le genre",
  "Un scénario bien ficelé",
  "Des performances d'acteurs exceptionnelles",
  "Une réalisation soignée",
  "Une bande sonore envoûtante",
  "Un impact culturel significatif",
  "Conclusion",
];

const article = [
  "'Le Jeu de la Dame' (The Queen's Gambit), une mini-série diffusée sur Netflix, a vraiment captivé des millions de spectateurs à travers le monde. Adaptée du roman de Walter Tevis, cette série raconte l'histoire de Beth Harmon, une jeune prodige des échecs, interprétée par la talentueuse Anya Taylor-Joy. Voici pourquoi cette série mérite toute votre attention.",
  "Le scénario de 'Le Jeu de la Dame' est à la fois captivant et émouvant. Il suit l'évolution de Beth Harmon, de son enfance dans un orphelinat à son ascension dans le monde des échecs. La série aborde des thèmes profonds comme la dépendance, la solitude et la quête de soi. Chaque épisode est un mélange parfait de tension, de drame et de moments de triomphe, rendant la série difficile à quitter.",
  "Anya Taylor-Joy livre une performance magistrale dans le rôle de Beth Harmon. Son interprétation est à la fois vulnérable et puissante, capturant parfaitement les complexités de son personnage. Les acteurs secondaires, comme Thomas Brodie-Sangster et Harry Melling, apportent également une profondeur et une authenticité à leurs rôles, enrichissant ainsi l'ensemble de la série.",
  "La réalisation de Scott Frank est impeccable. Chaque scène est soigneusement construite, avec une attention particulière aux détails. Les parties d'échecs, qui pourraient sembler ennuyeuses pour certains, sont filmées de manière à être passionnantes et visuellement attrayantes. La série utilise également des décors et des costumes d'époque pour recréer l'ambiance des années 1950 et 1960, ajoutant une couche supplémentaire d'authenticité.",
  "La bande sonore de 'Le Jeu de la Dame', composée par Carlos Rafael Rivera, est un autre point fort de la série. La musique accompagne parfaitement les émotions des personnages et les moments clés de l'intrigue. Elle contribue à créer une atmosphère immersive qui transporte le spectateur dans l'univers de Beth Harmon.",
  "'Le Jeu de la Dame' a eu un impact culturel significatif, popularisant les échecs auprès d'un large public. Depuis la sortie de la série, les ventes de jeux d'échecs ont explosé et de nombreux nouveaux joueurs se sont intéressés à ce jeu millénaire. La série a également été saluée pour sa représentation positive des femmes dans un domaine traditionnellement dominé par les hommes.",
  "'Le Jeu de la Dame' est une série exceptionnelle qui mérite d'être vue. Avec son scénario captivant, ses performances d'acteurs remarquables, sa réalisation soignée et sa bande sonore envoûtante, elle redéfinit le genre et laisse une impression durable. Que vous soyez amateur d'échecs ou non, cette série saura vous captiver et vous émouvoir.",
];

previous.addEventListener("click", () => {
  if (count > 0) {
    count--;
    paragraphe.innerHTML = article[count];
    titleTag.innerHTML = title[count];
  }
});

next.addEventListener("click", () => {
  if (count < article.length - 1) {
    count++;
    paragraphe.innerHTML = article[count];
    titleTag.innerHTML = title[count];
    if (count === article.length - 1) {
      confetti();
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    next.click();
  } else if (event.key === "ArrowLeft") {
    previous.click();
  }
});

paragraphe.innerHTML = article[0];
titleTag.innerHTML = title[0];

function confetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}
