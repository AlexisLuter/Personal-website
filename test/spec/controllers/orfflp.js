'use strict';

describe('Controller: OrfflpCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var OrfflpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrfflpCtrl = $controller('OrfflpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrfflpCtrl.awesomeThings.length).toBe(3);
  });
});
