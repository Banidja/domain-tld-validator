import tlds from "./tlds.json";

export function validateDomain(input: string): boolean {
  const MAX_DOMAIN_LENGTH = 253;

  const protocolPattern = /^https?:\/\/|ftp:\/\/|\/\/|^www\./i;
  const domain = input.replace(protocolPattern, "").split("/")[0];

  if (domain.length > MAX_DOMAIN_LENGTH) return false;

  const domainPattern =
    /^[a-zA-Z0-9]+(-?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+(-?[a-zA-Z0-9]+)*)*\.[a-zA-Z]{2,}$/;

  if (!domainPattern.test(domain)) return false;

  const parts = domain.split(".");

  if (parts.length < 2) return false;

  for (const part of parts)
    if (part.startsWith("-") || part.endsWith("-")) return false;

  const tld = parts[parts.length - 1].toUpperCase();

  return tlds.includes(tld);
}
