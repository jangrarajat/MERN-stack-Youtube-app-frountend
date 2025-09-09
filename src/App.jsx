import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import User from './pages/User'
function App() {
  return (
    <Routes>

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/user' element={<User />}/>
      </Route>

      <Route element={<PublicRoute />}>
        <Route path='/login' element={<Login />} />
        <Route path='signup' element={<Registration />} />

      </Route>

    </Routes>

  );
}

export default App;
