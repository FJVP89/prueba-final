import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import NotesList from "./components/NotesList";
import NotesListDos from "./components/NotesListDos"

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Ejemplo de una nota común",
      date: "18/07/2021",
    },
  ]);

  const [searchText, setSearchText] = useState('');

  
  
  // LOCALSTORAGE
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('prueba-final')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'prueba-final',
      JSON.stringify(notes)
    );
  }, [notes]);
  //LOCALSTORAGE



  const agregarNotas = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }









  const [notesDos, setNotesDos] = useState([
    {
      id: nanoid(),
      title: "título",
      text: "Ejemplo de una nota importante.",
      date: "18/07/2021",
    },
  ]);

  const agregarNotasDos = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notesDos, newNote];
    setNotesDos(newNotes);
  };

  const deleteNoteDos = (id) => {
    const newNotes = notesDos.filter((noteDos)=> noteDos.id !== id);
    setNotesDos(newNotes);
  }
  

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAgregarNotas={agregarNotas}
        handleDeleteNote={deleteNote} />
      <NotesListDos 
        notesDos={notesDos.filter((noteDos) => noteDos.text.toLowerCase().includes(searchText))} 
        handleAgregarNotasDos={agregarNotasDos}
        handleDeleteNoteDos={deleteNoteDos} />
    </div>
  );
};

export default App;