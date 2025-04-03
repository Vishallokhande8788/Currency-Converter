# Currency Converter

## Overview
This is a simple Currency Converter application built using React.js and Tailwind CSS. It allows users to convert amounts between different currencies using live exchange rates fetched from an API.

## Features
- Convert currency between different options.
- Swap currencies with a single click.
- Live exchange rate updates.
- Responsive UI with Tailwind CSS.

## Technologies Used
- React.js
- Tailwind CSS
- Vite
- Fetch API

## API Used
This project uses the **ExchangeRate-API** to fetch real-time currency exchange rates.
- API Endpoint: `https://api.exchangerate-api.com/v4/latest/{currency}`

## Deployment
This project is deployed on **Netlify**. You can access the live version here:
- **Live Demo**: [Currency Converter](https://currency-converter8788.netlify.app/)

### Deploying on Netlify
To deploy the project on Netlify, follow these steps:
1. Push your code to GitHub.
2. Sign in to [Netlify](https://www.netlify.com/).
3. Click on **"New site from Git"**.
4. Select your repository and configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist` (for Vite projects)
5. Click **"Deploy"** and wait for Netlify to build and deploy your site.

## Installation
To run the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. Start the development server:
   ```sh
   pnpm run dev
   ```

## Project Structure
```
.
├── src/
│   ├── components/
│   │   ├── InputBox.js  # Component for input fields
│   ├── hooks/
│   │   ├── useCurrencyInfo.js  # Custom hook to fetch currency data
│   ├── App.js  # Main application file
│   ├── main.js  # Entry point
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js
├── README.md
```

## Usage
1. Select the "From" and "To" currencies.
2. Enter the amount you wish to convert.
3. Click the "Convert" button to get the converted amount.
4. Use the "Swap" button to exchange the selected currencies.

## Dependencies
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.17"
  },
  "devDependencies": {
    "vite": "^6.2.0",
    "eslint": "^9.21.0"
  }
}
```

## License
This project is licensed under the MIT License.

