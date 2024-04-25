import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import DateTime from "../../../src/pages/dashboard/modules/DateTime"

describe("DateTime Component Test", () => {
    it("should initialize the timer to be 0", () => {
        render(<DateTime />)
        const timerElement = screen.getByText("0 seconds")
        expect(timerElement).toBeDefined()
    })

    it.skip("should increase timer automatically", async () => {
        render(<DateTime />)
        vi.useFakeTimers()

        setTimeout(() => {
            console.log("Delayed for 1 second")

        }, 1000)
        
        const timerElement = screen.getByText("1 seconds")
        expect(timerElement).toBeDefined()
    })

    it("should reset time to 0 when clicked", async () => {
        render(<DateTime />)
        
        const resetBtn = screen.getByRole("button", {name: "Reset"})
        fireEvent.click(resetBtn)

        const timerElement = screen.getByText("0 seconds")
        expect(timerElement).toBeDefined()
    })
})