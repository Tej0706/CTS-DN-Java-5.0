class Animal {

    void ani() {
        System.out.println("Growl");
    }
}

class Dog extends Animal {

    void makeSound() {
        System.out.println("Bark");
    }
}

public class Inheritance {
    public static void main(String[] args) {
        Dog d = new Dog();

        d.ani();
        d.makeSound();
    }
}