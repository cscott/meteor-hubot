var hubot = Npm.require('hubot');

// XXX wrap API so that callbacks get executed inside Meteor environment?
// otherwise we need to manually invoke Meteor.bindEnvironment(<callback>)
// whenever we register a callback or listener on the Hubot robot.
Hubot = hubot;
