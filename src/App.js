import MoscowDistrictMap from './components/MoscowDistrictMap';
import styled from 'styled-components';
import { regions } from './data/regions'
import './App.css';
import Title from './components/Title';
import { useState } from 'react';
import PieChart from './components/PieChart';
import ScatterChart from './components/ScatterChart';

const Section = styled.section`
  height: 100vh;
  width: 95%;
  aspect-ratio: 16 / 9;
  margin: 0 auto;
`

const ChartsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
`


function App() {

  const [city, setCity] = useState([{
    name: 'Московской области',
    image: 'mo.gif',
  }]);

  return (
    <div className="App">
      <Section>
        <Title city={city} setCity={setCity} />
        <ChartsWrapper >
          <PieChart city={city} />
          <MoscowDistrictMap city={city} />
          <ScatterChart city={city} />
        </ChartsWrapper>
      </Section>
    </div>
  );
}

export default App;
