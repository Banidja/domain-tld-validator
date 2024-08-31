import { validateDomain } from "../src/index";

describe("Domain Validator", () => {
  test("Valid domain", () => {
    expect(validateDomain("google.com")).toBe(true);
  });

  test("Domain with valid subdomain", () => {
    expect(validateDomain("sub.google.com")).toBe(true);
  });

  test("Domain with numeric characters", () => {
    expect(validateDomain("123google.com")).toBe(true);
  });

  test("Domain with hyphen in valid position", () => {
    expect(validateDomain("my-domain.com")).toBe(true);
  });

  test("Numeric second-level domain", () => {
    expect(validateDomain("1234.com")).toBe(true);
  });

  test("Invalid TLD", () => {
    expect(validateDomain("example.invalidtld")).toBe(false);
  });

  test("Invalid format", () => {
    expect(validateDomain("justastring")).toBe(false);
  });

  test("Invalid domain syntax", () => {
    expect(validateDomain("-justastring")).toBe(false);
  });

  test("Invalid space in domain", () => {
    expect(validateDomain("goo gle.com")).toBe(false);
  });

  test("Domain with trailing period", () => {
    expect(validateDomain("google.com.")).toBe(false);
  });

  test("Domain with underscore", () => {
    expect(validateDomain("google_com")).toBe(false);
  });
});
