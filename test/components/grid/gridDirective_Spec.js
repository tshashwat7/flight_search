
describe('Grid Component', function(){
    var $rootScope, $scope, $controller, controller, el, $el,
        $body = $('body'),
        sampleHtml = '<grid grid-Config="gridConfig"></grid>';

    beforeEach(function(){
        module('gridModule', 'components/grid/grid.html');


        inject(function($injector){

            $rootScope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
            $compile = $injector.get('$compile');

            $scope = $rootScope.$new();

            $scope.gridConfig = {
                "columnNames": ["Flight Name", "Departure", "Arrival", "Date", "Flight Fare"],
                "fieldNames": ["flightName", "departureTime", "arrivalTime", "date", "flightRate"],
                "gridData": [{
                        "id": 0,
                        "flightName": "Kingfisher Goa-Delhi",
                        "from": "Goa",
                        "to": "Delhi",
                        "departureTime": "02:30pm",
                        "arrivalTime": "03:30pm",
                        "date": "09/20/2018",
                        "flightRate": "1500 INR"
                    },
                    {
                        "id": 1,
                        "flightName": "Kingfisher Delhi-Goa",
                        "from": "Delhi",
                        "to": "Goa",
                        "departureTime": "02:30pm",
                        "arrivalTime": "03:30pm",
                        "date": "09/21/2018",
                        "flightRate": "1500 INR"
                    },
                    {
                        "id": 2,
                        "flightName": "Spice Jet Delhi-Thailand",
                        "from": "Delhi",
                        "to": "Thailand",
                        "departureTime": "02:05pm",
                        "arrivalTime": "03:50am",
                        "date": "07/21/2018",
                        "flightRate": "12696 INR"
                    },
                    {
                        "id": 3,
                        "flightName": "Malindo Delhi-Dubai",
                        "from": "Delhi",
                        "to": "Dubai",
                        "departureTime": "12:55pm",
                        "arrivalTime": "08:15am",
                        "date": "07/21/2018",
                        "flightRate": "24135 INR"
                    }]
            };

            el = $compile(angular.element(sampleHtml))($scope);
        });

        $body.append(el);
        $rootScope.$digest();
        $el = $('.grid');
    });

    describe('Initialization', function(){
        it('Should add the gird to the DOM', function(){
           expect(el.length).toEqual(1);
        });
        it('Should have five columns', function(){
            expect($(el).find("div.grid-header .grid-col").length).toEqual(5);
        });
    });
    describe('Grid Sorting', function(){
        it('Should sort by flightRate', function(){

            $(el).find("div.grid-header .grid-col:last-child").click();
            $rootScope.$digest();
            expect($(el).find("div.grid-body #gridRow0 .grid-col")[4].innerHTML).toEqual('24135 INR');

            $(el).find("div.grid-header .grid-col:last-child").click();
            $rootScope.$digest();
            expect($(el).find("div.grid-body #gridRow0 .grid-col")[4].innerHTML).toEqual('12696 INR');

        });
    });

});