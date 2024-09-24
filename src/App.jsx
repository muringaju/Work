import { AiFillHome } from "react-icons/ai";
import { BsFacebook, BsSearch } from "react-icons/bs"
import { FiHome } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaHouzz } from "react-icons/fa6";
import { RiGroup2Line } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { BiSolidMessageRoundedCheck } from "react-icons/bi";
import image1 from "../src/assets/images/image.jpg"

const App = () =>{
  return (
    <div className=" h-screen bg-gray-100 w-full">
      <nav className=" items-center bg-white h-14 w-full shadow-45 fixed px-4 flex justify-between" >
        {/* first div */}
        <div className=" items-center py-2 flex gap-3">
          <BsFacebook className=" text-blue-500 " size={38}/>
          <div className=" flex items-center relative">
            <BsSearch className=" absolute ml-2"/>
            <input type="text" placeholder="Search facebook" className=" bg-gray-100 p-2 rounded-full w-60 placeholder:text-black placeholder:font-normal placeholder:pl-8"/>
          </div>
        </div>
        {/* second div */}
      <ul className=" flex gap-5  text-gray">
        <li className="  border-blue-500  items-center flex w-20 justify-center border-b-2"><AiFillHome className=" text-blue-500" size={30}/></li>
        <li className="hover:bg-gray-100 w-20 h-12 rounded-lg my-1 flex items-center justify-center duration-300"><MdOutlineOndemandVideo className=" text-gray-700" size={30}/></li>
        <li className="h-12 w-20 items-center flex justify-center rounded-lg m-1 hover:bg-gray-100 duration-300"><FaHouzz className="text-gray-700" size={30}/></li>
        <li className="h-12 w-20 items-center flex justify-center hover:bg-gray-100 m-1 rounded-lg "><RiGroup2Line className="text-gray-700" size={30}/></li>

      </ul>

        {/* third div */}
        <div className="py-1 ">
          <ul className=" flex gap-4">
            <li className=" h-12 w-12  items-center justify-center bg-gray-100   flex hover:bg-gray-100 rounded-full duration-300" ><CgMenuGridO className="text-gray-700  " size={30}/></li>
            <li className="h-12 w-12 flex  items-center justify-center bg-gray-100 rounded-full"><BiSolidMessageRoundedCheck className="text-gray-700" size={30}/></li>
            <li className="h-12 w-12 flex  items-center justify-center rounded-full"><img src={image1} alt="your image" className=" rounded-full h-12 w-12 items-center object-cover" /></li>
          </ul>


        </div>
       

      </nav>
    </div>
  )

}
export default App 