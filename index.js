import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi("fca_live_915gJ2fLDimwfSHWTz00cYHxx7tpnRLtUdgVOA7q");

export async function convertCurrency(fromCurrency, toCurrency, units) {
  try {
    const res = await freecurrencyapi.latest({
      base_currency: fromCurrency,
      currencies: toCurrency,
    });

    if (res.message || res.errors) {
      console.error("API Error:", res.message);
      if (res.errors) console.error("Details:", res.errors);
      return null;
    }

    if (res.data && res.data[toCurrency]) {
      const rate = res.data[toCurrency];
      return rate * units;
    } else {
      console.error(`Could not find the conversion rate for ${toCurrency}. API Response:`, res);
      return null;
    }
  } catch (error) {
    console.error("Network or API Error:", error.message);
    return null;
  }
}