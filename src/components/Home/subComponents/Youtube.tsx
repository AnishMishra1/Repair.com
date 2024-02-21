import { Input, Button, Textarea } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";

const Youtube = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[5rem] bg-[#0077B9] gap-[2rem]">
      <h1 className="text-4xl sm:text-5xl font-bold font-sans  text-white text-center">
        Schedule An Appointment <span className="text-black">Today</span>
      </h1>

      <div className="w-[100%] sm:w-[80%] p-[3rem] bg-white sm:rounded-xl md:drop-shadow-xl border-2 flex flex-col gap-[2rem]">
        <form action="" className="flex flex-col gap-[1rem]">
          <div className="flex flex-col md:flex-row gap-[1rem] md:gap-[2rem]">
            <Input type="text" label="Name" />
            <Input type="phone" label="Phone" />
            <Input type="email" label="Email" />
          </div>
          <Textarea label="Message" name="message" classNames={{ input: "text-black" }} />
          <Button
            variant="shadow"
            type="submit"
            className="text-white bg-[#0077B9] self-center p-[1.5rem]"
            radius="full"
            endContent={<IoSend className="" />}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Youtube;
