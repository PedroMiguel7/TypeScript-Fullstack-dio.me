interface Person {
  name: string;
  age: number;
  profession?: string;
}

const person: Person = {
  name: "Pedro Miguel",
  age: 21,
};

const person2: Person = {
  name: "migule",
  age: 510,
  profession: "Software Engineer",
};

const persons: Person[] | Array<Person> = [person, person2];
const nums: number[] | Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const strings: string[] | Array<string> = ["a", "b", "c", "d", "e", "f", "g"];
