import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import JobPastedByYouEmpty from './Pages/JobPostedByYouEmpty/JobPastedByYouEmpty';

import {
  BrowserRouter,
  //Switch,
  Route,
  Routes,
} from 'react-router-dom';
import JobPosted from './Pages/JobPosted/JobPosted';

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      {/* <JobPosted /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route
            exact
            path="/no-job-posted"
            element={<JobPastedByYouEmpty />}
          ></Route>

          <Route exact path="/job-posted" element={<JobPosted />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
