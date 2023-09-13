import { Linkedin, Twitter } from "lucide-react";

const Home = () => {
  return (
    <main className="p-[2rem] h-screen w-screen flex flex-col items-center justify-center">
      <p className="text-xs">falah's blogs, coming soon</p>
      <div className="flex justify-center pt-5 ">
        <a className=" mr-4" href="https://twitter.com/ffalah_">
          {" "}
          <Twitter size={15} fill="white" color="white" />
        </a>
        <a href="https://www.linkedin.com/in/mohammed-falah-a4a4b0223/">
          <Linkedin size={15} fill="white" color="white" />
        </a>
      </div>
    </main>
  );
};

export default Home;
