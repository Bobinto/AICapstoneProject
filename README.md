# AICapstoneProject
# TypeScript Hello World (Moringa AI Capstone)

Minimal starter showing how to compile and run a TypeScript program on Windows with VS Code.

## Prerequisites
- **Node.js** (LTS recommended) – https://nodejs.org
- **Git** – https://git-scm.com/downloads
- **VS Code** – https://code.visualstudio.com/

## Setup (one-time)
```powershell
# 1) Create and enter project folder
mkdir ts-hello
cd ts-hello

# 2) Initialize npm and install dev dependencies
npm init -y
npm install -D typescript @types/node

# 3) Create tsconfig.json (already provided in this repo)
# If you need to recreate it:
npx tsc --init --rootDir src --outDir dist --esModuleInterop --module commonjs --target ES2019 --strict
```

## Build & Run
```powershell
# Compile TypeScript -> JavaScript (dist/)
npx tsc

# Run the compiled code
node dist/index.js

# Optional: customize the name
setx NAME "Bobb"
# restart the terminal for setx to take effect, then:
node dist/index.js
```

## Scripts
```powershell
npm run build
npm start
```

## GitHub (push your repo)
```powershell
git init
git add .
git commit -m "Initial TypeScript hello world"
git branch -M main

# Create a new GitHub repo in your browser, copy its HTTPS URL, then:
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## .gitignore
- `node_modules/`
- `dist/`
- `.env`

## Common Issues
- **'tsc' not found**: Use `npx tsc` (uses local dev dependency).
- **Push rejected**: Run `git pull --rebase origin main` if you created a README on GitHub first.
- **NAME not changing**: On Windows `setx` requires a new terminal session; or use `set NAME=YourName` for current session.
