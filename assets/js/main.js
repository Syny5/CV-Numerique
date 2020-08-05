// AngularJS : Routes
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate'])
myApp.config(function($routeProvider){
  $routeProvider
  // Déclaration de toutes les routes / views avec leur controller attitré
  .when('/home',{
    controller: 'homeController',
    templateUrl: 'partials/home.html'
  })
  .when('/experiences',{
    controller: 'expController',
    templateUrl: 'partials/experiences.html'
  })
  .when('/formations',{
    controller: 'formController',
    templateUrl: 'partials/formations.html'
  })
  .when('/projets',{
    controller: 'projetsController',
    templateUrl: 'partials/projets.html'
  })
  .when('/loisirs',{
    controller: 'loisirsController',
    templateUrl: 'partials/loisirs.html'
  })
  // "Si on se retrouve sur une page sans route, nous sommes de retour vers l'accueil."
  .otherwise({
    redirectTo: '/home'
  });
});

// Animation des progress-bar
myApp.controller('homeController', function(){
  $(document).ready(function(){
  	$('.skillbar').each(function(){
  		$(this).find('.skillbar-bar').animate({
  			width:$(this).attr('data-percent')
  		},3000);
  	});
  });
});

//Animations formations (effet opacité texte)
myApp.controller('formController', function(){
  $(document).ready(function(){
    $('p').animate({ opacity:'0.5' }, 1000);
    $('p').animate({ opacity:'1' }, 1000);
  });
});

//Animations expériences (effet opacité texte)
myApp.controller('expController', function(){
  $(document).ready(function(){
    $('p').animate({ opacity:'0.5' }, 1000);
    $('p').animate({ opacity:'1' }, 1000);
  });
});

//Animations loisirs (effet opacité texte)
myApp.controller('projetsController', function(){
  $(document).ready(function(){
    $('p').css('margin', 'auto');
    $('p').animate({ opacity:'0.5' }, 1000);
    $('p').animate({ opacity:'1' }, 1000);
  });
});

// Animations Loisirs (rotation d'images)
myApp.controller('loisirsController', function(){
  $(document).ready(function(){
    $('.funImg').animate(
       { deg: 360 },
       {
         duration: 1200,
         step: function(now) {
           $(this).css({ transform: 'rotate(' + now + 'deg)' });
         }
       }
     );
     $('#targaryen').animate(
        { deg: -360 },
        {
          duration: 1200,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
  });
  $('p').css('margin', 'auto');
  $('p').css('font-weight', 'bold');
});
