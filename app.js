document.getElementById("get-scheme").addEventListener("click", () => {
    
   
})

 fetch("https://www.thecolorapi.com/scheme", {method: "GET"})
        .then(res => res.json())
        .then(data => console.log(data))
    