# API Docs

There are a few patterns to cover regarding async data fetching.

## Models

All data fetching should happen in the appropriate `api/apiName/models/ResourceName.js` file.

If the data is coming from Firebase (RTDB or Firestore), use the `FirebaseService.database` function. This function will automatically generate `_REQUEST, _SUCCESS, and _FAILURE` Redux actions.

Example: `Users.create`

```
static create = async (user) => {
  const method = (cb) =>
    REF.doc(user.uid).set(user).then(cb)

  const options = {
    method,
    verb: 'SET',
    prefix,
    storeKey: path
  }
  await FirebaseService.database(options)
}
```

## TODO: Non-firebase APIs

## Fetching data on the server (SSR)

Sometimes, you want to fetch data on the server. This allows for things like dynamic meta tags that are crawlable by search engines, as well as improved perceived performance (no loading spinners).

At render time, the node server does a few things to support fetching data before prender.

1. Determine which route was requested.
  ```
  const matchedRoutes = matchRoutes(routes, req.path)
  ```

1. Based on the route, we know what component should be rendered.

1. Check to see if the component has a function named `serverFetch` and if it does, call the function.
  ```
  req.store.dispatch(route.component.serverFetch({ req, match, userId }))
  ```

### `withServerData`

`withServerData` is a Higher Order Component that accepts one param, a `serverFetch` function.

`serverFetch` should return a promise that resolves when all the data the route needs has been fetched. We use Redux Thunks to inject this data into the redux store before initial render.

## Considerations

Fetching data server side happens at the **route** level. This means adding `withServerData` to a nested child component will not do anything.
