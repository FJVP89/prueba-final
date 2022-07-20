import { useState } from "react";

const AgregarNotasImportantes = ({ handleAgregarNotasDos}) => {
    const [noteText, setNoteText] = useState('');

    const characterLimit = 200

    // El if es para que los caracteres no se vayan a negativo
    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >=0) {
            setNoteText(event.target.value);
        }
    };

    // Para no agregar notas sin nada escrito, y para
    // dejar el input en blanco al agregar una nota
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAgregarNotasDos(noteText);
            setNoteText('');
        }
    };
    return (
        <div className="note new2">
            <textarea className="textarea2"
            rows='8'
            cols='10'
            placeholder="Escriba para agregar una nota importante..."
            value={noteText}
            onChange={handleChange}
            ></textarea>
            <div className="note-footer2">
                <small>Quedan {characterLimit - noteText.length} caractéres</small>
                <button className="save" onClick={handleSaveClick}>Guardar</button>
            </div>
        </div>
    );
};

export default AgregarNotasImportantes;