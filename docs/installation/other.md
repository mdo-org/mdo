# Running MDo on your favorite editor

Even if you don't see installation instructions for your favorite editor, you can probably still use MDo.

Overall, the approach is the following:

1. Install [Node.js](https://nodejs.org)
2. Install mdo-cli
   ```
   npm install -g @mdo-org/mdo-cli
   ```
3. Figure out how to get your editor to run the current file through MDo.

   At this point, you should be able to run any text through the `mdo` binary. Eg:

   ```
   echo '- [ ] hello world @start tomorrow' | mdo
   ```

   Now, whenever you hit save, we want your editor to grab the current file's content, pipe it through `mdo`, and update the file with the result.

   Something like:

   ```
   cat myfile.md | mdo > /tmp/myfile.md
   cp /tmp/myfile.md myfile.md
   ```

If you tried to use MDo with your editor but couldn't figure out how, [hit me up](https://www.linkedin.com/in/alexishevia/) or [open a ticket](https://github.com/mdo-org/mdo/issues) and I'll try to help you.

Better yet, if you figure out how to use MDo with your editor, [hit me up](https://www.linkedin.com/in/alexishevia/) or [open a ticket](https://github.com/mdo-org/mdo/issues) and I'll update this documentation with the steps you discovered.

[> Architecture](/architecture/)
