package greeter

import "greeter/greeter/greeters"

type GreeterProvider struct {
	name    string
	greeter greeters.Greeter // polymorphic
}

func NewGreeterProvider(name string) (*GreeterProvider, error) {
	provider := &GreeterProvider{
		name:    name,
		greeter: &greeters.PopupGreeter{}, // implementation
	}

	return provider, nil
}

func (pr GreeterProvider) Greet() {
	pr.greeter.Greet(pr.name)
}
