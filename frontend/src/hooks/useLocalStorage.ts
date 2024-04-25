import React from "react";

export function useDateTimeLocalStorage() {
    const [value, setValue] = React.useState("")
    const [init, setInit] = React.useState(false)
    const dateTime: string | null = localStorage.getItem("datetime")

    if (init === false) {
        dateTime !== null 
            ? setValue(new Date(dateTime).toString()) 
            : setValue(new Date().toString())
        setInit(true)
    }

    React.useEffect(() => {
        localStorage.setItem("datetime", value)
    }, [value])

    return [value, setValue] as const
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

    return [value, setValue] as const
}