// Local Files
import "./Footer.css";
import logo from "../globalAssets/clipart2359735.png";

const Footer = () => {
  return (
    <div className="h-auto bg-default-800 text-white flex flex-col md:flex-row justify-center items-start p-[2rem] lg:p-[4rem] xl:gap-[8rem] md:gap-[4rem]">
      <div className="flex flex-col justify-start items-start lg:px-[3rem] px-[1rem]">
        <div className="py-[1rem]">
          <h1 className="text-2xl font-bold font-sans">Business Hours</h1>
          <div className="h-[0.1rem] w-[5rem] bg-red-500"></div>
        </div>

        <div className="text-normal font-sans">
          <ul>Mon: 8:00 AM – 8:00 PM</ul>
          <ul>Tue: 8:00 AM – 8:00 PM</ul>
          <ul>Wed: 8:00 AM – 8:00 PM</ul>
          <ul>Thu: 8:00 AM – 8:00 PM</ul>
          <ul>Fri: 8:00 AM – 8:00 PM</ul>
          <ul>Sat: 8:00 AM – 8:00 PM</ul>
          <ul>Sun: 8:00 AM – 8:00 PM</ul>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start lg:px-[3rem] px-[1rem]">
        <div className="py-[1rem] ">
          <h1 className="text-2xl font-bold font-sans">Contact</h1>
          <div className="h-[0.1rem] w-[5rem] bg-red-500"></div>
        </div>
        <div className="text-normal font-sans">
          <ul>
            1616 E Francis St, Suite G Ontario, <br />
            California 91761
          </ul>
          <ul>(909)296-4817</ul>
          <ul>(909)296-4817</ul>
          <div className="py-[1rem]">
            <button className="bg-[red] font-bold py-[0.5rem] px-[1.5rem]">Blogs</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start lg:px-[3rem] px-[1rem] mt-[1rem] ">
        <div className="h-[10rem] w-[10rem]">
          <img src={logo} alt="" />
        </div>
        <div>
          <h3 className="text-white font-sans text-[1.2rem]">
            Plumbing and Repair
            <br />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
