import {ChevronsDown} from 'lucide-react';
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-center tracking-wide">
            We create Solutions for
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">{" "}Your Business</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum facilis perferendis vero impedit tenetur, minus enim expedita non magni? Doloribus voluptate reiciendis unde minima ipsam sunt modi earum, molestiae nostrum.</p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-purple-500 to-indigo-500 py-3 px-4 mx-3 rounded-md">Get Started</a>
            {/* <a href="#" className="py-3 px-4 mx-3 rounded-md border">Button</a> */}
        </div>
        {/* <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-purple-700 shadow-indigo-400 mx-2 my-4">
            <source src="" type=""/>
            Video text message
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-purple-700 shadow-indigo-400 mx-2 my-4">
            <source src="" type=""/>
            Video text message
            </video>
        </div> */}
        <div className="mx-6 h-15 w-15 p-5 bg-neutral-900 text-purple-700 justify-center items-center rounded-full">
          <a href="#Services"><ChevronsDown size={31}/></a>
        </div>
    </div>
  )
}

export default HeroSection;