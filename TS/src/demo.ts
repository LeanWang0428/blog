type User = { name: string, age: number };

const useArr: User[] = [
  {
    name: 'lean',
    age: 18
  }
];

interface Person {
  name: string,
  age?: number, // ? 表示age属性非必须
  readonly gender?: string, // readonly表示当前属性只读
  [propName: string]: any; // 可以增加其他属性
  say(): string; // 方法say必须且返回值为string
}

const getPersonName = (person: Person): void => {
  console.log(person.name, person.gender);
}

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
}

const person = {
  name: 'lean',
  gender: 'male',
  other: '...',
  say() {
    return 'say'
  }
}

getPersonName(person);

class User1 implements Person {
  name = 'lee';
  say() {
    return 'say'
  }
}

interface Student extends Person {
  study(): string
}

interface SayHi {
  (str: string): string
}

const sayHi: SayHi = (word: string) => {
  return word;
}

class Single {
  private static instance: Single;
  private constructor() { };
  sayHi() {
    return 'hi'
  }
  static getInstance() {
    if (!Single.instance) {
      Single.instance = new Single();
    }
    return this.instance;
  }
}

const s1 = Single.getInstance();
const s2 = Single.getInstance();

console.log(s1 === s2);

interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

// 类型断言
function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}

// in 语法来做类型保护

function trainAnimalAgain(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

// 枚举类型
enum Status {
  OFFLINE = 1, // 默认值
  ONLINE,      // 2
  DELETED      // 3
}

console.log(Status[0]) // undefined

// 泛型 泛指的类型

function join<T>(first: T, second: T) {
  return `${first}${second}`
}

function map<T>(params: T[]) { // or Array<T>
  return params
}

join<number>(1, 2);
map<string>(['1'])
