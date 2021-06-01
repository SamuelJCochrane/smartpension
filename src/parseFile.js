function parseFile(file) {
  const fileLines = file.split("\n")
  const [pageViews, ipsPerPage] = fileLines.reduce(
    (acc, line) => {
      const [page, ip] = line.split(" ")
      if (page === "") {
        return acc
      }
      if (acc[0].has(page)) {
        acc[0].set(page, acc[0].get(page) + 1)
      } else {
        acc[0].set(page, 1)
      }

      if (acc[1].has(page)) {
        acc[1].set(page, new Set([...acc[1].get(page), ip]))
      } else {
        acc[1].set(page, new Set([ip]))
      }
      return acc
    },
    [new Map(), new Map()]
  )

  const uniquePageViews = new Map()
  ipsPerPage.forEach((value, key) => {
    uniquePageViews.set(key, value.size)
  })

  return {
    pageViews,
    uniquePageViews,
  }
}

export default parseFile
