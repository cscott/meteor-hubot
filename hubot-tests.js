Tinytest.add('hubot - exists', function (test) {
  test.isTrue(_.isObject(Hubot), 'Hubot doesn\'t exist');
});
