const colorScheme = document.getElementById("color-scheme")

function colorSelector(){
       let selectedColor = document.getElementById("color-selector").value
       let colorsArray = selectedColor.split("");
       colorsArray.shift()
       // console.log(colorsArray.shift())
       let hexArray = colorsArray.join("")
       console.log(hexArray)
}
colorSelector()

document.getElementById("get-scheme-btn").addEventListener("click", (e) => {

       fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector}`)
              .then(res => res.json())
              .then(data => console.log(data))
   
       e.preventDefault()
})


    