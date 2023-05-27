import { PromptBuilder } from 'prompt-builder';

const promptBuilder = new PromptBuilder("Tell me a {{jokeType}} joke");

const prompt = promptBuilder.build({
  jokeType: "funny",
});

console.log(prompt);