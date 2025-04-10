import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import './App.css'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components/index';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
    })
    .finally(()=>{setLoading(false)})
  },[])
  
  // Conditional Redering typw :01
  // if(loading){
  //   return <div>Loading...</div>
  // }

  // Conditional Redering typw :02
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400' >
      <div className="w-full block">
        <Header/>
          <main>
            {/* <Outlet/> */}
          </main>
        <Footer/>
      </div>
    </div>
  ) : null

}

export default App
