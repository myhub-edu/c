// shorts.js

let shortsList = [
  "IuuhFB8M7Qc",
  "N5y8NIWVSDs",
  "I0FdYe2FJUM",
  "knwc0rNN7Zs",
  "BliUfPbn-2Q",
  "WOP7aF8CxxQ"
];

// Remove duplicates
shortsList = [...new Set(shortsList)];

// Shuffle once per session
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(shortsList);

let loadedCount = 0;
const chunkSize = 2;
const container = document.getElementById("shorts");

// Observer for autoplay and unmute
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const iframe = entry.target;
    if (!iframe.contentWindow) return;

    const play = '{"event":"command","func":"playVideo","args":""}';
    const pause = '{"event":"command","func":"pauseVideo","args":""}';
    const unmute = '{"event":"command","func":"unMute","args":""}';
    const setVolume = '{"event":"command","func":"setVolume","args":[100]}';

    if (entry.isIntersecting) {
      iframe.contentWindow.postMessage(unmute, '*');
      iframe.contentWindow.postMessage(setVolume, '*');
      iframe.contentWindow.postMessage(play, '*');
    } else {
      iframe.contentWindow.postMessage(pause, '*');
    }
  });
}, { threshold: 0.75 });

function loadShorts() {
  const end = Math.min(loadedCount + chunkSize, shortsList.length);

  for (let i = loadedCount; i < end; i++) {
    const id = shortsList[i];
    const card = document.createElement("div");
    card.className = "short-card";

    card.innerHTML = `
      <div class="short-wrapper">
        <iframe 
          src="https://www.youtube.com/embed/${id}?rel=0&enablejsapi=1&mute=0"
          title="YouTube Short"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="short-overlay"></div>
      </div>
    `;

    container.appendChild(card);

    const iframe = card.querySelector("iframe");
    observer.observe(iframe);
  }

  loadedCount = end;
}

// Infinite scroll - load more unique shorts
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const scrollHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight + 100 >= scrollHeight) {
    if (loadedCount < shortsList.length) {
      loadShorts();
    } else {
      console.log("No more unique shorts available.");
    }
  }
});

// Click-to-play (in case autoplay paused)
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("short-overlay")) {
    const iframe = e.target.previousElementSibling;
    iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
  }
});

// Load initial
window.addEventListener("load", loadShorts);
