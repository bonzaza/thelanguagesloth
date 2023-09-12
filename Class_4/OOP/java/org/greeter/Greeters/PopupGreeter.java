package org.greeter.Greeters;

import javax.swing.JOptionPane;

public class PopupGreeter implements Greeter {
    @Override
    public void greet(String name) {
        this.infoBox("Greet you " + name, "Greetings!");
    }

    public void infoBox(String infoMessage, String titleBar) {
        JOptionPane.showMessageDialog(null, infoMessage, "InfoBox: " + titleBar, JOptionPane.INFORMATION_MESSAGE);
    }
}