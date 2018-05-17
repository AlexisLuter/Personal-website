'use strict';

describe('Controller: Mus485Ctrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var Mus485Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Mus485Ctrl = $controller('Mus485Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Mus485Ctrl.awesomeThings.length).toBe(3);
  });
});
