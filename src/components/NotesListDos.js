import NoteImportante from './NoteImportante';
import AgregarNotasImportantes from './AgregarNotasImportantes';

const NotesListDos = ({ notesDos, handleAgregarNotasDos, handleDeleteNoteDos }) => {
    return  (
        <div className="notes-list">
            {notesDos.map((noteDos) => (
                <NoteImportante 
                    id={noteDos.id} 
                    title={noteDos.title}
                    text={noteDos.text} 
                    date={noteDos.date}
                    handleDeleteNoteDos={handleDeleteNoteDos} />))}
                <AgregarNotasImportantes handleAgregarNotasDos={handleAgregarNotasDos} />
        </div>
    );
};

export default NotesListDos;