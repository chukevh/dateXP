import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Notes() {
    const [note, setNote] = React.useState({
        text:"Erica is super cool"
    })

    function handleChange(e) {
        console.log(e.target)
        setNote(prevNote => {
            return {
                ...prevNote,
                text: e.target.value
            }
        })
    }

    return (
        <>
            <span className="text-h2">Notes</span>
            <div className="note">
                <form className="note-form">
                    <textarea 
                        onChange={handleChange}
                        value={note.text}
                        className="note-input" 
                        placeholder="Type to add a note..."
                    />
                </form>

                <div className="note-footer">
                    <span className="text-h3">200 Remaining</span>
                    <RiDeleteBin6Fill 
                        className="delete-icon" 
                        size='1.3rem'
                    />
                </div>
            </div>
        </>
    )
}