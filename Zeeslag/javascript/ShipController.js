function ShipController(){
	var self = this;
	var selected = {
		name: null,
		direction: null,
		length: null
	};

	self.drawMenuShips = function(){
		var battleship = $('#optionsShips #ships #battleship .ship');
		battleship.data('name', 'battleship');
		battleship.data('length', 5);
		var viewB = $('<div>');
		viewB.addClass('battleshipHori');

		battleship.append(viewB);

		var cruiser = $('#optionsShips #ships #cruiser .ship');
		cruiser.data('length', 4);
		cruiser.data('name', 'cruiser');
		var viewC = $('<div>');
		viewC.addClass('cruiserHori');

		cruiser.append(viewC);

		var frigate = $('#optionsShips #ships #frigate .ship');
		frigate.data('length', 3);
		frigate.data('name', 'frigate');
		var viewF = $('<div>');
		viewF.addClass('frigateHori');

		frigate.append(viewF);

		var minesweeper = $('#optionsShips #ships #minesweeper .ship');
		minesweeper.data('length', 2);
		minesweeper.data('name', 'minesweeper');
		var viewM = $('<div>');
		viewM.addClass('minesweeperHori');

		minesweeper.append(viewM);
	};

	self.selectShip = function(name, direction, length){
		self.selected = {name: name, direction: direction, length: length};
	};

	self.getSelected = function(){
		return self.selected;
	}
}