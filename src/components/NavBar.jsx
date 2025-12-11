import logo from '../assets/logo.png'
import MobileMenu from './MobileMenu';

const Navbar = () => {
    return ( 
        <nav className="w-full h-20 flex justify-between  pt-9">
            {/* Left  */}
            <div className="object-fit-contain pt-4">
                <img src={logo} alt="Logo" width={160} height={200} />

            </div>
            {/* Right  */}
            <div className='hidden lg:flex gap-10'>
                <a href="/"  className='text-slate-700 font-semibold pt-2 '>Home</a>
                <a href="#about" className='text-slate-700 font-semibold pt-2'>About</a>
                <a href="#Features" className='text-slate-700 font-semibold pt-2'>Features</a>
                <a href="#pricing" className='text-slate-700 font-semibold pt-2'>Pricing</a>
                <a href="#contact" className='text-orange-400 font-semibold border border-orange-400 px-6 pt-2 hover:bg-orange-400 hover:text-white'>Contact Us</a>
            </div>
            <MobileMenu />

        </nav>
     );
}
 
export default Navbar;