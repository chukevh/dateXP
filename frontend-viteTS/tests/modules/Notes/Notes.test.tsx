import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it} from "vitest";
import userEvent from "@testing-library/user-event"
import Notes from "../../../src/pages/dashboard/modules/Notes"



describe("Notes module test", () => {
    it.skip("should initialise the note to be blank", async() => {
        const user = userEvent.setup()

        render(<Notes />)

        const input = screen.getByRole("textbox")
        await user.type(input, "Hello World")
        
        const noteElement = screen.getByText("Hello World")
        expect(noteElement).toBeDefined()
    })

    it("should display input on screen when typed", async() => {
        const user = userEvent.setup()

        render(<Notes />)

        const input = screen.getByRole("textbox")
        await user.type(input, "Hello World")
        
        const noteElement = screen.getByText("Hello World")
        expect(noteElement).toBeDefined()
    })

    it("should clear text when trash button is pressed", async() => {
        const user = userEvent.setup()

        render(<Notes />)
        
        let noteElement: HTMLElement | null;
        noteElement = screen.getByText("Hello World")
        expect(noteElement).toBeDefined()

        const deleteBtn = screen.getByLabelText("reset-btn")
        await user.click(deleteBtn)

        noteElement = screen.queryByText("Hello World")
        expect(noteElement).toBeNull()
    })
})