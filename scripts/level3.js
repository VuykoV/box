function level3() {
	if (level===3) {
		steveRow = 2;
		steveColumn = 5;

		steveLeft = sLeft+steveColumn*40;
		steveTop = steveRow*40+10-40;

		boxRow = 3;
		boxColumn = 4;

		boxLeft = sLeft+boxColumn*40;
		boxTop = boxRow*40-40;

		box2Row = 3;
		box2Column = 5;

		box2Left = sLeft+box2Column*40;
		box2Top = box2Row*40-40;

		exitRow = 5;
		exitColumn = 2;

		row[1][4]='brick';
		row[1][5]='brick';
		row[1][6]='brick';
		row[1][7]='brick';
		row[1][8]='brick';

		row[2][1]='brick';
		row[2][2]='brick';
		row[2][3]='brick';
		row[2][4]='brick';
		row[2][5]='stone';
		row[2][6]='stone';
		row[2][7]='stone';
		row[2][8]='brick';

		row[3][1]='brick';
		row[3][2]='stone';
		row[3][3]='gold';
		row[3][4]='stone';
		row[3][5]='place';
		row[3][6]='place';
		row[3][7]='stone';
		row[3][8]='brick';

		row[4][1]='brick';
		row[4][2]='stone';
		row[4][3]='stone';
		row[4][4]='stone';
		row[4][5]='stone';
		row[4][6]='gold';
		row[4][7]='brick';
		row[4][8]='brick';

		row[5][1]='brick';
		row[5][2]='diamond';
		row[5][3]='stone';
		row[5][4]='brick';
		row[5][5]='brick';
		row[5][6]='brick';
		row[5][7]='brick';
		row[5][8]='brick';

		row[6][1]='brick';
		row[6][2]='brick';
		row[6][3]='brick';
		row[6][4]='brick';
	}
};