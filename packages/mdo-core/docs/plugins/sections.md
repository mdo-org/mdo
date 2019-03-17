# "Sections" Plugin

Organizes to-dos into "sections":

```
# Inbox
To-dos that need to be reviewed / categorized.

- [ ] foo
- [ ] bar

# To-Do
To-dos that are actionable / ready to work on.

- [ ] hello
- [ ] world

# Future
To-dos that will become actionable in the future.

- [ ] abc

# Done
To-dos that have been completed
- [X] xyz
```

## Dependencies

Depends on [start](./start.md) and [postpone](./postpone.md).

## Implementation details

### parse

Assigns a `.section` property to every Block:

- If a Block comes after an `# Inbox` header, it is assigned `.section = 'INBOX'`.
- If a Block comes after a `# Future` header, it is assigned `.section = 'FUTURE'`.
- If a Block comes after a `# Done` header, it is assigned `.section = 'DONE'`.
- All other blocks are assigned `.section = 'TODO'`.

`parse` also removes the `# Inbox` and `# Future` header blocks from the stream
(they get re-added on reshuffle).

### process

Process runs as two sequential processes.

First process:

- Any complete block is converted to `.section = 'DONE'`.
- Any block with `.section = 'DONE'` that is NOT complete, is converted to `.section = 'TODO'`.

Second process:

- Any block with `.section = 'INBOX'` or `.section = 'TODO'` that is NOT actionable, is converted to `.section = 'FUTURE'`.
- Any block with `.section = 'FUTURE'` that is actionable, is converted to `.section = 'INBOX'`.

To determine whether a block is actionable or not, we look at both the `.start` and `.postpone` values. If either of them is in the future, the block is considered NOT actionable.

### reshuffle

Move all blocks to their corresponding sections, adding a header on top of each section:

- Inbox
- To-Do
- Future
- Done
