'use strict';

describe('Controller: LiteratureprojectCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var LiteratureprojectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LiteratureprojectCtrl = $controller('LiteratureprojectCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LiteratureprojectCtrl.awesomeThings.length).toBe(3);
  });
});
