# To-Do

- [ ] split plugins / flows into separate modules using lerna
  - add eslint as build process
  - move "test" scripts out of individual packages
- [ ] modify flows so they spell out every specific transform they want to use in the order they want to use it
- [ ] figure out how to get `.test` files out of npm packages
- [ ] create an interactive page / tutorial where you can try out MDo in the browser
- [ ] use stricter types
      For a lot of constants we're simply using type `string`. I'd like to convert these to `enum`.
