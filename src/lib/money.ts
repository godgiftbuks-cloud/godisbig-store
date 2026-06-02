export function formatPrice(dollars: number): string {
  return `$${dollars.toLocaleString("en-US")}`;
}
