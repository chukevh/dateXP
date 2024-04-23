import React from "react";

export function useDateTimeLocalStorage() {
    const [value, setValue] = React.useState("")
    const [init, setInit] = React.useState(false)
    const dateTime = localStorage.getItem("datetime")

    if (init === false) {
        dateTime !== null 
            ? setValue(new Date(dateTime)) 
            : setValue(new Date())
        setInit(true)
    }

    React.useEffect(() => {
        localStorage.setItem("datetime", value)
    }, [value])

    return [value, setValue]
}

export function useNoteLocalStorage() {
    const [value, setValue] = React.useState("")
    const [init, setInit] = React.useState(false)
    const note = localStorage.getItem("note")
    
    if (init === false) {
        note !== null 
            ? setValue(note) 
            : setValue("")
        setInit(true)
    }

    React.useEffect(() => {
        localStorage.setItem("note", value)
    }, [value])

    return [value, setValue]
}