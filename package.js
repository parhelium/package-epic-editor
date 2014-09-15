Package.describe({
  summary: "EpicEditor",
  version: "0.2.2",
  git: "https://github.com/parhelium/package-epic-editor",
  name: "parhelium:epic-editor"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  var where = ['client'];
  var path = Npm.require('path');

  api.add_files(path.join('v0.2.2','js','epiceditor.js'), where);
  api.add_files(path.join('v0.2.2','themes','base','epiceditor.css'), where);
  api.add_files(path.join('v0.2.2','themes','editor','epic-light.css'), where);
  api.add_files(path.join('v0.2.2','themes','preview','github.css'), where);

  api.export('EpicEditor', 'client');

});
