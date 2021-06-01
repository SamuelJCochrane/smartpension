import React from "react"
import { render } from "@testing-library/react"
import List from "../List"

describe("List", () => {
  it("should display a list of pages in descending order of views", () => {
    let data = new Map([
      ["page/1", 11],
      ["page/2", 179],
      ["page/3", 0],
    ])
    const { container } = render(<List data={data} />)

    expect(container.firstChild.firstChild.firstChild.textContent).toBe("page/2")
    expect(container.firstChild.firstChild.lastChild.textContent).toBe("179")

    expect(container.firstChild.childNodes[1].firstChild.textContent).toBe("page/1")
    expect(container.firstChild.childNodes[1].lastChild.textContent).toBe("11")

    expect(container.firstChild.childNodes[2].firstChild.textContent).toBe("page/3")
    expect(container.firstChild.childNodes[2].lastChild.textContent).toBe("0")
  })
})
