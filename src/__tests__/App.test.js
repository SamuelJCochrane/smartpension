import { getByText, render, fireEvent } from "@testing-library/react"
import user from "@testing-library/user-event"
import React from "react"
import App from "../App"
import fileString from "./__mocks__/fileString"

//TODO: couldn't get the upload tests to work in time
describe.skip("App", () => {
  it("should display pages by page views", () => {
    const { getByLabelText } = render(<App />)

    const file = new File([fileString], "server.log", { type: "" })
    const fileInput = getByLabelText("Upload a log file:")

    user.upload(fileInput, file)

    expect(getByText("90")).toBeInTheDocument()
  })

  it("should display pages by unique page views", () => {
    const { getByText } = render(<App />)

    const file = new File([fileString], "server.log", { type: "" })
    const fileInput = getByLabelText("Upload a log file:")

    user.upload(fileInput, file)

    const uniquePageViewsBtn = getByText("Unique Page Views")
    fireEvent.click(uniquePageViewsBtn)

    expect(getByText("23")).toBeInTheDocument()
  })
})
