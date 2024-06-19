const content = [
  { sticker: "stiker2.gif", message: "Gimana kabarnya hari ini ?" },
  { sticker: "stiker3.gif", message: "Semoga baik-baik saja yaaa" },
];

let currentIndex = 0;

document.getElementById("start-box").addEventListener("click", function () {
  document.getElementById("start-box").style.display = "none";
  document.getElementById("content-box").style.display = "block";
  document.getElementById("next-button").style.display = "inline-block";
});

document.getElementById("next-button").addEventListener("click", function () {
  const sticker = document.getElementById("sticker");
  const message = document.getElementById("message");
  const nextButton = document.getElementById("next-button");

  if (currentIndex < content.length) {
    sticker.src = content[currentIndex].sticker;
    message.textContent = content[currentIndex].message;
    currentIndex++;
  } else {
    sticker.src = "stiker4.gif";
    message.textContent = "See u";
    nextButton.style.display = "none"; // Hide the button
  }
});

const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("nama");
console.log(nama);

const namakamu = document.querySelector(".namakamu");
namakamu.innerText = nama;
