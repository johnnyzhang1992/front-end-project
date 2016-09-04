'use strict';

describe('Controller: MapConfigCtrl', function () {

  // load the controller's module
  beforeEach(module('baidumapApp'));

  var MapConfigCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapConfigCtrl = $controller('MapConfigCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MapConfigCtrl.awesomeThings.length).toBe(3);
  });
});
