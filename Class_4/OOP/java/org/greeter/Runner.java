package org.greeter;

import java.util.Scanner;
import org.greeter.Greeters.PopupGreeter;

public class Runner {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        GreeterProvider greeter = new GreeterProvider(name);
        greeter.greet();

        greeter.setGreeter(new PopupGreeter());
        greeter.greet();
    }
}
