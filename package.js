Package.describe({
  summary: "Markdown editor - EpicEditor",
  version: "0.2.4",
  git: "https://github.com/parhelium/package-epic-editor",
  name: "parhelium:epic-editor"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  var where = ['client'];
  var path = Npm.require('path');
  api.use("parhelium:marked@0.3.3");

  api.add_files(path.join('v0.2.2','js','epiceditor.js'), where);
  api.add_files(path.join('v0.2.2','themes','base','epiceditor.css'), where);
  api.add_files(path.join('v0.2.2','themes','editor','epic-light.css'), where);
  api.add_files(path.join('v0.2.2','themes','preview','github.css'), where);

  api.export('EpicEditor', 'client');
});
