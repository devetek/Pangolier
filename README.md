# Devetek Profile @next

Company Profile Web for devetek.com, describe who we're and what we do. Please read this description bellow

## TODO:

- Remove useless assets
- Remove useless folders and files
- Remove useless libs, replace with native javascript

## Stuck In tech

- javascript && typescript
- node
- HTML
- CSS
- Docker
- nginx
- supervisor

## Dependencies

- node >= 9.10.0
- npm >= 5.6.0
- yarn >= 1.9.4

## Development Instalation

### Manual

- Install dependencies [yarn](https://yarnpkg.com/lang/en/docs/install/), [node & npm](https://github.com/creationix/nvm#installation) in your local
- clone repository

```sh
cd web_dev
cp .env.example .env
yarn
yarn start
```

### Docker

```sh
cd web_dev
docker-compose --file dev.compose.yaml build
docker-compose --file dev.compose.yaml up -d
```

you have 2 port when running with docker, 6051 and 90.

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
