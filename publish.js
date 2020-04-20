let gh_pages = require("gh-pages");

gh_pages.publish("build", (e) => {
  if (e) throw new Error(err);

  console.log("Success Publish");
});
