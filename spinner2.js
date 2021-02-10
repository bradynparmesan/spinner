const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let delay = 100;
const charToPrint = (array) => {
  process.stdout.write(array);
};

for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    charToPrint(array[i]);
  }, delay);
  delay += 200;
}