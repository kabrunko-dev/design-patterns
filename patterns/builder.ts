/*
 * In this pattern we need two entities: (1) Director and (2) Builder.
 *
 * The Director uses aggregation to reference an object of the Builder interface.
 *
 */

/* 
 * Object 
 * 
 * Which will be created by the pattern 
 * 
 */

// In a real scenario, "Product" would 
// be labeled with a real name
interface Product {}

/* Builders */ 

interface IBuilder {
  buildPart1(): Product;
  buildPart2(): Product;
  buildPart3(): Product;

  // In a real scenario, "getProduct" would 
  // be labeled with a real name
  getProduct(): Product;
}

class ConcreteIBuilder implements IBuilder {
  buildPart1(): Product {
    return {}
  }

  buildPart2(): Product {
    return {}
  }

  buildPart3(): Product {
    return {}
  }

  getProduct(): Product {
    return {}
  }
}

/*
 * Using an abstract class, when TypeScript is compiled into JavaScript,
 * we don't loose the class at run-time, hence we can use a guard to see 
 * if a object is an instance of that class.
 *
 * @example
 * ```
 *   // ...
 *
 *   if (obj instanceof AnAbstractClass) {
 *     // ...
 *   }
 *
 * //...
 * ```
 * 
 * When using an interface, althought it's present at compile-time,
 * it's not preserved at run-time. Thus, can't use it for guards.
 */
abstract class Builder {
  abstract buildPart1(): Product;
  abstract buildPart2(): Product;
  abstract buildPart3(): Product;

  // In a real scenario, "getProduct" would 
  // be labeled with a real name
  abstract getProduct(): Product;
}

class ConcreteBuilder extends Builder {
  buildPart1(): Product {
    return {}
  }

  buildPart2(): Product {
    return {}
  }

  buildPart3(): Product {
    return {}
  }

  getProduct(): Product {
    return {}
  }
}

/* Director */

class Director {
  private _builder: IBuilder;

  constructor(builder: Builder) {
    this._builder = builder;
  }

  getProduct() {
    return this._builder.getProduct();
  }
}

/* Client */

const product = new ConcreteBuilder()

const director = new Director(product)
console.log(director.getProduct())

