package router

import (
	"jackpot-api/middleware"

	"github.com/gofiber/fiber"
)

// InitRoutes of the router
func InitRoutes(app *fiber.App) {
	v1 := app.Group("/v1")
	v1.Get("/lol", func(ctx *fiber.Ctx) {
		ctx.Send("Hello youuuu")
	})
	v1.Get("/auth", middleware.Protected(), func(ctx *fiber.Ctx) {
		ctx.Send("Hello protected")
	})
}
