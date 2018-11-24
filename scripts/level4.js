function level4 () {
if (level===4) {
		steveRow = 4;
		steveColumn = 3;

		steveLeft = sLeft+steveColumn*40;
		steveTop = steveRow*40+10-40;

		boxRow = 4;
		boxColumn = 2;

		boxLeft = sLeft+boxColumn*40;
		boxTop = boxRow*40-40;

		box2Row = 5;
		box2Column = 4;

		box2Left = sLeft+box2Column*40;
		box2Top = box2Row*40-40;

		exitRow = 6;
		exitColumn = 2;

		row[1][1]='brick';
		row[1][2]='brick';
		row[1][3]='brick';
		row[1][4]='brick';

		row[2][1]='brick';
		row[2][2]='stone';
		row[2][3]='place';
		row[2][4]='brick';

		row[3][1]='brick';
		row[3][2]='stone';
		row[3][3]='stone';
		row[3][4]='brick';
		row[3][5]='brick';
		row[3][6]='brick';

		row[4][1]='brick';
		row[4][2]='place';
		row[4][3]='stone';
		row[4][4]='stone';
		row[4][5]='diamond';
		row[4][6]='brick';

		row[5][1]='brick';
		row[5][2]='stone';
		row[5][3]='stone';
		row[5][4]='stone';
		row[5][5]='stone';
		row[5][6]='brick';

		row[6][1]='brick';
		row[6][2]='gold';
		row[6][3]='stone';
		row[6][4]='brick';
		row[6][5]='brick';
		row[6][6]='brick';

		row[7][1]='brick';
		row[7][2]='brick';
		row[7][3]='brick';
		row[7][4]='brick';
	}
};