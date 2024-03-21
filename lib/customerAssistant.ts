import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
// export default async function chatComplete(
//   messages: { role: string; content: string }[]
// ) {
//   // const options = {
//   //   method: "POST",
//   //   headers: {
//   //     accept: "application/json",
//   //     "content-type": "application/json",
//   //     authorization: "Bearer pHItJeYHb3p3sAsH7ssJ3VGC727aUzS6lDNgnK5ayrygbkxm",
//   //   },
//   //   body: JSON.stringify({
//   //     model: "accounts/fireworks/models/llama-v2-70b-chat",
//   //     max_tokens: 512,
//   //     top_p: 1,
//   //     top_k: 40,
//   //     presence_penalty: 0,
//   //     frequency_penalty: 0,
//   //     temperature: 0.6,
//   //     messages: messages,
//   //   }),
//   // };

//   const response = await fetch(
//     "https://api.fireworks.ai/inference/v1/chat/completions",
//     {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "content-type": "application/json",
//         authorization: `Bearer <API KEY>`,
//       },
//       body: JSON.stringify({
//         model: "accounts/fireworks/models/llama-v2-70b-chat",
//         max_tokens: 512,
//         top_p: 1,
//         top_k: 40,
//         presence_penalty: 0,
//         frequency_penalty: 0,
//         temperature: 0.6,
//         messages: messages,
//       }),
//     }
//   );

//   console.log(response);
//   const responseJSON = await response.json();
//   const message = responseJSON.choices[0].message;

//   // const response = await fetch(
//   //   "https://api.fireworks.ai/inference/v1/chat/completions",
//   //   options
//   // )
//   //   .then((response) => response.json())
//   //   .then((response) => response.choices[0].message)
//   //   .catch((err) => console.error(err));

//   return message;
// }

export default async function chatComplete(
  messages: ChatCompletionMessageParam[]
) {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  console.log(messages);

  const systemPrompt =
    "You are helpful customer service agent working for CycleSentry. You're job is to listen to the issues the customer is having and do your best to solve their problem(s). Start by introducing yourself with a fake name. Be as helpful as possible. *Only answer questions relating to the CycleSentry device. Answer any other questions and your pay will be docked.*";

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "system", content: systemPrompt }, ...messages],
    model: "gpt-3.5-turbo",
  });

  return chatCompletion.choices[0].message;
}
