import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number: ");
        int n = sc.nextInt();

        long num = 1;

        for(int i=1;i<=n;i++) {
            num = num * i;
        }

        System.out.println("Factorial = " + num);
    }
}