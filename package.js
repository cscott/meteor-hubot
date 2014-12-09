Package.describe({
  name: 'cscottnet:hubot',
  summary: 'Package hubot for Meteor server',
  version: '2.10.0',
  git: 'https://github.com/cscott/meteor-hubot.git'
});

Npm.depends({"hubot": "2.10.0"});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles([
    'hubot.js'
  ], 'server');
  if (api.export) { api.export('Hubot', 'server'); }
});

Package.onTest(function(api) {
  api.use(['tinytest','underscore','cscottnet:hubot'], 'server');
  api.addFiles(['hubot-tests.js'], 'server');
});
