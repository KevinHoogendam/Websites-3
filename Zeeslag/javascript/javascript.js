
var app = {
	boardCtrl: null,
	menuCtrl: null,
	shipCtrl: null
};

app.boardCtrl = new BoardController();
app.boardCtrl.drawBoard(10, 10);

app.menuCtrl = new MenuController();

app.shipCtrl = new ShipController();
app.shipCtrl.drawMenuShips();
