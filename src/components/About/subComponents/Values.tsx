import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import safety from "../assets/safety.png"
//
const Values = () => {
  return (
    <div className="flex flex-col items-center p-[3rem]">
      <div className="mx-[18%] p-[2rem] text-2xl font-bold text-center">
        At Robinhood Markets, our commitment revolves around serving our customers with integrity and dedication. We
        endeavor to uphold these principles diligently, ensuring our customers receive the best experience every day.
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Card className="w-[400px] bg-blue-300">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col items-center justify-between">
              <h1 className="text-md font-bold">Safety First</h1>
              <p className="text-small text-default-500">Robinhood is a safety-first company</p>
            </div>
          </CardHeader>
          <CardBody>
            <Image alt="nextui logo" height={40} radius="sm" src={safety} width={250} />
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-[400px] bg-blue-300">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-bold">Safety First</p>
              <p className="text-small text-default-500">Robinhood is a safety-first company</p>
            </div>
          </CardHeader>
          <CardBody>
            <Image alt="nextui logo" height={40} radius="sm" src={safety} width={250} />
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-[400px] bg-blue-300">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-bold">Safety First</p>
              <p className="text-small text-default-500">Robinhood is a safety-first company</p>
            </div>
          </CardHeader>
          <CardBody>
            <Image alt="nextui logo" height={40} radius="sm" src={safety} width={250} />
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-[400px] bg-blue-300">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-bold">Safety First</p>
              <p className="text-small text-default-500">Robinhood is a safety-first company</p>
            </div>
          </CardHeader>
          <CardBody>
            <Image alt="nextui logo" height={40} radius="sm" src={safety} width={250} />
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Values;
