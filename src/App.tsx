import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Projects from './Projects'

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Project Management</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Projects />
        </Col>
      </Row>
    </Container>
  )
}

export default App
