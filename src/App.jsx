
import { Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import { SignIn } from '@clerk/clerk-react'
import HomePage from './home/home'
=======
import { SignIn, SignUp } from '@clerk/clerk-react'
import Pipline from "./pipline/pipline"
>>>>>>> 04a2e1cb0bfc7bdbcc0db35d396a077d6f26d6a7


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
<<<<<<< HEAD
        
=======
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
>>>>>>> 04a2e1cb0bfc7bdbcc0db35d396a077d6f26d6a7
      </Routes>
  )
}

export default App
