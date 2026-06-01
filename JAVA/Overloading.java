public class Overloading {

    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {

        Overloading obj = new Overloading();

        System.out.println(obj.add(5,10));
        System.out.println(obj.add(2.5,3.5));
        System.out.println(obj.add(1,2,3));
    }
}