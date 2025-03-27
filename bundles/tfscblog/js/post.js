$(document).ready(function(){
	$('span[data-toggle="tooltip"]').tooltip();

	$('.minus-plus').click(function(){
		var $h = $(this);
		var $div = $h.next('div');
		var glyAdd = 'glyphicon-plus';
		var glyRemove = 'glyphicon-minus';
		if($div.css('display')=='none'){
			glyAdd = 'glyphicon-minus';
			glyRemove = 'glyphicon-plus';
			$h.addClass('half-opacity');
		}else{
			$h.removeClass('half-opacity');
		}
		$div.slideToggle(function(){
			$h.children('.glyphicon').removeClass(glyRemove).addClass(glyAdd);
		});
	})

	$('#review-plus-content').on('hidden.bs.collapse', function(){
		$('#review-plus span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	}).on('shown.bs.collapse', function(){
		$('#review-plus span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	});

	$('#review-plus a').click(function(e){
		e.preventDefault();
	});

	$('a[href="#relatedMovies"]').one('click', function(){
		loadRelatedMovies($(this).data('movie-id'), 'category');
	});

	loadRelatedMovies = function(id, type){
		$.get('/films-lies/'+id+'/'+type,function(data){
			console.log(id+':'+type);
			$('#relatedMovies').html(data);
			$('#relatedMovies .load-related-movies').click(function(){
				loadRelatedMovies(id, $(this).data('type'));
			})
		});
	}

	$('#comment-infos').popover({'placement':'left', 'html':true, 'container':'body'})

	$(document).one('mousemove', function() {
        var $form = $('#add_comment');
        var action = $form.attr('action').replace(/^\/bot\?/, '');
        $form.attr('action', action);
    });
});