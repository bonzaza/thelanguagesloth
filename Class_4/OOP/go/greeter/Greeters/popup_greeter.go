package greeters

import "github.com/sqweek/dialog"

const title string = "Greetings!"

type PopupGreeter struct {
	name string
}

func (_ PopupGreeter) Greet(name string) {
	dialog.Message("%s", "Greet you"+name).Title(title).Info()
}
