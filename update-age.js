const fs = require("fs");

const birthday = new Date("2007-04-02"); // 🎂 Change this to your birthday!
const today = new Date();

let age = today.getFullYear() - birthday.getFullYear();
const hasHadBirthdayThisYear =
  today.getMonth() > birthday.getMonth() ||
  (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

if (!hasHadBirthdayThisYear) {
  age--;
}

const readmePath = "README.md";
const readme = fs.readFileSync(readmePath, "utf8");

const updated = readme.replace(
  /<!--AGE-->.*?<!--\/AGE-->/,
  `<!--AGE-->${age}<!--/AGE-->`
);

fs.writeFileSync(readmePath, updated);
console.log("✅ README updated with age:", age);
