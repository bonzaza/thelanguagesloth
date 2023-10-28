package leapyear

import (
	"fmt"
	"testing"
)

func TestLeapYear(t *testing.T) {
	tests := []struct {
		year int
		want bool
	}{
		{1997, false},
		{1996, true},
		{1600, true},
		{1800, false},
	}

	for i, tc := range tests {
		t.Run(fmt.Sprintf("%d test case", i), func(t *testing.T) {
			got := LeapYear(tc.year)
			if got != tc.want {
				t.Errorf("got %v; want %v", got, tc.want)
			} else {
				t.Logf("Success!")
			}
		})
	}

	batch := []struct {
		year int
		want bool
	}{
		{1600, true},
		{1800, false},
		{1802, false},
		{1804, true},
		{1808, true},
		{1812, true},
		{1816, true},
		{1820, true},
		{1824, true},
		{1828, true},
		{1832, true},
		{1836, true},
		{1840, true},
		{1844, true},
		{1848, true},
		{1852, true},
		{1856, true},
		{1860, true},
		{1864, true},
		{1868, true},
		{1872, true},
		{1876, true},
		{1880, true},
		{1884, true},
		{1888, true},
		{1892, true},
		{1896, true},
		{1900, false},
		{1904, true},
		{1908, true},
		{1912, true},
		{1916, true},
		{1920, true},
		{1924, true},
		{1928, true},
		{1932, true},
		{1936, true},
		{1940, true},
		{1944, true},
		{1948, true},
		{1952, true},
		{1956, true},
		{1960, true},
		{1964, true},
		{1968, true},
		{1972, true},
		{1976, true},
		{1980, true},
		{1984, true},
		{1988, true},
		{1992, true},
		{1996, true},
		{1997, false},
		{2000, true},
		{2004, true},
		{2008, true},
		{2012, true},
		{2016, true},
		{2020, true},
		{2024, true},
	}

	for i, bc := range batch {
		t.Run(fmt.Sprintf("%d batch case", i), func(t *testing.T) {
			got := LeapYear(bc.year)
			if got != bc.want {
				t.Errorf("got %v; want %v", got, bc.want)
			} else {
				t.Logf("Success!")
			}
		})
	}
}
