// pages/api/generate.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createVertex } from '@ai-sdk/google-vertex';

type Data = {
  text?: string;
  message?: string;
};

const vertex = createVertex({
  project: process.env.GOOGLE_VERTEX_PROJECT, // Load from environment variable
  location: 'us-central1', // Adjust as needed
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { prompt } = req.body;

  try {
    const response = await vertex.doGenerate({
      inputFormat: 'messages',
      mode: {
        type: 'regular'
      },
      prompt: [
        { role: 'user', content: prompt || 'Write a vegetarian lasagna recipe for 4 people.' }
      ]
    });

    res.status(200).json({ text: response.text });
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).json({ message: 'Error generating text' });
  }
}
