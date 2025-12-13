import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return ( 
        <div className="h-screen  bg-black flex flex-col justify-center  items-center gap-5">
            <h2 className="text-8xl font-extrabold font-monospace text-red-600">404</h2>
            <h1 className="text-4xl font-extrabold font-monospace text-red-600">Page Not Found!</h1>
            <button className="bg-white py-2 px-16 font-bold hover:bg-black hover:text-white  mt-5" onClick={()=> navigate(-1)}>Back</button>
        </div>
     );
}
 
export default NotFound;