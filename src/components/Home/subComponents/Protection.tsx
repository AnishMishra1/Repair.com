import { Button } from "@nextui-org/react";

const Protection = () => {
  return (
    <div className="flex flex-row items-center justify-center bg-gray-200 h-auto ">
      <div className="md:px-[5rem] py-[2rem] px-[1rem]">
        <div className="py-[1rem]">
          <h1 className="text-blue-500 text-3xl font-sans font-semibold">
            Experiencing Frequent Plumbing Problems? Our Fast and Affordable Plumbing Repair Team Has Your Back
          </h1>
        </div>
        <div className="py-[0.5rem] ">
          <p className="text-black font-serif ">
            What’s worse than having a plumbing problem? Not being able to find a quick and affordable plumbing repair
            company. Fortunately, residents in Upland County won’t have to break a sweat. With AYS Plumbing & Rooter in
            your backyard, your repair won’t break the bank.
          </p>
          <p className="text-black font-serif py-[0.5rem]">
            If clogged sink drains are the root cause of your plumbing problems, put the snake away and give our
            full-service plumbing repair team a call for expert{" "}
            <span className="text-yellow-600">drain cleaning services</span>. We can perform thorough{" "}
            <span className="text-yellow-600">drain inspection services </span> to identify the severity of the blockage
            in your plumbing system. If you need a fix that packs a bit more of a punch, our <span className="text-yellow-600">hydro jetting</span>{" "}
            services are quick and easy and restore your drainage system without damaging what’s deep inside. Regardless
            of what you need, our fast and affordable plumbing repair services in Upland, CA, can provide an effective
            solution.
          </p>
        </div>
      </div>
      <div className="border-2 w-[120rem] mr-[1rem] lg:inline-block hidden">
        <img
          src="https://img.freepik.com/free-photo/plumber-with-his-arms-crossed_1368-515.jpg?w=360&t=st=1708518412~exp=1708519012~hmac=97f02fc1db130e7a140d5c335515e91b6366028cc164562fe92a6dcc6657854d"
          alt=""
        />
      </div>
    </div>
  );
};

export default Protection;
