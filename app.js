function colorSelector() {
  let selectedColor = document.getElementById("color-selector").value;
  let colorsArray = selectedColor.split("");
  colorsArray.shift();
  let hexArray = colorsArray.join("");
  return hexArray;
}

function modeSelector() {
  let colorScheme = document.getElementById("color-scheme").value;
  return colorScheme;
}

function renderColors(data) {
  let chosenColers = "";
  let hexNumbers = "";

  for (let color of data.colors) {
    chosenColers += `
              <div class = "render-colors" style="background-color: ${color.hex.value}"></div>
              `;
    hexNumbers += `
              <div class = "render-hex">${color.hex.value}</div>
              `;
  }
  document.getElementById("scheme-container").innerHTML = chosenColers;
  document.getElementById("scheme-color-info").innerHTML = hexNumbers;
}

document.getElementById("get-scheme-btn").addEventListener("click", (e) => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorSelector()}&mode=${modeSelector()}`
  )
    .then((res) => res.json())
    .then((data) => renderColors(data));

  e.preventDefault();
});
