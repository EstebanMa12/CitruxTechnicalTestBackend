/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const OpenAI = require("openai");
const cheerio = require("cheerio");
const axios = require("axios");
const dotenv = require('dotenv');

(async () => {
    await dotenv.config();
    console.log( '1',process.env.OPENAI_API_KEY_2); // Ahora puedes acceder a las variables de entorno
    console.log( '2',process.env.PORT); // Ahora puedes acceder a las variables de entorno
  })();

console.log('3',process.env.OPENAI_API_KEY_2)
console.log('4',process.env)

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// async function main(url) {
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);
//     const title = $('title').text();
//     const content = $('p').text();
//     const completion = await openai.chat.completions.create({
//         messages: [
//             {
//                 role: "system",
//                 content: "You are an Article Summarizer AI who will be in charge of providing summaries and answering questions according to the user's needs." 
//             },
//             {
//                 role: "system",
//                 content: "The following is an article about " + title + ". Please summarize it."
//             },
//             {
//                 role: "user",
//                 content: content
//             }
//         ],
//         model: "gpt-3.5-turbo",
//     });

//     console.log(completion.choices[0]);
// }

// main("https://es.wikipedia.org/wiki/Wikipedia:Portada");