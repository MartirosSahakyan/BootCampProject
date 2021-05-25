class Person {
  constructor({ firstName, lastName, gender, age }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }

  toString() {
    return `${this.firstName} ${this.lastName} ${this.age} years old`;
  }
}

const person1Info = {
  firstName: "John",
  lastName: "Smith",
  gender: "fmale",
  age: 25,
};

const student1Info = {
  year: 1,
  fee: 5000,
  program: [
    {
      programName: "Math",
      grade: 10,
    },
    {
      programName: "English",
      grade: undefined,
    },
  ],
};

class Student extends Person {
  constructor({ firstName, lastName, gender, age }, { year, fee, program }) {
    super({ firstName, lastName, gender, age });
    this.year = year;
    this.fee = fee;
    this.program = program;
  }

  passExam(programName, grade) {
    const incrementGrade = (el) => {
      if (el.programName === programName) {
        if (el.grade) {
          el.grade += grade;
        } else {
          el.grade = 0 + grade;
        }
      }
    };
    this.program.forEach(incrementGrade);
    let isAllPassed = this.program.every((el) => el.grade >= 50);
    if (isAllPassed) {
      this.year++;
    }
  }

  isAllPassed() {
    return this.program.every((el) => el.grade >= 50);
  }
}

const student1 = new Student(person1Info, student1Info);

student1.passExam("English", 50);
console.log(student1.isAllPassed());
student1.passExam("Math", 70);
console.log(student1.year);
console.log(student1.toString());
