sentence = 'refactor spinner1\n\r\r/\r-\r\\\r\r/\r-\r\\\n';
let t = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, t);
  t += 200
}


