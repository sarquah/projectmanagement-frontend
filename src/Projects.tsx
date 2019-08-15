/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import spinner from './images/spinner.gif'
import styles from './Projects.module.scss'

const Projects: React.FC = () => {
  const [projectNames, setProjectNames] = useState([])
  useEffect(() => {
    const getProjectData = async () => {
      const result = await axios.get('http://localhost:65100/api/v1/project/projects')
      setProjectNames(result.data.map((project: any) => project.name))
    }
    getProjectData()
  }, [])
  return (
    <div>
      <h2>Projects</h2>
      <ListGroup>
        {projectNames.length > 0 ? (
          projectNames.map((name: any) => <ListGroup.Item key={name}>{name}</ListGroup.Item>)
        ) : (
          <img src={spinner} alt="spinner" className={styles.loading} />
        )}
      </ListGroup>
    </div>
  )
}

export default Projects
