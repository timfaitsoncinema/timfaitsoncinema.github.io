$(document).ready(function(){
	$('#filter').one('shown.bs.collapse', function(){
		$('.categories-multi-select, .cinema-select, .directors-multi-select').chosen({allow_single_deselect: true });
	});
	$('.movie-select').chosen({allow_single_deselect:true});
});

