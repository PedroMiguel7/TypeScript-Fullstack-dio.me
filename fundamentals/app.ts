class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showName() {
    console.log(this.name);
  }
}

const user = new User("John", 30);
const otherUser = new User("Jane", 25);

user.showName();
otherUser.showName();
