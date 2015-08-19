angular.module('starter.controllers', [])

    .controller('HomeCtrl', function ($scope) {
        $scope.tab = {
            name: 'Home'
        }
    })

    .controller('AnimalsCtrl', function ($scope) {
        $scope.tab = {
            name: 'Animals'
        }
    })

    .controller('FlowersCtrl', function ($scope) {
        $scope.tab = {
            name: 'Flowers'
        };
    })

    .controller('FruitsCtrl', function ($scope, $ionicSlideBoxDelegate) {
        $scope.tab = {
            name: 'Fruits'
        };
        $scope.fruits = [
                {url: './img/mango1.jpg', info: 'This is mango..', name:'Mango'},
            {url: './img/bananas.jpg', info: 'This is banana..', name: 'Banana'},
            {url: './img/peach.jpg', info: 'This is peach..', name: 'peach'}
            
        ];
        $ionicSlideBoxDelegate.update();
        $scope.nextSlide = function () {
            $ionicSlideBoxDelegate.next();
        };
    })

    .controller('SlideboxCtrl', function ($scope, $location) {
        $scope.screen = {
            name: 'Slidebox'
        };
    });