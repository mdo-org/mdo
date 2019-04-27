# Use a diffferent flow

By default, MDo uses the [Live in the Moment](https://github.com/mdo-org/mdo/tree/master/packages/mdo-flow-live-in-the-moment) flow.

However, `mdo` accepts a `--flow` param that let's you specify a different workflow to use.

Example:

```
npm install -g @mdo-org/mdo-flow-celebrate-victories

echo '
- [ ] this to-do is incomplete

- [X] this to-do is complete
  the "Celebrate Victories" flow moves completed to-dos into a "# Done" section

' | mdo --flow @mdo-org/mdo-flow-celebrate-victories
```

Under the hood, `mdo` is simply doing the following:

1. using Node.js `require` to load the `--flow` you specify
2. grabbing the text and handing it over to the provided flow for processing

## Available Flows

At the moment of this writing, only 2 flows are available:

- [Live in the Moment](https://github.com/mdo-org/mdo/tree/master/packages/mdo-flow-live-in-the-moment)
- [Celebrate Victories](https://github.com/mdo-org/mdo/tree/master/packages/mdo-flow-celebrate-victories)

If you have a specific workflow that you'd like MDo to support: [hit me up](https://www.linkedin.com/in/alexishevia/), [open a ticket](https://github.com/mdo-org/mdo/issues), or [create your own flow](/customize/create_flow.md).

[> Create a new flow](/customize/create_flow.md)
