# Next FTD Makefile
# Convenient commands for development and deployment

.PHONY: help dev build start lint test docker-dev docker-prod docker-stop clean

# Default target
help:
	@echo "Next FTD Development Commands"
	@echo "=============================="
	@echo ""
	@echo "Local Development:"
	@echo "  make dev          - Start development server"
	@echo "  make build        - Build for production"
	@echo "  make start        - Start production server"
	@echo "  make lint         - Run ESLint"
	@echo "  make test         - Run tests"
	@echo ""
	@echo "Docker Development:"
	@echo "  make docker-dev   - Start Docker dev environment with hot-reload"
	@echo "  make docker-prod  - Build and start Docker production environment"
	@echo "  make docker-stop  - Stop all Docker containers"
	@echo "  make docker-logs  - View Docker container logs"
	@echo "  make docker-clean - Remove Docker containers and images"
	@echo ""
	@echo "Utilities:"
	@echo "  make clean        - Clean build artifacts"
	@echo "  make install      - Install dependencies"
	@echo ""

# Local development commands
dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

test:
	npm run test

install:
	npm install

# Docker development commands
docker-dev:
	docker-compose up --build

docker-dev-detached:
	docker-compose up --build -d

docker-prod:
	docker-compose -f docker-compose.prod.yml up --build

docker-prod-detached:
	docker-compose -f docker-compose.prod.yml up --build -d

docker-stop:
	docker-compose down
	docker-compose -f docker-compose.prod.yml down

docker-logs:
	docker-compose logs -f

docker-logs-prod:
	docker-compose -f docker-compose.prod.yml logs -f

docker-clean:
	docker-compose down --rmi all --volumes --remove-orphans
	docker-compose -f docker-compose.prod.yml down --rmi all --volumes --remove-orphans

# Shell into container
docker-shell:
	docker-compose exec next-ftd sh

# Clean build artifacts
clean:
	rm -rf .next
	rm -rf out
	rm -rf node_modules/.cache

# Full clean (including node_modules)
clean-all: clean
	rm -rf node_modules

# Health check
health:
	curl -s http://localhost:3000/api/health | jq

# Production deployment helpers
deploy-build:
	docker build -f Dockerfile.prod -t next-ftd:latest .

deploy-tag:
	docker tag next-ftd:latest $(REGISTRY)/next-ftd:$(VERSION)

deploy-push:
	docker push $(REGISTRY)/next-ftd:$(VERSION)
