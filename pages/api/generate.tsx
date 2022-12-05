import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// test -> should return true
// TODO: pass req.body from form (client) into generatePrompt()
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt('hello'),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(text: string) {
  return `Reply true or false if the text is the word hello.
Text: ${text}
Reply:`;
}
