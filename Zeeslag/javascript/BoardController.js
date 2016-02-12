function BoardController(){
	var self = this;

	self.drawBoard = function(width, height){
		var width = width;
		var height = height;
		var alphabet = "ABCDEFGHIJKLMNOPQRSTUVW";
		//jquery TD = zoeken naar TD
		//jquery <td> = nieuw TD element maken

		var theBoard = $('#board');

		for(y = 0; y < width; y ++){
			
			var row =  $('<tr>');
			
			for(x = 0; x < height; x ++){
				var tile = $('<td>');
				tile.attr('id', '' + alphabet[x] + y );
				tile.addClass('tile');
				tile.data('coord', {mijnX: alphabet[x], mijnY: y});
				tile.data('clicked', false);
				row.append(tile);
			}
			theBoard.append(row);
		}
	};
	
	$('#board').on('click', '.tile', function()
	{
		var selected = $('#selectedShip');
		if (selected.data('ship') != null)
		{
			var selectedName = selected.data('ship').name;
	 		var selectedDirection = selected.data('ship').direction;
			var selectedLength = selected.data('ship').length;
			var x = $(this).data('coord').mijnX;
			var y = $(this).data('coord').mijnY;
			var valid = true;
			
			if (selectedDirection == 'horizontal') 
			{
				for(c = x; c < (x + selectedLength); c ++)
				{
					var tile = $('#' + c + y);
					//tile.addClass('ship');
					tile.data('clicked', true);
					tile.removeClass('tile').addClass('tileClicked');
				}
	 		}
			else if( selectedDirection == 'vertical')
			{
				var theCoord = {x: x, y: y};
				for(index = y; index < (y + selectedLength); index ++)
				{
					var tile = $('#' + theCoord.x + theCoord.y);
					if(tile.hasClass("tileClicked") || y < $('#board').height)
					{
						valid = false
					}
					theCoord.y++;
				}
				if(valid == true)
				{
					var theCoord = {x: x, y: y};
					for(index = 0; index < selectedLength; index++)
					{
						var tile = $('#' + theCoord.x + theCoord.y);
						tile.data('clicked', true);
						tile.removeClass('tile').addClass('tileClicked');
						theCoord.y++;
					}
				}
	 		}
		}
	});

	//$('#board').on('click', '.tile', function(){
	//	$(this).data('clicked', true);
	//	$(this).removeClass('tile').addClass('tileClicked');
 	//	alert("x: " + $(this).data('coord').mijnX + " y: " + $(this).data('coord').mijnY);
	//});

	$('#board').on('click', '.tileClicked', function(){
	 	alert("Dit vakje is al geklikt. EXTERMINATE!");
	});
}