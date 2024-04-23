import { describe, expect, it } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import App from '../src/App'

describe('Adds 1 + 2', () => {
    const sum = (x: number,y: number) => x + y

    it('should equal to 3', () => {
        expect(sum(1,2)).toBe(3)
    })
})

describe('Count button test', () => {
    it('should intialize count to 0', () => {
        render(<App />)
        //const btn = screen.getByRole('button')
        const count = screen.queryByText('count is 0')
        expect(count).not.toBeNull()
    })

    it('should increment count when button is clicked', () => {
        render(<App />)
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
        const count = screen.queryByText('count is 1')
        expect(count).not.toBeNull()
    })
})