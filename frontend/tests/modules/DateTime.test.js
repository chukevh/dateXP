import { fireEvent, render, screen } from "@testing-library/react"
import DateTime from "../../src/pages/dashboard/modules/DateTime"

describe("DateTime Component Test", () => {
    it("should allow user to reset time", async () => {
        render(<DateTime />)
        const resetBtn = screen.getByRole("button", {name: "Reset"})
        fireEvent.click(resetBtn)
        const dateTimer = screen.getByRole("span")
        console.log(dateTimer)
    })
})