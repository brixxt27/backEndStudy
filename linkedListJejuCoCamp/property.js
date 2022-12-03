let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split("");
  }
};

user.fullName = "Jaesang Yoon";

console.log(user.name)
console.log(user.surname);
