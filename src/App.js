import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Form from "./components/Form"
import List from "./components/List"
import Menu from "./components/Menu"
import parseFile from "./parseFile"

const StyledApp = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const menuItems = ["Page Views", "Unique Page Views"]

function App() {
  const [file, setFile] = useState()
  const [pageViews, setPageViews] = useState()
  const [uniquePageViews, setUniquePageViews] = useState()
  const [currentMenuItem, setCurrentMenuItem] = useState(menuItems[0])

  useEffect(() => {
    file?.text().then((text) => {
      const { pageViews: pv, uniquePageViews: upv } = parseFile(text)
      setPageViews(pv)
      setUniquePageViews(upv)
    })
  }, [file])

  const data = currentMenuItem === menuItems[0] ? pageViews : uniquePageViews

  return (
    <StyledApp>
      <Form file={file} setFile={setFile} />
      <Menu
        items={menuItems}
        disabled={!pageViews}
        onClick={setCurrentMenuItem}
      />
      {pageViews && uniquePageViews && <List data={data} />}
    </StyledApp>
  )
}

export default App
