'use strict';

describe('Controller: Mus482bCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var Mus482bCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Mus482bCtrl = $controller('Mus482bCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Mus482bCtrl.awesomeThings.length).toBe(3);
  });
});
