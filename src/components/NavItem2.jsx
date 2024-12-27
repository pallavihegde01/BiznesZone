import { CheckCircle } from "lucide-react";
import { navitem2items } from "../constants";
const NavItem2 = () => {
  return (
    <div id="Solutions" className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Simple
        <span className="bg-gradient-to-r from-purple-500 to-indigo-800 text-transparent bg-clip-text">{" "}Solutions</span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-8 w-full lg:w-1/2">
             <img src="../src/assets/solution.jpg" alt="image" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ut eveniet dignissimos, quam quaerat placeat possimus ab. Voluptate, repellendus eum placeat provident saepe ducimus. Totam, consequuntur. At ad voluptatem ullam!</p>
            {navitem2items.map((item,index) => (
                <div key={index} className="flex mb-6 mt-6">
                    <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                        <CheckCircle />
                    </div>
                    <div>
                        <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                        <p className="text-md text-neutral-500">{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default NavItem2;