import java.util.Scanner;

public class Stringrev {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter string: ");
        String str = sc.nextLine();

        String rev = new StringBuilder(str).reverse().toString();

        System.out.println("Reversed = " + rev);
    }
}