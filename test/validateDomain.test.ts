import { validateDomain } from "../src";

describe("Domain Validator", () => {
  test("Domain with leading hyphen", () => {
    expect(validateDomain("-google.com")).toBe(false);
  });

  test("Domain with trailing hyphen", () => {
    expect(validateDomain("google-.com")).toBe(false);
  });

  test("Domain with consecutive hyphens", () => {
    expect(validateDomain("google--domain.com")).toBe(false);
  });

  test("Domain with leading period", () => {
    expect(validateDomain(".google.com")).toBe(false);
  });

  test("Domain with multiple consecutive periods", () => {
    expect(validateDomain("google..com")).toBe(false);
  });

  test("Domain with special characters in the TLD", () => {
    expect(validateDomain("example.com!")).toBe(false);
  });

  test("Domain with invalid characters in subdomain", () => {
    expect(validateDomain("sub!domain.google.com")).toBe(false);
  });

  test("Empty domain", () => {
    expect(validateDomain("")).toBe(false);
  });

  test("Domain with spaces at the start", () => {
    expect(validateDomain(" google.com")).toBe(false);
  });

  test("Domain with spaces at the end", () => {
    expect(validateDomain("google.com ")).toBe(false);
  });

  test("Domain that exceeds max length", () => {
    const longDomain = "a".repeat(254) + ".com";
    expect(validateDomain(longDomain)).toBe(false);
  });

  test("Domain exactly at max length", () => {
    const validLongDomain = "a".repeat(247) + ".com";
    expect(validateDomain(validLongDomain)).toBe(true);
  });

  test("Domain with no second-level domain", () => {
    expect(validateDomain(".com")).toBe(false);
  });

  test("Domain with dashes but correct format", () => {
    expect(validateDomain("correct-format-with-dashes.com")).toBe(true);
  });

  test("Domain with single character second-level domain", () => {
    expect(validateDomain("g.com")).toBe(true);
  });

  test("Domain with multiple subdomains", () => {
    expect(validateDomain("sub.sub.sub.google.com")).toBe(true);
  });

  test("Domain with a valid TLD", () => {
    expect(validateDomain("google.com")).toBe(true);
  });

  test("Domain starting with www", () => {
    expect(validateDomain("www.google.com")).toBe(true);
  });

  test("Domain starting with https", () => {
    expect(validateDomain("https://www.google.com")).toBe(true);
  });
});
