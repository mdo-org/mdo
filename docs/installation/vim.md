## How to set up MDo on Vim

1. Install [Node.js](https://nodejs.org)
2. Install mdo-cli
   ```
   npm install -g @mdo-org/mdo-cli
   ```
3. Add the following to your `~/.vimrc`:
   ```
   " on save, run MDo on any .md file
   augroup mdo
    autocmd!
    autocmd BufWritePre *.md %!mdo
   augroup END
   ```

## Avoid cursor jumping

While the instructions above work, you might notice some wonkiness due to the cursor jumping to the top of the file on every save.

We can fix that problem with the following `~/.vimrc` code:

```
" Restore cursor position, window position, and last search after running a
" command.
function! Preserve(command)
  " Save the last search.
  let search = @/

  " Save the current cursor position.
  let cursor_position = getpos('.')

  " Save the current window position.
  normal! H
  let window_position = getpos('.')
  call setpos('.', cursor_position)

  " Execute the command.
  execute a:command

  " Restore the last search.
  let @/ = search

  " Restore the previous window position.
  call setpos('.', window_position)
  normal! zt

  " Restore the previous cursor position.
  call setpos('.', cursor_position)
endfunction

" on save, run MDo on any .md file
augroup mdo
  autocmd!
  autocmd BufWritePre *.md call Preserve('%!mdo')
augroup END
```

## Limit to a specific directory

If you'd rather not run MDo on _every_ markdown file, you can always limit it to a specific directory:

```
" only run MDo on markdown files living inside a `todo/` directory
augroup mdo
  autocmd!
  autocmd BufWritePre *todo/*.md call Preserve('%!mdo')
augroup END
```
