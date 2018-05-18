'use strict';

describe('Controller: RecruitflyerCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var RecruitflyerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecruitflyerCtrl = $controller('RecruitflyerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecruitflyerCtrl.awesomeThings.length).toBe(3);
  });
});
