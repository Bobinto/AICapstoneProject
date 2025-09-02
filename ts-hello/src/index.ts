// src/index.ts
// Minimal example that prints a greeting. You can change the NAME env var to customize the output.

function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

const nameFromEnv = process.env.NAME || "Moringa";
console.log(greet(nameFromEnv));
