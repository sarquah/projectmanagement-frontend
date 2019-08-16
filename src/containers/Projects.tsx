/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import spinner from '../images/spinner.gif'
import styles from './Projects.module.scss'

const Projects: React.FC = () => {
  const [projectNames, setProjectNames] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:65100/api/v1/project/projects')
      .then(response => {
        setProjectNames(
          response.data.map((project: any) => project.name),
        )
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  return (
    <Col>
      <h2 className={styles.header}>Projects</h2>
      <ListGroup>
        {projectNames.length > 0 ? (
          projectNames.map((name: any) => (
            <ListGroup.Item key={name}>{name}</ListGroup.Item>
          ))
        ) : (
          <img
            src={spinner}
            alt="spinner"
            className={styles.loading}
          />
        )}
      </ListGroup>
    </Col>
  )
}

export default Projects
