import { Api } from "sst/node/api";

export default async function TestPage() {
  const results = await fetch(Api.api.url + "/test");

  console.log(await results.text());

  return (
    <div className="flex flex-col p-20 h-full w-full items-center">
      <h1 className="text-4xl font-bold ">Testing Page</h1>
    </div>
  );
}
