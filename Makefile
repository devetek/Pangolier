export ISFAIL=0

dev: define
	@ echo START: Checking Development environment ...
	@ echo "node version:" $(NODE_VERSION)
	@ echo "npm version:" $(NPM_VERSION)
	@ echo "yarn version:" $(YARN_VERSION)
	@ cp .env.example .env && yarn
	@ echo "Run project in development manually using command \`yarn start\` or wait for 10 seconds in this process ...."
	@ sleep 8
	@ yarn start

define:
	$(eval NODE_VERSION := $(shell node -v || echo "0"))
	$(eval NPM_VERSION := $(shell npm -v || echo "0"))
	$(eval YARN_VERSION := $(shell yarn -v || echo "0"))