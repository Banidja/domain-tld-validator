import tlds from "./tlds.json";

export function validateDomain(domain: string): boolean {
  const parts = domain.split(".");

  if (parts.length < 2) return false;

  const tld = parts[parts.length - 1].toUpperCase();
  return tlds.includes(tld);
}
