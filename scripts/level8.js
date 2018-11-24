function level8 () {
if (level===8) {
		steveRow = 5;
		steveColumn = 2;

		steveLeft = sLeft+steveColumn*40;
		steveTop = steveRow*40+10-40;

		boxRow = 3;
		boxColumn = 4;

		boxLeft = sLeft+boxColumn*40;
		boxTop = boxRow*40-40;

		box2Row = 4;
		box2Column = 4;

		box2Left = sLeft+box2Column*40;
		box2Top = box2Row*40-40;

		box3Row = 5;
		box3Column = 4;

		box3Left = sLeft+box3Column*40;
		box3Top = box3Row*40-40;

		box4Row = 6;
		box4Column = 4;

		box4Left = sLeft+box4Column*40;
		box4Top = box4Row*40-40;

		exitRow = 5;
		exitColumn = 2;

		row[1][2]='brick';
		row[1][3]='brick';
		row[1][4]='brick';
		row[1][5]='brick';
		row[1][6]='brick';

		row[2][1]='brick';
		row[2][2]='brick';
		row[2][3]='brick';
		row[2][4]='stone';
		row[2][5]='stone';
		row[2][6]='brick';

		row[3][1]='brick';
		row[3][2]='brick';
		row[3][3]='stone';
		row[3][4]='place';
		row[3][5]='stone';
		row[3][6]='brick';
		row[3][7]='brick';
		row[3][8]='brick';

		row[4][1]='brick';
		row[4][2]='stone';
		row[4][3]='stone';
		row[4][4]='stone';
		row[4][5]='stone';
		row[4][6]='stone';
		row[4][7]='brick';
		row[4][8]='brick';

		row[5][1]='brick';
		row[5][2]='stone';
		row[5][3]='brick';
		row[5][4]='stone';
		row[5][5]='brick';
		row[5][6]='stone';
		row[5][7]='brick';
		row[5][8]='brick';

		row[6][1]='brick';
		row[6][2]='stone';
		row[6][3]='place';
		row[6][4]='stone';
		row[6][5]='place';
		row[6][6]='stone';
		row[6][7]='place';
		row[6][8]='brick';

		row[7][1]='brick';
		row[7][2]='brick';
		row[7][3]='brick';
		row[7][4]='stone';
		row[7][5]='stone';
		row[7][6]='stone';
		row[7][7]='stone';
		row[7][8]='brick';

		row[8][3]='brick';
		row[8][4]='stone';
		row[8][5]='stone';
		row[8][6]='brick';
		row[8][7]='brick';
		row[8][8]='brick';

		row[8][3]='brick';
		row[8][4]='brick';
		row[8][5]='brick';
		row[8][6]='brick';
		row[8][7]='brick';
	}
};