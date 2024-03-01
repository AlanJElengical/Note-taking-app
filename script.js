const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", () => {
    // Create a new paragraph element with contenteditable attribute
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    
    // Create a new button element
    const newButton = document.createElement("button");
    
    // Create a new image element for the button
    let img = document.createElement("img");
    img.src = "/images/3405244.png";
    newButton.textContent="Click here to";
    
    // Append the image to the button
    newButton.appendChild(img);

    // Append the input box to the notes container
    notesContainer.appendChild(inputBox);
    
    // Append the button to the same parent element as the input box
    notesContainer.appendChild(newButton);

    // Create a new br element
    let lineBreak = document.createElement("br");
    
    // Append the br element to the parent element
    notesContainer.appendChild(lineBreak);
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.previousSibling.remove();
        e.target.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
