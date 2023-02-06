package graph

import "dmknopp/go-vets-graphql/graph/model"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	VetStore map[string]model.Vet
}
