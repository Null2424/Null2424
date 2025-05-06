const fs = require("fs");

try {
  const birthday = new Date("2000-01-01"); // change to your birthday
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  const readmePath = "README.md";

  if (!fs.existsSync(readmePath)) {
    throw new Error("README.md not found at root of repo!");
  }

  const readme = fs.readFileSync(readmePath, "utf8");

  const updated = readme.replace(
    /<!--AGE-->.*?<!--\/AGE-->/,
    `<!--AGE-->${age}<!--/AGE-->`
  );

  fs.writeFileSync(readmePath, updated);
  console.log("✅ README updated with age:", age);
} catch (err) {
  console.error("❌ Script failed:", err.message);
  process.exit(1); // exit with error
}
