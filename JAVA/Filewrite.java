import java.io.*;
import java.util.Scanner;

public class Filewrite {
    public static void main(String[] args) throws IOException {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter text: ");
        String str = sc.nextLine();

        FileWriter fw = new FileWriter("output.txt");
        fw.write(str);
        fw.close();

        System.out.println("Data written successfully");
    }
}