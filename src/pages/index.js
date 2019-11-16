import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import { Button } from "antd"

export default () => (
    <div style={{ color: `purple` }}>
      <Header headerText={"HOLa"}/>
    <p>What a world.</p>
      <Button href="/about" type='link'>
      hola
      </Button>
  </div>
    )