import Navbar from "./components/NavBar"
import HomePage from "./home/home"
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp } from '@clerk/clerk-react'


function App() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-13 xl:px-28 ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sign-in"
          element={
            <div className="min-h-screen flex items-center justify-center ">
              <div className="w-full max-w-md p-6">
                <SignIn routing="path" path="/sign-in" />
              </div>
            </div>
          }
        />
        <Route
          path="/sign-up"
          element={
            <div className="min-h-screen flex items-center justify-center ">
              <div className="w-full max-w-md p-6">
                <SignUp routing="path" path="/sign-up" />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App
