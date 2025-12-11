import Navbar from "./components/NavBar"
import HomePage from "./home/home"
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp } from '@clerk/clerk-react'
import Pipline from "./pipline/pipline"


function App() {
  return (
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
        <Route path="/pipline" element={<Pipline />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
  )
}

export default App
