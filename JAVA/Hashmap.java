import java.util.*;

public class Hashmap {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        HashMap<Integer,String> map = new HashMap<>();

        System.out.print("Enter number of students: ");
        int n = sc.nextInt();
        sc.nextLine();

        for(int i=0;i<n;i++) {

            System.out.print("Enter ID: ");
            int id = sc.nextInt();
            sc.nextLine();

            System.out.print("Enter Name: ");
            String name = sc.nextLine();

            map.put(id,name);
        }

        System.out.print("Enter ID to search: ");
        int search = sc.nextInt();

        System.out.println(map.get(search));
    }
}