package org.greeter;

import org.greeter.Greeters.Greeter;
import org.greeter.Greeters.CLIGreeter;

public class GreeterProvider {
    String name;
    Greeter greeter;

    GreeterProvider(String name) {
        this.name = name;

        this.initGreeter();
    }

    private void initGreeter() {
        this.greeter = this.createGreeter();
    }

    private Greeter createGreeter() {
        return new CLIGreeter();
    }

    public void greet() {
        this.greeter.greet(this.name);
    }

    public void setGreeter(Greeter greeter) {
        this.greeter = greeter;
    }
}
