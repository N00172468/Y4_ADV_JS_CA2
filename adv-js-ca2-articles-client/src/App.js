import { Component } from 'react';
import Navigation from './Navigation';
import Filters from './Filters';
import ArticleList from './ArticleList';

import './App.css';
import { Container } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Filters />
        <ArticleList />
      </Container>
    );
  }
}

export default App;
