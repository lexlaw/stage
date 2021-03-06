(function(angular) {
  'use strict';

    angular.module('WebApp', ['ngRoute', 'ngAnimate'])

    .controller('MainCtrl', ['$scope', '$route', '$location', function($scope, $route, $location) {

        // ----------- TEAM USA ------------------
        $scope.profile1 = {
            memberName: "Lucius Smejda",
	        memberTitle: "Principal",
	        memberLocation: "USA, Canada",
	        memberURL: "Lucius_Smejda",
	        imageURL: "Lucius_Smejda.jpg"
	    };
        $scope.profile2 = {
	        memberName: "Joseph B. McFarland",
	        memberTitle: "Of Counsel",
	        memberLocation: "USA",
	        memberURL: "Joseph_McFarland",
	        imageURL: "Joseph_McFarland.jpg"
	    };
        $scope.profile3 = {
	        memberName: "Antonio R. Zamora",
	        memberTitle: "Of Counsel",
	        memberLocation: "USA",
	        memberURL: "Antonio_Zamora",
	        imageURL: "Antonio_Zamora.jpg"
	    };
        $scope.profile4 = {
	        memberName: "Elke Rolff",
	        memberTitle: "Of Counsel",
	        memberLocation: "USA, Switzerland",
	        memberURL: "Elke_Rolff",
	        imageURL: "Elke_Rolff.jpg"
	    };
        $scope.profile5 = {
	        memberName: "Maxim Istomin",
	        memberTitle: "Of Counsel",
	        memberLocation: "Russia, USA",
	        memberURL: "Maxim_Istomin",
	        imageURL: "Maxim_Istomin.jpg"
	    };
        $scope.profile6 = {
	        memberName: "Susanne Leone",
	        memberTitle: "Jurist",
	        memberLocation: "Germany",
	        memberURL: "Susanne_Leone",
	        imageURL: "Susanne_Leone.jpg"
	    };
        $scope.profile7 = {
	        memberName: "Evgeny V. Golovanov",
	        memberTitle: "Jurist",
	        memberLocation: "Russia",
	        memberURL: "Evgeny_Golovanov",
	        imageURL: "Evgeny_Golovanov.jpg"
	    };
        $scope.profile8 = {
	        memberName: "Jasmin Welker",
	        memberTitle: "Jurist",
	        memberLocation: "Germany",
	        memberURL: "Jasmin_Welker",
	        imageURL: "Jasmin_Welker.png"
	    };

        // ----------- TEAM INTERNATIONAL ------------------
        $scope.profile9 = {
	        memberName: "Jacques Ethier",
	        memberTitle: "Canada",
	        memberLocation: "Canada",
	        memberURL: "Jacques_Ethier",
	        imageURL: "Jacques_Ethier.jpg"
	    };
        $scope.profile10 = {
	        memberName: "Eric J.P. Citrey",
	        memberTitle: "France",
	        memberLocation: "France",
	        memberURL: "Eric_Citrey",
	        imageURL: "Eric_Citrey.jpg"
	    };
        $scope.profile11 = {
	        memberName: "Oliver Hance",
	        memberTitle: "Belgium and Luxemburg",
	        memberLocation: "Belgium and Luxemburg",
	        memberURL: "Oliver_Hance",
	        imageURL: "Oliver_Hance.jpg"
	    };
        $scope.profile12 = {
	        memberName: "Aleksandr Smirnov",
	        memberTitle: "Russia",
	        memberLocation: "Russia",
	        memberURL: "Aleksandr_Smirnov",
	        imageURL: "Aleksandr_Smirnov.jpg"
	    };
        $scope.profile13 = {
	        memberName: "Vladimir A. Troitskiy",
	        memberTitle: "Russia",
	        memberLocation: "Russia",
	        memberURL: "Vladimir_Troitskiy",
	        imageURL: "Vladimir_Troitskiy.jpg"
	    };
        $scope.profile14 = {
	        memberName: "Carlos Aud Sobrinho",
	        memberTitle: "Brazil",
	        memberLocation: "Brazil",
	        memberURL: "Carlos_Aud_Sobrinho",
	        imageURL: "Carlos_Aud_Sobrinho.jpg"
	    };
        $scope.profile15 = {
	        memberName: "Eric Vigneron",
	        memberTitle: "Dominican Republic",
	        memberLocation: "Dominican Republic",
	        memberURL: "Eric_Vigneron",
	        imageURL: "Eric_Vigneron.png"
	    };
        
        // ----------- LEX TELEPHONE AND FAX NUMBERS ------------------
        $scope.telephone = {
	        usNumber: 	"(305) 358-9995",
	        usFax: 		"(305) 358-9997",
	        usHours: 	"??:??AM to ??:??PM (EST)",
	        frNumber: 	"(+33-1) 5643-3940",
	        frFax: 		"(+33-1) 5643-3943",
	        frHours: 	"??:??AM to ??:??PM"
	    };
        // ----------- END OF CONTENT CHANGES - DO NOT CHANGE BELOW! -------


        // NAV HIGHLIGHT
	    $scope.isActive = function (viewLocation) {
             var active = (viewLocation === $location.path());
             return active;
        };

		// $scope.params = $routeParams;
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            scope: {
                test: '=info'
            },
            templateUrl: function(elem, attr) {
                return 'tokens/profile-' + attr.type + '.html';
            }
        };
    })
    .directive('myTelephone', function() {
        return {
            restrict: 'E',
            scope: {
                test2: '=info'
            },
            templateUrl: function(elem, attr) {
                return 'tokens/telephone-' + attr.type + '.html';
            }
        };
    })

	.run(['$rootScope', function ($rootScope) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			window.scrollTo(0, 0);
			$rootScope.title = current.$$route.title;
			$rootScope.teamTitle = current.$$route.action;
			$rootScope.description = current.$$route.description.currentProfile;
			$rootScope.keywords = current.$$route.keywords;
			$rootScope.canonical = current.$$route.canonical;
			$rootScope.robots = current.$$route.robots;
		});
	}])

    // CONFIG - CONFIG - CONFIG
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
        // Pages
        .when("/", {
	        title : 'Transaction, Business and Investment Legal Counseling Advice',
			robots : 'follow,index',
			description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
			keywords : 'international law firm, international transaction, international business, international investments',
			canonical : '',
	        templateUrl : 'partials/home.html',
	        controller : 'MainCtrl'
        })
        .when("/home", {
        	redirectTo: '/'
        })
        .when("/the_firm", {
	        title : 'Our Firm Values: Quality, Teamwork, Confidentiality, Strong Relationships',
			robots : 'follow,index',
			description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
			keywords : 'international law firm, international transaction, international business, international investments',
			canonical : '',
	        templateUrl: "partials/the_firm.html",
	        controller: "MainCtrl"
        })
        .when("/practice_areas", {
	        title : 'Our Practice Areas, International Transaction, Business and Investment',
			robots : 'follow,index',
			description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
			keywords : 'international law firm, international transaction, international business, international investments',
			canonical : '',
	        templateUrl: "partials/practice_areas.html",
	        controller: "MainCtrl"
        })
        .when("/locations", {
	        title : 'Our Locations',
			robots : 'follow,index',
			description : 'We have locations in the USA, Russia, Belgium, Luxemburg, Canada, Brazil, and Dominican Republic.',
			keywords : 'international law firm locations world-wide',
			canonical : '',
	        templateUrl: "partials/locations.html",
	        controller: "MainCtrl"
        })
        .when("/our_team", {
	        title : 'Our Team. Teamwork and Highly Qualified Professionals is Our Aproach',
			robots : 'follow,index',
			description : 'Our Team. Teamwork and Highly Qualified Professionals is Our Aproach',
			keywords : 'international law firm, international transaction, international business, international investments',
			canonical : '',
	        templateUrl: "partials/our_team.html",
	        controller: "MainCtrl"
        })
        .when("/our_team/:currentProfile", {
	        title : 'Our Team',
	        templateUrl: 
        		function(urlattr){
                	return 'partials/our_team/' + urlattr.currentProfile + '.html';
            	},
        	controller: "MainCtrl",
        })
        .when("/contact", {
	        title : 'Contact Us',
	        templateUrl: "partials/contact.html",
	        controller: "MainCtrl"
        })
        .when("/links_events", {
	        title : 'Links and Events',
	        templateUrl: "partials/links_events.html",
	        controller: "MainCtrl",
        })
        .when("/not_found", {
	        title : 'Request Not Found',
	        templateUrl: "partials/not_found.html",
	        controller: "MainCtrl"
        })

        .otherwise("/not_found", {
        	redirectTo: "partials/not_found.html",
        	controller: "MainCtrl"
        });

  		$locationProvider.html5Mode(true).hashPrefix('!');
    }])

    .controller('GmapCtrl', ['$scope', function($scope) {
    	$('#mapUS').css({'height' : '250px'});
    	$('#mapFR').css({'height' : '250px'});
      	var coordinatesUS = {lat: 25.772439, lng: -80.191349};
      	var coordinatesFR = {lat: 48.874967, lng: 2.320793};

    	mapUS = new google.maps.Map(document.getElementById('mapUS'), {
    	  zoom: 15,
    	  scrollwheel: false,
    	  center: coordinatesUS
    	});
    	var marker = new google.maps.Marker({
    	  position: coordinatesUS,
    	  map: mapUS
    	});

    	mapFR = new google.maps.Map(document.getElementById('mapFR'), {
    	  zoom: 13,
    	  scrollwheel: false,
    	  center: coordinatesFR
    	});
    	var markerfrance = new google.maps.Marker({
    	  position: coordinatesFR,
    	  map: mapFR
     	});
    }])

  // JQuery code

