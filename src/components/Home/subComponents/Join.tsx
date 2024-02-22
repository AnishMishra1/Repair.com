import { Button } from "@nextui-org/react";

const Join = () => {
  return (
    <div className="bg-[#0077B9] h-auto md:p-[5rem] p-[2rem] flex-col ">
      <div className="flex justify-center items-center mb-[3rem]">
        <div className="flex flex-col justify-center items-center">
          <div className="p-[1rem]">
            <h1 className="text-center text-4xl font-sans font-semibold text-white">
              Our Team Can Help You With All Your Bathroom & Kitchen Plumbing Repair Needs
            </h1>
          </div>
          <div className="py-[0.5rem]">
            <p className="text-center text-[1rem] text-white font-serif text-1xl">
              As a family-run plumbing business, we recognize the importance of providing excellent customer service.
              While we take great delight in our meticulous and high-quality plumbing services in San Bernardino and
              Upland, CA, and the surrounding areas, maintaining your home’s cleanliness and taking good care of it are
              equally crucial. By tidying up after ourselves and offering kind, straightforward advice, we pledge to
              respect your home and your family. Additionally, you will always receive timely and accurate quotes before
              our licensed plumbing contractors start working, allowing you to feel confident that there will not be any
              unpleasant surprises. We make every effort to guarantee that your experience is of the greatest caliber
              from beginning to end. So, contact the residential plumbing company that cares. We’ll help you resolve
              problems big and small, whether you’re dealing with a broken water heater or an overflowing toilet.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="p-[1rem]">
          <h1 className="text-center text-4xl font-sans font-semibold text-white">
            Our Top-Notch & Prompt Home Plumbing Services
          </h1>
        </div>
        <div className="py-[0.5rem]">
          <p className="text-center text-[1rem] text-white font-serif text-1xl">
            The last thing you want to do when you have a plumbing issue is waste time calling around to find the finest
            plumber for the job. Our full-service plumbing company is always on your side, so you never have to worry
            about spending time looking for a capable expert. From sewage and sprinkler system repairs to toilet
            maintenance, we provide a wide range of plumbing services in Upland, CA, and the surrounding areas. No
            matter the situation, you can rely on us to execute the job properly and resolve any problems immediately.
            For servicing inside, outdoors, or even under your house, rely on our highly qualified plumbing contractors.
            We specialize in the following plumbing services in and around Upland, CA:
          </p>
        </div>
      </div>
      <div className="text-white font-serif text-[1rem] py-[2rem] px-[2rem]">
        <ul className="list-disc">
          <li>Plumbing Repairs</li>
          <li>Drain Cleaning Services</li>
          <li>Drain Inspections</li>
          <li>Water Damage Repair</li>
          <li>Water Heater Installations</li>
          <li>And more!</li>
        </ul>
      </div>

      <div className="flex justify-center items-center  px-[2rem]">
        <button className="bg-red-600 py-[0.8rem] text-[1rem] px-[2rem] text-white">Contact Us Today</button>
      </div>
    </div>
  );
};

export default Join;
