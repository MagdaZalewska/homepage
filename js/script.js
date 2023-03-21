

let buttonImage = document.querySelector(".buttonImage");
let image = document.querySelector(".img");
let captionChange = document.querySelector(".js-captionChange");

buttonImage.addEventListener("click", () => {
  image.classList.toggle("imageHide");
  if (image.classList.contains("imageHide")) {
    captionChange.innerText = "Pokaż";
  } else {
    captionChange.innerText = "Ukryj";
  }
});