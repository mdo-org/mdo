# Flows Overview

In order to support different workflows, `MDo.transform()` accepts a `flow` parameter.

```
MDo.transform({ flow: 'liveInTheMoment' })
```

To list all available flows, simply look into `MDo.availableFlows`:

```
MDo.availableFlows

>> [
  {
    name: 'liveInTheMoment',
    description: '...',
  },
  {
    name: 'celebrateVictories',
    description: '...',
  },
  ...
]
```

MDo also supports [custom flows](#using-a-text-based-flow).

## Flow Architecture

A `flow` is nothing more than a combination of [plugins](./plugins_overview.md), defined to run in a certain order.

The [Live in the Moment](./flows/liveInTheMoment.md) flow is defined as:

```
[ "start", "postpone", "repeat", "removeComplete", "sections" ]
```

While the [Celebrate Victories](./flows/celebrateVictories.md) flow is defined as:

```
[ "start", "postpone", "repeat", "complete", "sections" ]
```

Notice the only difference between "Live in the Moment" and "Celebrate Victories" is that one uses the [removeComplete](./plugins/removeComplete) plugin, while the other uses the [complete](./plugins/complete.md) plugin.

## Using a text-based flow

If none of the pre-defined MDo workflows match your style, you're free to use a custom workflow.

```
MDo.transform({ flow: ["start", "removeComplete"] });
```

MDo will apply the plugins using the order provided.

Note:  
If you want help creating a new flow, feel free to [create a new github issue](https://github.com/mdo-org/mdo-core/issues/new) and I'll get in touch.

I built MDo to match my personal workflow, so most plugins are custom tailored for that. However, I'd like to eventually support multiple workflows to make MDo a more useful tool for others.
