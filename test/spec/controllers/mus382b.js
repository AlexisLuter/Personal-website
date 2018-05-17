'use strict';

describe('Controller: Mus382bCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var Mus382bCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Mus382bCtrl = $controller('Mus382bCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Mus382bCtrl.awesomeThings.length).toBe(3);
  });
});
