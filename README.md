# Domain TLD Validator

This package provides a simple function to validate domain names based on general domain formatting rules and Top-Level Domain (TLD) verification. It checks whether a given domain is correctly formatted and contains a valid TLD.

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
