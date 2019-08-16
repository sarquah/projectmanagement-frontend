import React from 'react'
import Col from 'react-bootstrap/Col'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <Col className={styles.header}>
      <h1>Project Management App</h1>
    </Col>
  )
}

export default Header
