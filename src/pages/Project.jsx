import Header from '../components/Header'
import axios from "axios";
import "../pages/style.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './project.css'
function Project() {
  const [projects, setProject] = useState([]);
  useEffect(() => {
      axios.get("data.json")
          .then((res) => {
              setProject(res.data.projects)
          })
  }, [])
  return (
    <>
      <Header />
      <section className="allprojectsec">
      <h3 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">All Projects</h3>
      <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="" className="waves" />
      <Container>
          <Row>
              {projects.map((project) => (
                  <Col md={4} sm={12} key={project.id}>
                      <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
                          <img src={project.photo} alt="" />
                          <h5>{project.title}</h5>
                          <p>{project.description}</p>
                          <a href={project.link} target="_blank">View</a>
                      </div>
                  </Col>
              ))}
          </Row>
      </Container>
  </section>
    </>
  )
}

export default Project