const sentence = "hello there from lighthouse labs";
let time = 0;

for (const char of sentence) {
  if (time < sentence.length * 50) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time += 50);
  }
}
setTimeout(() => {
  process.stdout.write("\n");
}, time);