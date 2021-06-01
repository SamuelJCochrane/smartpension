import { render } from "@testing-library/react"
import user from "@testing-library/user-event"
import React from "react"
import fileString from "../../__tests__/__mocks__/fileString"
import Form from "../Form"

describe("App", () => {
  it("should allow a user to upload a log file ", () => {
    const setFile = jest.fn()
    const { getByLabelText } = render(<Form setFile={setFile} />)

    const file = new File([fileString], "server.log", { type: "" })
    const fileInput = getByLabelText("Upload a log file:")

    user.upload(fileInput, file)

    expect(setFile).toHaveBeenCalledTimes(1)
  })
})
