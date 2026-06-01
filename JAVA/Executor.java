import java.util.concurrent.*;

public class Executor {

    public static void main(String[] args)
            throws Exception {

        ExecutorService ex =
                Executors.newFixedThreadPool(3);

        Callable<Integer> c1 = () -> 10;
        Callable<Integer> c2 = () -> 20;

        Future<Integer> f1 =
                ex.submit(c1);

        Future<Integer> f2 =
                ex.submit(c2);

        System.out.println(f1.get());
        System.out.println(f2.get());

        ex.shutdown();
    }
}