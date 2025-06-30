# Weather Forecast App

## 1. Documentation
For detailed documentation, see the Notion page:
[Weather Forecast App Documentation](https://www.notion.so/PUBLIC-Weather-Forecast-App-21c1ef16666a80ce8381d0a260fd22f4?pvs=21)

## 2. How to Start Development
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 3. How to Setup Environment Variables
1. Copy content `.env.example` to `.env`:
2. Edit `.env` and set your environment variables as needed (e.g., API keys, endpoints).
3. Restart the dev server after changes.

## 4. How to Deploy to Testing Environment
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy to testing environment:
   ```sh
   npm run deploy:testing
   ```
3. Now your build accessible on: https://cutscenedev.github.io/weather-forecast/

## 5. Vite Template Used
This project is based on the [reactjs-vite-tailwindcss-boilerplate](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate) template.
