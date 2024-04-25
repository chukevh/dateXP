import { RiDeleteBin6Fill } from "react-icons/ri";
import { useNoteLocalStorage } from "../../../hooks/useLocalStorage";

export default function Notes() {
    const [note, setNote] = useNoteLocalStorage()
    
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setNote(e.target.value)
    }

    function handleReset() {
        setNote("")
    }

    return (
        <>
            <span className="text-h2">Notes</span>
            <div className="note">
                <form id="note-form" className="note-form">
                    <textarea 
                        onChange={handleChange}
                        value={note}
                        className="note-input" 
                        placeholder="Type to add a note..."
                    />
                </form>

                <div className="note-footer">
                    <span className="text-h3">{note.length} Loving Letters</span>
                    <RiDeleteBin6Fill 
                        size='1.3rem'
                        onClick={handleReset}
                        className="reset-btn"
                        aria-label="reset-btn"
                    />
                </div>
            </div>
        </>
    )
}