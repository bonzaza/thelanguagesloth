package org.greeter.Greeters;

public class CLIGreeter implements Greeter {
    @Override
    public void greet(String name) {
        System.out.println("Greet you " + name);
    }
}