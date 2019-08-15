import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Projects from './Projects'
import styles from './App.module.scss'

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col className={styles.header}>
          <h1>Project Management App</h1>
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
