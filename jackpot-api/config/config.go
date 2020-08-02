package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

// Config func to get env value
func Config(key string) string {
	// load .env file
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Print("Error loading .env file")
	}
	errLocal := godotenv.Load(".env.local")
	if errLocal != nil {
		fmt.Print("Error loading .env.local file")
	}
	return os.Getenv(key)
}
