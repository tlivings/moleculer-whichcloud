
### Run

```bash
docker-compose up --build
```

### Demo

Hit http://localhost:4000/ for the GraphQL playground and enter a query. For example:

```graphql
query {
  whichcloud(ip: "104.196.27.39") {
    ip,
    name
  }
}
```