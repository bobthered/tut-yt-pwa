// import dotenv from 'dotenv';
// dotenv.config();

// const apiKey = process.env.API_KEY;
const apiKey = '1d85a75c827d4caba85ae177aee575cd';
const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

export { apiKey, topHeadlinesUrl };
