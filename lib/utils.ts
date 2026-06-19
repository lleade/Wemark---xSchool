export function formatMultilineText(text: string): string {
  return text.replace(/\r\n/g, "\n").trim();
}

export function splitTitleLines(text: string): string[] {
  return formatMultilineText(text)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}
