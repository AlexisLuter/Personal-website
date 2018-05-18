'use strict';

describe('Controller: CompreflectionCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var CompreflectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompreflectionCtrl = $controller('CompreflectionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompreflectionCtrl.awesomeThings.length).toBe(3);
  });
});
