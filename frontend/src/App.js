import './App.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from 'react-router-dom'
import logo from './images/logo.jpg'
import Home from './components/home/Home.js';
import Courses from './components/courses/Courses.js';
import Faculties from './components/faculties/Faculties.js'
import FacultyInfo from './components/faculties/faculty info/FacultyInfo.js'


function App() {
  return (
    <Router>
      <Header logo={logo} />

      <Routes>
        <Route exact path='/' element={<>
          <Home />
          <Courses />
        </>} />
        <Route path='/getFacultiesByCourse/:courseID' element={<>
          <Home />
          <Courses />
          <Faculties />
        </>} />
        <Route path='/facultyInfo/:id' element={<FacultyInfo />} />

      </Routes>

    </Router>
  );
}

export default App;
