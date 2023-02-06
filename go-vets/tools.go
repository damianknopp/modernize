//go:build tools
// +build tools

package main

import (
	_ "github.com/99designs/gqlgen"
	_ "golang.org/x/lint/golint"
)
