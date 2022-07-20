import Note from './Note';
import AgregarNotas from './AgregarNotas';

const NotesList = ({ notes, handleAgregarNotas, handleDeleteNote }) => {
    return  (
        <div className="notes-list">
            {notes.map((note) => (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeleteNote={handleDeleteNote} />))}
                <AgregarNotas handleAgregarNotas={handleAgregarNotas} />
        </div>
    );
};

export default NotesList;