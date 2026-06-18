import logo from '../assets/images/logo.svg';
import DarkModeBtn from './DarkModeBtn';


const NavBar = () => {
  return (
    <div className="bg-element flex justify-between items-center text-color p-2.5 mx-4 sm:mx-12 my-9 rounded-[20px]">
      <img src={logo} alt="" className="w-35. 5 navbar-logo " />
      <DarkModeBtn />
    </div>
  );
}

export default NavBar