class Notes {
    let notes;

    export saveNote(noteTitle = "", noteContent = ""){

       if (noteTitle.length == 0 && noteContent.length = 0){

       }
    }
}
notes = localStorage.getItem("notes");

if(notes === null){
    notes = []
}

const note = {
    id: notes.length,
    title: noteTitle,
    content: noteContent
}

notes.push(note);
localStorage.setItem("notes", JSON.stringify(notes));

}

export editNote(){
    
}