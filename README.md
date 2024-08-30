# Domain TLD Validator

A simple package to validate domain TLDs.

## Installation

```bash
npm install domain-tld-validator
```

## Usage

```ts
import { validateDomain } from "domain-tld-validator";

console.log(validateDomain("google.com")); // true
console.log(validateDomain("google.whatever123")); // false
```
