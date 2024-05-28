/*
 * Factory is a creational design pattern that provides an interface for creating objects in
 * a superclass, but allows subclasses to alter the type of objects that will be created.
 *
 * Participants:
 *   - Product
 *   - ConcreteProduct
 *   - Creator
 *   - ConcreteCreator
 * 
 */

// Pattern
// (We're using an skincare scenario for the examples)

// Variaty 1: when the Creator class is an abstract class and i
// does not provide an implementation for the factory method it declares
abstract class Creator {
  abstract createProduct(): SkincareProduct
}

// Variaty 2: the case when the Creator is a concrete class and 
// provides a default implementation for the factory method
class Creator2 {
  createProduct(): SkincareProduct {
    return new FaceSerum();
  }
}

// Variaty 3: Another variation on the pattern lets the factory method 
// create multiple kinds of products. The factory method takes a
// parameter that identifies the kind of object to create
class Creator3 {
  createProduct(type: string): SkincareProduct {
    if(type === 'lip') return new LipOil();
    if(type === 'serum') return new FaceSerum();

    return new LipOil();
  }
}

// Concrete Creator
class LipOilCreator extends Creator {
  createProduct(): SkincareProduct {
    return new LipOil();  
  }
}

// Our code will only deals with this interface, thus 
// it'll work with any concrete product defined class
interface SkincareProduct {
  operation(): string;
}

// Concrete Product #1
class LipOil implements SkincareProduct {
  operation(): string {
    return 'I\'m a lip oil';
  }
}

// Concrete Product #2
class FaceSerum implements SkincareProduct {
  operation(): string {
    return 'I\'m a face serum';
  }
}

// Usage
