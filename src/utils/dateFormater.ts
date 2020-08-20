export default function dateFormater(dateP: string): string {
  const date = dateP.split("T");
  const year = date[0].split("-")[0];
  const month = date[0].split("-")[1];
  const day = date[0].split("-")[2];

  return `${day}/${month}/${year}`;
}
