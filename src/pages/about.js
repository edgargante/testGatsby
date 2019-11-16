import React from "react"
import Header from "../components/header"
import { Button } from "antd"

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText={"adios"}/>
    <p>Such wow. Very React.</p>
    <Button href="/" type='danger'>
      hola
    </Button>
  </div>

)