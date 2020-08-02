package main

import (
	"jackpot-api/router"

	"github.com/gofiber/cors"
	"github.com/gofiber/fiber"
	"github.com/gofiber/fiber/middleware"
)

func main() {
	app := fiber.New()

	app.Use(middleware.Logger())
	app.Use(cors.New())

	router.InitRoutes(app)

	app.Get("/", func(c *fiber.Ctx) {
		c.Send("Hello, World 👋!")
	})

	app.Listen(3000)
}
