const num: number = 15;

if (num > 15) {
  console.log("Number is greater than 15");
} else if (num === 15) {
  console.log("Number is equal to 15");
} else {
  console.log("Number is less than 15");
}

const typeUser = {
  admin: "admin",
  student: "student",
  teacher: "teacher",
  viewer: "viewer",
};

function validateTypeUser(user: keyof typeof typeUser) {
  console.log(typeUser[user] || "Invalid user type");
}

const user = "admin";
validateTypeUser(user);
validateTypeUser("student");
validateTypeUser("teacher");
validateTypeUser("viewer");
