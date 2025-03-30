import { useEffect, useState } from "react";

// Custom hook to fetch currency exchange rates
function useCurrencyInfo(currency = "USD") {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch exchange rate data from the API
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch (HTTP ${res.status})`);
        }
        // Parse response JSON data
        return res.json();
      })
      .then((res) => {
        // Set the data with exchange rates if available
        setData(res.rates || {});
      })
      .catch((error) => {
        // Handle errors (network issue, API failure, etc.)
        console.error("Error fetching currency data:", error);
        setData({}); // Reset data to empty object on error
      });
  }, [currency]); // Runs effect whenever `currency` changes

  // Return exchange rate data
  return data;
}

export default useCurrencyInfo;
