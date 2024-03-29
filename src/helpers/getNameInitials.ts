export function returnNamesInitials(fullNames: string): string {
  const namesArray = fullNames?.split(" ");
  const initials = namesArray?.map((name) => name[0]).join("");
  return initials || "";
}
