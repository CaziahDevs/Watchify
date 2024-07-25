import './App.css'
import VizObject from './components/VizObject'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <VizObject />
      </MainContent>
      {/* <Footer /> */}
    </AppContainer>
  )
}

export default App