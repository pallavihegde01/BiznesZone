import { NavItem1items } from "../constants";
const NavItem1 = () => {
  return (
    <div id="Services" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        {/* <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">Service</span> */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          We Provide Best
          <span className="bg-gradient-to-r from-purple-500 to-indigo-800 text-transparent bg-clip-text">{" "}Services</span>
          </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {NavItem1items.map((item,index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/4 mt-11">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-purple-700 justify-center items-center rounded-full">
                {item.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{item.text}</h5>
                <p className="text-md p-2 mb-4 text-neutral-500">{item.description}</p>
                <a href="#" className="py-3 px-1 mx-3 rounded-md ">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavItem1;