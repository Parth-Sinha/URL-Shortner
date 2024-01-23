import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainDashboard from './components/Maindashboard/MainDashboard';
import Register from './components/Verification/UserRegister';
import UserLogin from './components/Verification/UserLogin'
import Workspace from './components/Workspace'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={MainDashboard}/>
        <Route path='/register' Component={Register} />
        <Route path='/login' Component={UserLogin} />
        <Route path='/workspace' Component={Workspace} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
