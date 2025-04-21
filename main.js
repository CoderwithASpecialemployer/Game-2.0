const profiles = [
  {
    name: "Lea, 23",
    image: "assets/img/lea.jpg",
    bio: "Spontan, kreativ & auf der Suche nach dem nächsten Abenteuer."
  },
  {
    name: "Maya, 21",
    image: "assets/img/maya.jpg",
    bio: "Ich liebe lange Spaziergänge, Kaffee und ehrliche Gespräche."
  },
  {
    name: "Lina, 25",
    image: "assets/img/lina.jpg",
    bio: "Zwischen Karriere und Chaos suche ich jemanden zum Durchdrehen."
  }
];

let current = 0;

const profileImg = document.getElementById('profileImg');
const profileName = document.getElementById('profileName');
const profileBio = document.getElementById('profileBio');
const likeSound = document.getElementById('likeSound');

function loadProfile(index) {
  const p = profiles[index];
  profileImg.src = p.image;
  profileName.textContent = p.name;
  profileBio.textContent = p.bio;
}

document.getElementById('likeBtn').addEventListener('click', () => {
  likeSound.play();
  nextProfile();
});

document.getElementById('dislikeBtn').addEventListener('click', () => {
  nextProfile();
});

function nextProfile() {
  current = (current + 1) % profiles.length;
  loadProfile(current);
}

document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

window.addEventListener('load', () => loadProfile(current));