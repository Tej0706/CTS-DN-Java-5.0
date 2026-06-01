public class Virtualthread {

    public static void main(String[] args)
            throws Exception {

        for(int i=1;i<=100000;i++) {

            Thread.startVirtualThread(() -> {
                System.out.println(
                        "Virtual Thread Running");
            });
        }
    }
}