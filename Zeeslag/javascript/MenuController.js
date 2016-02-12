function MenuController(){
	var self = this;

	self.setSelected = function(name, length){
		var total = $('#selectedShip');
		total.data('ship', {name: name, direction: 'horizontal', length: length});
		var selection = $('#selection');
		var view = $('<div>');
		view.addClass(name + "Hori");
		view.addClass('selectedView');

		app.shipCtrl.selectShip(name, 'horizontal', length);

		selection.html(view);
	};

	self.resetSelected = function(name, direction){
		var total = $('#selectedShip');
		total.data('ship').name = name;
		total.data('ship').direction = direction;
		var selection = $('#selection');
		var view = $('<div>');
		if(direction == 'horizontal'){
			view.addClass(name + "Hori");
		}else if(direction == 'vertical'){
			view.addClass(name + "Verti");
		}
		view.addClass('selectedView');

		app.shipCtrl.selectShip(name, direction, total.data('ship').length);

		selection.html(view);
	};

	$('#optionsShips').on('click', '#ships .ship', function(){
	 	self.setSelected($(this).data('name'), $(this).data('length'));
	});

	$('#completeShipMenu').on('click', '#turn', function(){
	 	var selected = $('#selectedShip');
	 	if (selected.data('ship') != null) {
	 		var selectedName = selected.data('ship').name;
	 		var selectedDirection = selected.data('ship').direction;
	 		if (selectedDirection == 'horizontal') {
	 			self.resetSelected(selectedName, 'vertical');
	 		}else if( selectedDirection == 'vertical'){
	 			self.resetSelected(selectedName, 'horizontal');
	 		}
	 	}else{
	 		alert("Select ship first.");
	 	}
	});
	
	$('#completeShipMenu').on('click', '#place', function(){
	 	var selected = $('#selectedShip');
	 	if (selected.data('ship') != null) {
	 		var selectedName = selected.data('ship').name;
	 		var selectedDirection = selected.data('ship').direction;
	 		
	 	}else{
	 		alert("Select ship first.");
	 	}
	});
}