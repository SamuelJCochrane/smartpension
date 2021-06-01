import React from "react"
import styled from "styled-components"

const StyledForm = styled.div`
  margin: 20px;
`

const Label = styled.label`
  margin-right: 10px;
`;

function Form({ setFile }) {
  function handleFileChange(event) {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0])
    }
  }

  return (
    <StyledForm>
      <form>
        <Label htmlFor="log-upload">Upload a log file:</Label>
        <input
          name="log upload"
          id="log-upload"
          type="file"
          accept=".log"
          onChange={handleFileChange}
        />
      </form>
    </StyledForm>
  )
}

export default Form
