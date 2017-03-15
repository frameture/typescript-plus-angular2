function anyType<T>(arg: T): T {
  return arg;
}

const stringType = anyType<string>('string');
const implicitStringType = anyType('string');
console.log(anyType(1), anyType(true), stringType, implicitStringType);

class Generic<T> {
  private _collection = new Array<T>();

  public addElement(element: T): Generic<T> {
    this._collection.push(element);
    return this;
  }

  public getElement(): T {
    return this._collection.shift();
  }
}

const numCollection = new Generic<number>();
const boolCollection = new Generic<boolean>();
numCollection.addElement(0).addElement(1).addElement(2).addElement(3);
boolCollection.addElement(true).addElement(false).addElement(false);

console.log('number collection', numCollection);
console.log('boolean collection', boolCollection);

interface Lengthwise {
  length: number;
}

class LengthyCollection<T> extends Generic<T> implements Lengthwise {
  public length: number;

  constructor() {
    super();
    this.length = 0;
  }

  public addElement(element: T): LengthyCollection<T> {
    super.addElement(element);
    this.length++;
    return this;
  }

  public getElement(): T {
    this.length--;
    return super.getElement();
  }

}

const lengthyColl = new LengthyCollection<number>();
lengthyColl.addElement(3).addElement(2).addElement(1);
console.log(lengthyColl);

function logCollectionLength<Generic extends Lengthwise>(coll: Generic): void {
  console.log(coll.length);
}

const collections = [ numCollection, boolCollection, lengthyColl ];
// collections.forEach(coll => logCollectionLength(coll));  // Compiler complies
logCollectionLength(lengthyColl);

function copyCollectionToLengthyOne<T>
  (from: Generic<T>, to: LengthyCollection<T>): void {
  let ele = from.getElement();
  while (ele !== undefined) {
    to.addElement(ele);
    ele = from.getElement();
  }
}

copyCollectionToLengthyOne(numCollection, lengthyColl);
console.log(lengthyColl);

class Num {
  number: number;
}

type LengthyNum = Num & Lengthwise;
let aliased: LengthyNum = { number: 1, length: 1 };

console.log(aliased instanceof Num);