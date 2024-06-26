import { Container } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import packageJson from '../../package.json'

const Footer = () => {
  return (
    <Container className="main-content">
      <footer className="footer">
        <Container fluid>
          <p className="text-center mb-0">
            © Fábio Garbato - {new Date().getFullYear()} - Version:{' '}
            {packageJson.version}
          </p>
        </Container>
      </footer>
    </Container>
  )
}

export default Footer
