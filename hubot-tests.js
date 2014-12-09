Tinytest.add('hubot - exists', function (test) {
  test.isTrue(_.isObject(Hubot), 'Hubot doesn\'t exist');
  test.isTrue(_.isFunction(Hubot.Robot), 'Hubot.Robot doesn\'t exist');
  test.isTrue(_.isFunction(Hubot.loadBot), 'Hubot.loadBot doesn\'t exist');
});
