fetch("https://rubygems.org/api/v1/gems/jekyll-theme-prologue.json").then(function(response) {
  return response.json()
}).then(function(json) {
  $("#download-counter").text(json.downloads.toString());
});