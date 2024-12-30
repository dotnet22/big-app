type Args = {
  length: number;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSpecialChars: boolean;
};

export function generatePassword({
  length,
  includeUppercase,
  includeNumbers,
  includeSpecialChars,
}: Args) {
  if (!length || typeof length === "string") {
    return new Error("Please provide password length");
  }

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=<>?/{}[]";

  let validChars = lowercaseChars;
  let password = "";

  if (includeUppercase) validChars += uppercaseChars;
  if (includeNumbers) validChars += numberChars;
  if (includeSpecialChars) validChars += specialChars;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars[randomIndex];
  }

  return password;
}
