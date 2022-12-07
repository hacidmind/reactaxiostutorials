import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import User from './components/User';
import Layout from './hoc/Layout';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
 
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/user' element={<User />} />
          <Route exact path='/adduser' element={<AddUser />} />
          <Route exact path='/users/:id/' element={<UserPage />} />
          <Route exact path='/edituser/:id' element={<UpdateUser />} />
          {/* <Route exact path='/blogs/:id/' element={<BlogDetail />} /> */}
        </Routes>
      </Layout>
    </Router>
  ); 
}
 
export default App;

