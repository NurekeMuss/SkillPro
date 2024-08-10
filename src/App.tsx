import { Routes,Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/header'
import { SearchForm } from './components/Search/SearchForm'
import { Welcome } from './components/Welcome/welcome'
import { JobPage } from './components/JobPage/JobPage'
function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <SearchForm />
              <Welcome />
            </>
          } 
        />
        <Route path="/job" element={<JobPage />} />
        <Route path="/employers"  />
        <Route path="/candidates"  />
        <Route path="/pricingPlans"  />
        <Route path="/support"  />
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
