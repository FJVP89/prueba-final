import { MdDeleteForever } from 'react-icons/md';

const NoteImportante = ({ id, title, text, date, handleDeleteNoteDos }) => {
    return  <div className="note2">
        <title>{title}</title>
        <span>{text}</span>
        <div className="note-footer2">
            <small>{date}</small>
            <MdDeleteForever 
                onClick={()=> handleDeleteNoteDos(id)}  className='delete-icon' 
                size='1.3em' />
        </div>
    </div>;
};

export default NoteImportante;
