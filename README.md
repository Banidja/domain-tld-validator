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
console.log(validateDomain("sub.google.com")); // true
console.log(validateDomain("go-ogle.com")); // true

console.log(validateDomain("goo gle.com")); // false
console.log(validateDomain("google.com.")); // false
console.log(validateDomain("google.whatever123")); // false
```
