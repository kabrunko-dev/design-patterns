# Design Patterns

Design patterns help you choose design alternatives that make a system reusable and avoid alternatives that compromise reusability.

> [!NOTE]
> Program to an interface, not an implementation

Before we dive in, please have in mind that learning these patterns can be slow and confunsing in your first tries. Please be patient, because once you grasp them, it'll be worth it.

## <u>Program to an interface, not an implementation</u>

When inheritance is used properly, all classes derived from an abstract class will share its interface. This implies that a subclass merely adds or overrides operations and does not hide operations of the parent class. All subclasses can then respond to the requests in the interface of this abstract class, making them all subtypes of the abstract class.

There are two benefits to manipulating objects solely in terms of the interface defined by abstract classes:

1. Clients remain unaware of the specific types of objects they use, as long as the
   objects adhere to the interface that clients expect.
2. Clients remain unaware of the classes that implement these objects. Clients
   only know about the abstract class(es) defining the interface.

Don’t declare variables to be instances of particular concrete classes. Instead, commit only to an interface defined by an abstract class.

## <u>Patterns</u>

Design patterns can be divided amoung 3 categories:

- Creational

- Structural

- Behavioral

With creational patterns, we can create objects to increase our code flexibility and reusability; for structural, we assemble objects and classes to form larger structures, while keeping theses structures flexible and efficient; and last, but not least, for behavioral, we think about algorithms and the assignment of responsibilities amoung objects.

Let's start with creational patterns!

### Creational Patterns

As said before, this kind of patterns aims in the object creation mechanisms to enhance our code by giving it more flexibility and reusability. Also descreases the number of lines of our code, which is also a good thing :smile:

The patterns are:

- **Factory Method** (or Virtual Constructor)

- **Abstract Factory**

- **Builder**

- **Prototype**

- **Singletone**

#### Factory Method (or Virtual Constructor)

Is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

#### Builder

This pattern allows you to separate the construction of a object from its representation so that the same construction process can create different representations.

**When we can use it:**

- When we need to create a complex object should be independent of the parts that make up the object and how they’re assembled.

- When the construction process must allow different representations for the object that’s constructed.

**How it works:**

For this pattern, we need two entities: **Director** and **Builder**. The former has a reference to a builder interface (or abstract class) through aggregation.

```ts
class Director {
    _builder: Builder;

    constructor(builder: Builder) {
        this._builder = builder;
    }

    build() { // ... }
}
```

The latter by an interface (or abstract class) garantee us polymorphism. Thus, a director only need to know that it's working with a common object interface. Also, a concrete builder provides a method to retrieve the object created (usually called **Product**).

```ts
// abstract class Builder {}
// or
interface Builder {}

/* We can have more than one type of builder */
// class ConcreteBuilder extends Builder {}
// or
class ConcreteBuilder implements Builder {
    getResult() {
        return // the built object
    }   
}
```

Each kind of builder takes the mechanism for creating and assembling a complex object and puts it behind an interface (or abstract class).

**Collaboration amoung entities:**

The client creates the director object and configures it with the desired concrete builder instance. The director notifies the builder whenever a part of the product should be built. Hence, the builder handles requests from the director and adds parts to the product. And finally, the client can retrieve the product from the builder.

**Additional details:**

- The Builder object provides the director with an abstract interface for constructing the product.

- Clients don't need to know anything about the classes that define the product’s internal structure.

- Unlike creational patterns that construct products in one shot, the Builder pattern constructs the product step by step under the director’s control. Only when the product is finished does the director retrieve it from the builder.

## <u>References</u>

- [Dive Into Design Patterns](https://refactoring.guru/design-patterns/book)
- Design Patterns: Elements of Reusable Object-Oriented Software
