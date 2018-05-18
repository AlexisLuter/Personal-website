'use strict';

describe('Controller: ImprovmaterialsCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var ImprovmaterialsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImprovmaterialsCtrl = $controller('ImprovmaterialsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ImprovmaterialsCtrl.awesomeThings.length).toBe(3);
  });
});
