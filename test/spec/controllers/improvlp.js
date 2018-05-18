'use strict';

describe('Controller: ImprovlpCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var ImprovlpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImprovlpCtrl = $controller('ImprovlpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ImprovlpCtrl.awesomeThings.length).toBe(3);
  });
});
