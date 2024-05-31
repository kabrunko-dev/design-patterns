/* 
 * Pattern
 */

// Product

// Declares an interface for a type of product object
interface AbstractProductA {
  print(): string;
}

class ProductA1 implements AbstractProductA {
  print(): string {
    return 'ProductA1 printed me';
  }
}

class ProductA2 implements AbstractProductA {
  print(): string {
    return 'ProductA2 printed me';
  }
}

interface AbstractProductB {
  sumTwoNum(x: number, y: number): number;
  someLogic(): void;
}

class ProductB1 implements AbstractProductB {
  sumTwoNum(x: number, y: number): number {
    return x + y;
  }

  someLogic(): void {
    console.log('ProductB1 making some logic');
  }
}

class ProductB2 implements AbstractProductB {
  sumTwoNum(x: number, y: number): number {
    return x + y;
  }

  someLogic(): void {
    console.log('ProductB2 making some crazy logic');
  }
}

// Factory

// Declares an interface for operations that 
// create abstract product objects
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

// Implements the operations to create concrete product objects
class ConcreteFractory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ProductA1();
  }

  createProductB(): AbstractProductB {
    return new ProductB1();
  }
}

class ConcreteFractory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ProductA2();
  }

  createProductB(): AbstractProductB {
    return new ProductB2();
  }
}

/* 
 * Client
 *
 * - Clients manipulate instances through their abstract interfaces
 *
 */
function main(factory: AbstractFactory): void {
  const prodA = factory.createProductA();
  const prodB = factory.createProductB();

  console.log('I\'m prod A', prodA.print());

  console.log('I\'m prod B', prodB.sumTwoNum(2, 2));
  prodB.someLogic();
}

main(new ConcreteFractory1());

