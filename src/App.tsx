import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Projects from './containers/Projects'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Projects />
      </Row>
    </Container>
  )
}

export default App
