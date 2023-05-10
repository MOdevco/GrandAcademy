import { Logo } from "../../assets"


const Navbar = () => {
  return (
    <div className="  p-[20px] text-[white] flex sm:justify-between justify-center items-center border-b-[2px] bg-[#232328] border-b-[black] fixed top-0 w-[100%] z-10">
        <div className="Logo flex items-center gap-2">
            <img src={Logo} alt="" className=" sm:w-[50px] w-[25px] rounded-[50px]" />
            <h1 className=" sm:text-[30px] text-[20px] text-white">Grand Academy</h1>
        </div>

        <div className="sm:block hidden ">
          <div className="flex items-center sm:gap-5 gap-2">
            <h3>Masul:</h3>
            <i class="fa-solid fa-user"></i>
            <h2>Diyorbek Ahmadjonov</h2>
          </div>
        </div>

        
    </div>
  )
}

export default Navbar