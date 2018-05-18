'use strict';

describe('Controller: 485songreflectionCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var 485songreflectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    485songreflectionCtrl = $controller('485songreflectionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(485songreflectionCtrl.awesomeThings.length).toBe(3);
  });
});
