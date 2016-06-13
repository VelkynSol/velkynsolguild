app.component('pageHeader', {
	template: (
		'<header class="page-header" >' +
			'<h2> {{$ctrl.title}} </h2>' +
		'</header>'
	),
	controller: pageHeader_controller
});

function pageHeader_controller () {
	var pageHeader = this;
	
	pageHeader.title = 'Velkyn Sol';

};