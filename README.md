# Devetek Profile @next

Company Profile Web for devetek.com, describe who we're and what we do. Please read this description bellow

## TODO:

- Upgrade for supporting Server Side Rendering all environment.
- Continuous integration vs. continuous delivery vs. continuous deployment integration, follow [TideHunter](https://github.com/prakasa1904/webhook-terpusat-mpw)
- Write Regression Test, Integration Test and Automation Test.

## Stuck In tech

- javascript & typescript
- node
- HTML
- CSS
- Docker

## Dependencies

- node >= 8.12.0
- npm >= 5.6.0
- yarn >= 1.9.4

## Development Instalation

### Manual

- Install dependencies [yarn](https://yarnpkg.com/lang/en/docs/install/), [node & npm](https://github.com/creationix/nvm#installation) in your local
- clone repository
- run

```sh
cd web_dev
cp .env.example .env
yarn
yarn start
```

### Makefile

- Install dependencies [yarn](https://yarnpkg.com/lang/en/docs/install/), [node & npm](https://github.com/creationix/nvm#installation) in your local
- clone repository
- run

```sh
cd web_dev && make
```

Access [`http://localhost:6500`](http://localhost:6500).

### Docker

- Install dependencies [Docker](https://docs.docker.com/install/)

```sh
cd web_dev
docker-compose --file dev.compose.yaml build
docker-compose --file dev.compose.yaml up -d
```

Access [`http://localhost:6500`](http://localhost:6500).

## Production Instalation

In progress

## devTech Feature

- Hot reload
- Eslint

## Contributors

- Hamba Allah

## References

- [Angular basic routing](https://blog.angular-university.io/angular2-router/)
- [Angular nested routing](https://blog.angular-university.io/angular-2-router-nested-routes-and-nested-auxiliary-routes-build-a-menu-navigation-system/)
- [Angular advance routing and layouting](https://thinkster.io/tutorials/building-real-world-angular-2-apps/page-layout-and-routing)
