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
              <div class = "render-colors" style="background-color: ${color.hex.value}" data-hexcolor="${color.hex.value}"></div>
              `;
    hexNumbers += `
              <div class = "render-hex" data-hexcolor="${color.hex.value}">${color.hex.value}</div>
              `;
  }
  document.getElementById("scheme-container").innerHTML = chosenColers;
  document.getElementById("scheme-color-info").innerHTML = hexNumbers;
}

document.addEventListener("click", (e) => {
  if (e.target.dataset.hexcolor){
    navigator.clipboard.writeText(e.target.dataset.hexcolor);
    alert("copied the color: " + e.target.dataset.hexcolor)
  } else {
    
  }
})

document.getElementById("get-scheme-btn").addEventListener("click", (e) => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorSelector()}&mode=${modeSelector()}`
  )
    .then((res) => res.json())
    .then((data) => renderColors(data));

  e.preventDefault();
  
});

