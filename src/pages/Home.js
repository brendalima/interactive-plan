import React from 'react';
import Header from '../components/Header';
import FloorPlan from '../components/FloorPlan';
import FormPerson from '../components/FormPerson';
import FormShapes from '../components/FormShapes';
import List from '../components/List';

function Home() {
  return (
    <div>
      <Header />
      <FloorPlan />
      <List />
      <FormPerson />
      <FormShapes />
    </div>
  )
}

export default Home;