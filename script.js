const colorInput = document.getElementById("current-color-input");
const selectedColor = document.querySelector(".selected-color");

colorInput.addEventListener("input", (e) => {
  const hex = e.target.value;
  selectedColor.textContent = hex;
  selectedColor.style.backgroundColor = hex;
  selectedColor.style.color = getContrastColor(hex);
});

function getContrastColor(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}
