// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"fmt"
	"io"
	"strconv"
)

type Specialty struct {
	Name SpecialtyType `json:"name"`
}

type SpecialtyInput struct {
	Name SpecialtyType `json:"name"`
}

type Vet struct {
	ID          string       `json:"id"`
	FirstName   string       `json:"firstName"`
	LastName    string       `json:"lastName"`
	Specialties []*Specialty `json:"specialties"`
}

type VetInput struct {
	ID          *string           `json:"id"`
	FirstName   string            `json:"firstName"`
	LastName    string            `json:"lastName"`
	Specialties []*SpecialtyInput `json:"specialties"`
}

type SpecialtyType string

const (
	// fix teeth
	SpecialtyTypeDentistry SpecialtyType = "DENTISTRY"
	// slice and sew
	SpecialtyTypeSurgery SpecialtyType = "SURGERY"
	// numb and sleep
	SpecialtyTypeAnesthesia SpecialtyType = "ANESTHESIA"
	// bones
	SpecialtyTypeOrthopedics SpecialtyType = "ORTHOPEDICS"
)

var AllSpecialtyType = []SpecialtyType{
	SpecialtyTypeDentistry,
	SpecialtyTypeSurgery,
	SpecialtyTypeAnesthesia,
	SpecialtyTypeOrthopedics,
}

func (e SpecialtyType) IsValid() bool {
	switch e {
	case SpecialtyTypeDentistry, SpecialtyTypeSurgery, SpecialtyTypeAnesthesia, SpecialtyTypeOrthopedics:
		return true
	}
	return false
}

func (e SpecialtyType) String() string {
	return string(e)
}

func (e *SpecialtyType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = SpecialtyType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid SpecialtyType", str)
	}
	return nil
}

func (e SpecialtyType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
