# Fashan Currency Converter

A lightweight Node.js package for converting currencies using FreeCurrencyAPI.

## Installation

Stable (recommended):
```bash
npm install fashan--currency-converter
```

Beta (early access to new features, mostly stable):
```bash
npm install fashan--currency-converter@beta
```

Alpha (experimental, may be unstable):
```bash
npm install fashan--currency-converter@alpha
```

Release Candidate (final testing before stable release):
```bash
npm install fashan--currency-converter@rc
```

## Usage

```javascript
import { convertCurrency } from "fashan--currency-converter";

// Example
const result = await convertCurrency("USD", "PKR", 100);

console.log(result);
```

## Features

- Fast currency conversion
- Simple API
- Lightweight
- Supports multiple currencies

## Requirements

- Node.js 18+

## License

Apache-2.0
