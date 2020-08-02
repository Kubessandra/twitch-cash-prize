package middleware

import (
	"jackpot-api/config"

	b64 "encoding/base64"

	"github.com/gofiber/fiber"
	jwtware "github.com/gofiber/jwt"
)

//Protected set a route to protected
func Protected() func(ctx *fiber.Ctx) {
	secret := config.Config("SECRET")
	decodedSecret, _ := b64.StdEncoding.DecodeString(secret)
	return jwtware.New(jwtware.Config{
		SigningKey:   decodedSecret,
		ErrorHandler: jwtError,
	})
}

func jwtError(c *fiber.Ctx, err error) {
	if err.Error() == "Missing or malformed JWT" {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "error", "message": "Missing or malformed JWT", "data": nil})
	} else {
		c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "Invalid or expired JWT", "data": nil})
	}
}
