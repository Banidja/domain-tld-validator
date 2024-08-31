import tlds from "./tlds.json";

export function validateDomain(domain: string): boolean {
  const domainPattern =
    /^(?!www\.|http:\/\/|https:\/\/)([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  const isValidDomain = domainPattern.test(domain);

  if (!isValidDomain) return false;

  const parts = domain.split(".");

  if (parts.length < 2) return false;

  const tld = parts[parts.length - 1].toUpperCase();

  return tlds.includes(tld);
}
