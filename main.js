const newNoteTitle = document.getElementById("title");
const newNoteText = document.getElementById("note-text");
const createBtn = document.getElementById("create-btn");
const notesContainer = document.querySelector(".notes");

createBtn.addEventListener("click", addNote);

function addNote(){
    const noteToAdd = document.createElement("div");
    const noteTitle = document.createElement("div");
    const noteText = document.createElement("div");
    const deleteBtn = document.createElement("button");
    
    
    // Setting the content of note and appending it to note
    noteTitle.textContent = newNoteTitle.value;
    noteText.textContent = newNoteText.value;
    
    noteToAdd.appendChild(noteTitle);
    noteToAdd.appendChild(noteText);

    // Setting the delete button and its content and appending it to the new note
    deleteBtn.type = "button";
    deleteBtn.textContent = "🗑";
    deleteBtn.addEventListener("click", (event) => deleteNote(event.currentTarget)); // attaching delete functionality
    
    noteToAdd.appendChild(deleteBtn);

    // Attaching editing functionality
    noteToAdd.addEventListener("click", (event) => editNote(event.currentTarget));

    // Adding the note to notes
    notesContainer.appendChild(noteToAdd);

    //clearing the original note
    newNoteText.value = "";
    newNoteTitle.value = "";
}

function deleteNote(deleteBtn){
    notesContainer.removeChild(deleteBtn.parentElement);
}
function editNote(){}
