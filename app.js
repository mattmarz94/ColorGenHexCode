function colorSelector(){
       let selectedColor = document.getElementById("color-selector").value
       let colorsArray = selectedColor.split("");
       colorsArray.shift()
       // console.log(colorsArray.shift())
       let hexArray = colorsArray.join("")
       // console.log(hexArray)
       return hexArray
}

function modeSelector(){
       let colorScheme = document.getElementById("color-scheme").value
       console.log(colorScheme)
}

document.getElementById("get-scheme-btn").addEventListener("click", (e) => {

       fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector}&mode=${modeSelector}`)
              .then(res => res.json())
              .then(data => console.log(data))
   
       e.preventDefault()
})


    