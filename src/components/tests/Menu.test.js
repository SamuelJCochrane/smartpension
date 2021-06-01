import { render, fireEvent } from "@testing-library/react"
import React from "react"
import Menu from "../Menu"

describe("Menu", () => {
  it("should display menu buttons", () => {
    const handleClick = jest.fn()
    const items = ["One", "Two", "Three"]
    const { getByText } = render(<Menu items={items} onClick={handleClick} />)
    
    items.forEach((item, index) => {
      const itemEl = getByText(item)
      expect(itemEl).toBeInTheDocument()
      fireEvent.click(itemEl)
      expect(handleClick).toHaveBeenCalledTimes(index + 1)
    })
  })
})
