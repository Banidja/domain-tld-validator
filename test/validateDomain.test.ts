import { validateDomain } from "../src/index";

describe("Domain Validator", () => {
  test("Valid domain", () => {
    expect(validateDomain("google.com")).toBe(true);
  });

  test("Invalid domain", () => {
    expect(validateDomain("example.invalidtld")).toBe(false);
  });

  test("Invalid format", () => {
    expect(validateDomain("justastring")).toBe(false);
  });
});
