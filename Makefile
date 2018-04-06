include ./.env

ESLINT=./node_modules/.bin/eslint

.PHONY: build clean deploy help lint install start test test-coverage

build: ## transpile the files from ES6 to JS
	@echo " > Building for production"
	@$(MAKE) -s clean
	@export GITLAB_TOKEN=$(GITLAB_TOKEN) && export GITLAB_URL=$(GITLAB_URL) && \
		node build/build.js

clean: ## clean artifacts
	@echo " > Cleaning the project"
	@rm -rf dist

deploy: ## deploy project on app engine
	@$(MAKE) -s build
	@echo " > Deploying the project"
	@gcloud app deploy app.yaml

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "	\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## install dependencies
	@echo " > Installing the project"
	@npm install

lint: ## lint the code
	@echo " > Linting the source"
	@$(ESLINT) --ext .js,.vue src test/unit

start: ## start the web server
	@echo " > Starting the project"
	@export GITLAB_TOKEN=$(GITLAB_TOKEN) && export GITLAB_URL=$(GITLAB_URL) && \
		./node_modules/.bin/webpack-dev-server --inline --progress --config build/webpack.dev.conf.js
