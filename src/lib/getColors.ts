const HEX_CHARACTERS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexCode(): string {
  return (
    "#" +
    Array(6)
      .fill("")
      .map(
        () => HEX_CHARACTERS[Math.floor(Math.random() * HEX_CHARACTERS.length)]
      )
      .join("")
  );
}

export default function getColors(): string[] {
  return [getRandomHexCode(), getRandomHexCode(), getRandomHexCode()];
}
