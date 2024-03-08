export default function Product() {
  return (
    <div className="w-full h-full flex flex-col xl:flex-row">
      <div className="w-full xl:w-1/2 lg:h-[400px] flex flex-col justify-center">
        <h1 className="pt-8 w-full text-center text-3xl font-bold">
          Durable Design
        </h1>
        <ul className="pt-6 flex flex-col gap-3">
          <li className="text-xl font-medium text-center">
            IP68 Water and Dust Resistant
          </li>
          <li className="text-xl font-medium text-center">
            Tested to military specifications
          </li>
          <li className="text-xl font-medium text-center">Drop-proof to 10m</li>
        </ul>
      </div>
      <div className="w-full xl:w-1/2 pt-8 h-full flex flex-col items-center justify-center ">
        <img
          className="w-full lg:h-[400px] h-[350px] object-cover"
          src="render1.png"
        />
      </div>
    </div>
  );
}
