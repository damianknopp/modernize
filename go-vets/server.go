package main

import (
	"dmknopp/go-vets-graphql/graph"
	"dmknopp/go-vets-graphql/graph/model"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	resolver := &graph.Resolver{}
	LoadTestData(resolver)
	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: resolver}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func LoadTestData(r *graph.Resolver) {
	r.VetStore = make(map[string]model.Vet)

	o1 := model.Vet{
		ID:        "1",
		FirstName: "John",
		LastName:  "Smith",
		Specialties: []*model.Specialty{
			{
				Name: "SURGREY",
			},
			{
				Name: "DENTISTRY",
			},
		},
	}

	o2 := model.Vet{
		ID:        "2",
		FirstName: "Mary",
		LastName:  "O'Neil",
		Specialties: []*model.Specialty{
			{
				Name: "ORTHOPEDICS",
			},
			{
				Name: "ANESTHESIA",
			},
		},
	}

	r.VetStore[o1.ID] = o1
	r.VetStore[o2.ID] = o2
}
