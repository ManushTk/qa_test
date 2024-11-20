// import Image from "next/image";
// import Bg from '../public/online_tst.jpg'


export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="mainContainer">
        <div className="h-28 flex flex-wrap items-center justify-between px-4 md:px-10">
          <h1 className="text-white font-bold text-2xl md:text-4xl">QA TESTING</h1>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/logincomponents/login">
              <button className="bg-sky-500 text-white font-semibold text-base md:text-xl py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out">
                Login
              </button>
            </a>
            <a href="/logincomponents/signup">
              <button className="bg-sky-500 text-white font-semibold text-base md:text-xl py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out">
                Signup
              </button>
            </a>
          </div>
        </div>


        <section className="p-4 sm:p-5 w-full sm:w-1/2">
          <h1 className="text-4xl font-bold text-blue-800 text-center mt-6 pt-12">
            Effortless Online Testing and Assessment for Educators, Students, and Recruiters!
          </h1>

          <div className="w-96 text-blue-900">
            <p className="mt-14 ml-14 text-lg sm:text-xl md:text-2xl leading-relaxed">
              Our online examination platform offers a streamlined solution for creating, managing, and taking tests with advanced analytics, secure authentication, and seamless user experience.
            </p>
          </div>

          <div className="text-blue-950 ml-14">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mt-8">Features Highlight:</h2>
            <ul className="text-left list-disc list-inside mt-2 text-sm sm:text-base md:text-lg max-w-md  space-y-3">
              <li>Flexible Test Creation</li>
              <li>Advanced Question Bank</li>
              <li>Real-time Test Monitoring</li>
              <li>Automated Evaluation and Scoring</li>
            </ul>
          </div>
        </section>
      </div>

    </div>
  );
}
