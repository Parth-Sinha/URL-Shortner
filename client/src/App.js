import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainDashboard from './components/Maindashboard/MainDashboard';
import Register from './components/Verification/UserRegister';
import UserLogin from './components/Verification/UserLogin'
import Workspace from './components/Workspace'
import Analytics from './components/Analytics/Analytics';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={MainDashboard}/>
        <Route path='/register' Component={Register} />
        <Route path='/login' Component={UserLogin} />
        <Route path='/workspace' Component={Workspace} />
        <Route path='/analytics' Component={Analytics}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
