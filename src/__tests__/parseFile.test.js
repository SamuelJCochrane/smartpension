import parseFile from "../parseFile"
import fileString from "./__mocks__/fileString"

describe("parseFile", () => {
  it("should return two maps of page views and unique page views", () => {
    const { pageViews, uniquePageViews } = parseFile(fileString)
    expect(pageViews).toEqual(
      new Map([
        ["/help_page/1", 6],
        ["/contact", 4],
        ["/home", 4],
        ["/about/2", 4],
        ["/index", 4],
        ["/about", 2],
      ])
    )

    expect(uniquePageViews).toEqual(
      new Map([
        ["/about", 2],
        ["/about/2", 3],
        ["/contact", 3],
        ["/help_page/1", 5],
        ["/home", 4],
        ["/index", 4],
      ])
    )
  })
})
