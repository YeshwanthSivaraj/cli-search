import axios from "axios";
import chalk from "chalk";

export default async function searchResults(searchTerm, apiKey, cx) {
  const url = getUrl(searchTerm, apiKey, cx);
  try {
    const data = await axios.get(url);

    if (data.status === 200) {
      const { items } = data.data;
      const results = [];

      for (const item of items) {
        const { title, link, snippet } = item;
        results.push({ title, link, snippet });
      }

      return results;
    }

    return "No results found";
  } catch (error) {
    console.log(chalk.redBright(error.message));
  }
}

function getUrl(searchTerm, apiKey, cx) {
  return `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&num=5&q=${searchTerm}`;
}
