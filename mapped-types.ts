type Keys = 'option' | 'isOn';
type Flags = {[ K in Keys ]: boolean };

type Readonly2<T> = {readonly [ P in keyof T ]: T[ P ]; }
type Partial2<T> = {[ P in keyof T ]?: T[ P ]};

class Person {
  name: string;
  age: number;
}

type ReadonlyProps = Readonly2<Person>;

let obj: ReadonlyProps = {
  name: 'name',
  age: 33,
}

console.log(obj);
// obj.age = 2; - readonly