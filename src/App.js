import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import TopHeadlines from './Components/TopHeadlines/TopHeadlines';
import { Container, Row, Col } from 'react-bootstrap';
import Chart from './Components/Chart/Chart';

function App() {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col md={12}>
            <Chart></Chart>
          </Col>
        </Row>
      </Container>
      <TopHeadlines></TopHeadlines>
    </div> 
  );
}

export default App;
