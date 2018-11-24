function level2() {
	if (level===2) {
		steveRow = 5;
		steveColumn = 3;

		steveLeft = sLeft+steveColumn*40;
		steveTop = steveRow*40+10-40;

		boxRow = 4;
		boxColumn = 6;

		boxLeft = sLeft+boxColumn*40;
		boxTop = boxRow*40-40;

		box2Row = 6;
		box2Column = 6;

		box2Left = sLeft+box2Column*40;
		box2Top = box2Row*40-40;

		exitRow = 5;
		exitColumn = 10;

		row[1][7]='brick';

		row[2][7]='brick';
		row[2][8]='brick';

		row[3][1]='brick';
		row[3][2]='brick';
		row[3][3]='brick';
		row[3][4]='brick';
		row[3][5]='brick';
		row[3][6]='brick';
		row[3][7]='brick';
		row[3][8]='place';
		row[3][9]='brick';

		row[4][1]='brick';
		row[4][2]='stone';
		row[4][3]='diamond';
		row[4][4]='stone';
		row[4][5]='stone';
		row[4][6]='stone';
		row[4][7]='stone';
		row[4][8]='stone';
		row[4][9]='stone';
		row[4][10]='brick';

		row[5][1]='brick';
		row[5][2]='gold';
		row[5][3]='stone';
		row[5][4]='stone';
		row[5][5]='stone';
		row[5][6]='diamond';
		row[5][7]='stone';
		row[5][8]='stone';
		row[5][9]='stone';
		row[5][10]='stone';
		row[5][11]='brick';

		row[6][1]='brick';
		row[6][2]='stone';
		row[6][3]='stone';
		row[6][4]='stone';
		row[6][5]='stone';
		row[6][6]='stone';
		row[6][7]='stone';
		row[6][8]='gold';
		row[6][9]='stone';
		row[6][10]='brick';

		row[7][1]='brick';
		row[7][2]='brick';
		row[7][3]='brick';
		row[7][4]='brick';
		row[7][5]='brick';
		row[7][6]='brick';
		row[7][7]='brick';
		row[7][8]='place';
		row[7][9]='brick';

		row[8][7]='brick';
		row[8][8]='brick';

		row[9][7]='brick';
	}
};