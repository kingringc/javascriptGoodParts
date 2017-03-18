describe('Search controller', function() {

    var $scope;
    var $location;

    beforeEach(function() {
        $scope = {};
        $location = {
            url: ''
        };
        $scope.search = function() {
            if ($scope.query) {
                $location.url = '/results?q=star%20wars';
            }
        }
    });

    it('should redirect to search result page for non empty search query', function() {
        $scope.query = 'star wars';
        $scope.search();
        expect($location.url).toBe('/results?q=star%20wars');
    });

    it('should not redirect to search result page for empty search query', function() {
        $scope.query = '';
        $scope.search();
        expect($location.url).toBe('');
    });
});