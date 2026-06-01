import java.util.*;
import java.util.stream.*;

record Person(String name, int age) {}

public class Records {
    public static void main(String[] args) {

        List<Person> list = Arrays.asList(
                new Person("Teju",20),
                new Person("Riya",17),
                new Person("Sam",25)
        );

        List<Person> adults =
                list.stream()
                .filter(p -> p.age() >= 18)
                .collect(Collectors.toList());

        System.out.println(adults);
    }
}