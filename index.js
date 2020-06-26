const form = document["addItem"]

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const groceryItem = form.title.value
    form.title.value = ""

     const li = document.createElement('li')
     li.textContent = groceryItem + ""
     document.getElementsByTagName("ul")[0].append(li)

    const liButton1 = document.createElement('button')
    liButton1.innerHTML = "edit"
    document.getElementById("list").appendChild(liButton1)
    

    const liButton2 = document.createElement('button')
    liButton2.innerHTML = "X"
    document.getElementById("list").appendChild(liButton2)

    document.getElementsByTagName("button")[7].style.margin = "10px auto" 
    document.getElementsByTagName("button")[8].style.margin = "10px auto" 
    
})

 function deleteItem() {
        var elem = document.getElementById("cherios")
         elem.remove()
 }