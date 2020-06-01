Promise.allSettled([p1, p2]).finally(() => {
  console.log("Done!");
});
