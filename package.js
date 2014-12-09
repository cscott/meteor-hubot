Package.describe({
  name: 'cscottnet:hubot',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('cscottnet:hubot.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cscottnet:hubot');
  api.addFiles('cscottnet:hubot-tests.js');
});
