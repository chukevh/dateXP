import { render } from "@testing-library/react"
import DateTime from "../../src/pages/dashboard/modules/DateTime"

describe("DateTime Component Test", () => {
    it("should allow user to reset time", async () => {
        const renderedApp = render(<DateTime />)
        const resetBtn = await renderedApp.getByRole("button", {name: "Reset"})

    })
})