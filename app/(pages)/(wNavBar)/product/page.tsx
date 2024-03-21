export default function Product() {
  return (
    <div className="w-full h-full md:px-16 flex flex-col pb-16">
      <div className="w-full h-full flex flex-col lg:h-[600px] lg:flex-row justify-center items-center align-center">
        <div className="w-full xl:w-1/2 lg:h-[400px] flex flex-col justify-center">
          <h1 className="pt-8 w-full text-center text-4xl md:text-5xl font-bold">
            Durable
          </h1>
          <ul className="pt-6 flex flex-col gap-3">
            <li className="text-2xl font-medium text-center">
              IP68 Water and Dust Resistant
            </li>
            <li className="text-2xl font-medium text-center">
              Tested to military specifications
            </li>
            <li className="text-2xl font-medium text-center">
              Drop-proof to 10m
            </li>
          </ul>
        </div>
        <div className="w-full xl:w-1/2 pt-8 h-full flex flex-col items-center justify-center ">
          <img
            className="w-full lg:h-[400px] h-[350px] object-cover"
            src="render1.png"
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col lg:h-[700px] lg:flex-row justify-center items-center align-center pb-10">
        <div className="w-full xl:w-1/2 pt-8 h-full flex flex-col items-center justify-center ">
          <img
            className="lg:block hidden w-full rounded-lg lg:h-[400px] h-[350px] object-cover"
            src="render-on-bike1.png"
          />
        </div>
        <div className="w-full xl:w-1/2 lg:h-[400px] flex flex-col justify-center">
          <h1 className="pt-8 w-full text-center text-4xl md:text-5xl font-bold">
            Designed for you
          </h1>
          <ul className="pt-6 flex flex-col gap-3">
            <li className="text-2xl font-medium text-center">
              Easy to install
            </li>
            <li className="text-2xl font-medium text-center">
              Long battery life
            </li>
            <li className="text-2xl font-medium text-center">Secure</li>
          </ul>
        </div>
        <div className="px-10 py-10">
          <img
            className="lg:hidden  w-full rounded-lg lg:h-[400px] h-[350px] object-cover"
            src="render-on-bike1.png"
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col lg:h-[700px] lg:flex-row justify-center items-center align-center">
        <div className="w-full xl:w-1/2 lg:h-[400px] flex flex-col justify-center">
          <h1 className="pt-8 w-full text-center text-4xl md:text-5xl font-bold">
            Connected, Intelligently
          </h1>
          <ul className="pt-6 flex flex-col gap-3">
            <li className="text-2xl font-medium text-center">
              Inuitive companion app
            </li>
            <li className="text-2xl font-medium text-center">Easy to use</li>
            <li className="text-2xl font-medium text-center">
              Always available
            </li>
          </ul>
        </div>
        <div className="px-10 py-10">
          <img
            className="w-full rounded-lg lg:h-[400px] h-[350px] object-cover"
            src="render-on-bike2.png"
          />
        </div>
      </div>
    </div>
  );
}
