
import { GoogleGenAI, Type } from "@google/genai";
import type { Discovery } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const discoverySchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      year: {
        type: Type.NUMBER,
        description: "The year of the discovery. Must be between the current year and the time jump limit.",
      },
      title: {
        type: Type.STRING,
        description: "A concise, exciting title for the discovery (e.g., 'Quantum Entanglement Communicator Achieved').",
      },
      summary: {
        type: Type.STRING,
        description: "A brief, one-sentence summary of the discovery.",
      },
      details: {
        type: Type.STRING,
        description: "A more detailed paragraph (2-4 sentences) explaining the breakthrough, its mechanism, and its immediate implications.",
      },
      category: {
        type: Type.STRING,
        description: "A category for the discovery from the following options: 'Theoretical Breakthrough', 'Engineering Advance', 'Biotechnology', 'Materials Science', 'Energy', 'Computer Science', 'Physics', 'Space Exploration'.",
      },
    },
    required: ["year", "title", "summary", "details", "category"],
  },
};

export const generateDiscoveries = async (
  topic: string,
  currentYear: number,
  timeJump: number,
  lastDiscovery: Discovery | null
): Promise<Discovery[]> => {
  const systemInstruction = `You are a world-class futurist and R&D simulator. Your task is to predict and generate a plausible timeline of technological discoveries and breakthroughs based on a given starting point. Respond ONLY with the structured JSON data as defined by the schema. Do not add any conversational text or markdown formatting around the JSON response.`;

  const lastDiscoveryContext = lastDiscovery 
    ? `The last major breakthrough was '${lastDiscovery.title}' in the year ${lastDiscovery.year}.`
    : 'This is the very beginning of the research.';

  const prompt = `
    The current year is ${currentYear}. The research focus is on "${topic}".
    ${lastDiscoveryContext}
    Generate a plausible list of 1 to 3 significant discoveries or breakthroughs that could occur in the next ${timeJump} years (i.e., between ${currentYear + 1} and ${currentYear + timeJump}).
    The discoveries should build upon each other logically if possible. Ensure the generated 'year' for each discovery is within this range and is sequential.
    Adhere strictly to the provided JSON schema.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: discoverySchema,
        temperature: 0.8,
      },
    });

    const jsonString = response.text.trim();
    const discoveries = JSON.parse(jsonString) as Discovery[];
    
    // Sort just in case the model returns them out of order
    return discoveries.sort((a, b) => a.year - b.year);

  } catch (error) {
    console.error("Error generating discoveries from Gemini:", error);
    throw new Error("Failed to parse or receive data from the AI model.");
  }
};