$(window).on('scroll', function(){
    var slideHeight = ('50');
	if( $(window).scrollTop()>slideHeight){
		$('.navbar.noscrollActive').removeClass('noscroll');
	} else {
		$('.navbar.noscrollActive').addClass('noscroll');
	}
});

})(window.angular);


// $(window).load(function(){
// 	if ('localStorage' in window && window['localStorage'] !== null) {
// 		if (localStorage.fontSizeSet) {
// 			document.body.classList.add('font-size-' + localStorage.fontSizeSet);
// 			document.getElementById('fontSizeSelector').value = localStorage.fontSizeSet;
// 		}
// 		else {
// 			document.body.classList.add('font-size-1');
// 			document.getElementById('fontSizeSelector').value = '1';
// 		}
// 	}
// });
//
// // font size tool local storage
// $('#fontSizeSelector').change(function(){
// 	if ('localStorage' in window && window['localStorage'] !== null) {
// 		try {
// 			var fontSize = document.getElementById('fontSizeSelector').value;
// 			// The setItem(‘key’,’value’) allows us to write the data into the local storage.
// 			localStorage.setItem('fontSizeSet', fontSize);
// 			document.body.classList.remove('font-size-1', 'font-size-2', 'font-size-3');
// 			document.body.classList.add('font-size-' + fontSize);
// 		}
// 		catch (e) {
// 			if (e == QUOTA_EXCEEDED_ERR) {
// 				alert('Quota exceeded!');
// 			}
// 		}
// 	} else {
// 		alert('Error: Cannot set font size as your browser do not support local storage');
// 	}
// });
// $('label.font-size .default').click(function() {
// 	$("#fontSizeSelector").val(1);
// 	$("#fontSizeSelector").trigger('change');
// });
// $('label.font-size .larger').click(function() {
// 	$("#fontSizeSelector").val(2);
// 	$("#fontSizeSelector").trigger('change');
// });
// $('label.font-size .largest').click(function() {
// 	$("#fontSizeSelector").val(3);
// 	$("#fontSizeSelector").trigger('change');
// });
//
//

