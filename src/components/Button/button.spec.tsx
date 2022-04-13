import { render, screen } from "@testing-library/react"
import { Button } from "."

describe("<Button />", () => {
    it("should render default", () => {
        render(<Button>Teste</Button>)

        expect(screen.getByRole('button', { name: /teste/i })).toBeInTheDocument()
    })
})