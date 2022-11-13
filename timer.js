const args = process.argv.slice(2);

if (args.length === 0) {
  return "Please input alram times";
} else {
  time = args.filter((item) => item > 0 && item !== typeof NaN);
  for (let num of time) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, num * 1000);
  };
};
