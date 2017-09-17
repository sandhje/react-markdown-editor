import React, { Component } from "react";
import Editor from "../../editor/container/Editor";
import Preview from "../../preview/container/Preview";
import { Grid, Row, Col } from "react-bootstrap";
import '../assets/App.css';

class AppLayout extends Component {
  render() {
    return (
      <div className="App">
        <Grid fluid={true}>
          <Row>
            <Col md={6}>
              <Editor />
            </Col>
            <Col md={6}>
              <Preview />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AppLayout;
