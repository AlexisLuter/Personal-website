'use strict';

describe('Controller: Mod1reflectionCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var Mod1reflectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Mod1reflectionCtrl = $controller('Mod1reflectionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Mod1reflectionCtrl.awesomeThings.length).toBe(3);
  });
});
