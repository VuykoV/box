function level1 () {
if (level===1) {
		steveRow = 2;
		steveColumn = 8;

		steveLeft = sLeft+steveColumn*40;
		steveTop = steveRow*40+10-40;

		boxRow = 3;
		boxColumn = 6;

		boxLeft = sLeft+boxColumn*40;
		boxTop = boxRow*40-40;

		exitRow = 2;
		exitColumn = 2;

		row[1][1]='brick';
		row[1][2]='brick';
		row[1][3]='brick';
		row[1][4]='brick';
		row[1][5]='brick';
		row[1][6]='brick';
		row[1][7]='brick';
		row[1][8]='brick';
		row[1][9]='brick';
		row[1][10]='brick';

		row[2][1]='brick';
		row[2][2]='diamond';
		row[2][3]='diamond';
		row[2][4]='stone';
		row[2][5]='stone';
		row[2][6]='stone';
		row[2][7]='gold';
		row[2][8]='stone';
		row[2][9]='stone';
		row[2][10]='brick';

		row[3][1]='brick';
		row[3][2]='stone';
		row[3][3]='stone';
		row[3][4]='stone';
		row[3][5]='stone';
		row[3][6]='stone';
		row[3][7]='stone';
		row[3][8]='stone';
		row[3][9]='place';
		row[3][10]='brick';

		row[4][1]='brick';
		row[4][2]='stone';
		row[4][3]='stone';
		row[4][4]='stone';
		row[4][5]='gold';
		row[4][6]='stone';
		row[4][7]='stone';
		row[4][8]='stone';
		row[4][9]='stone';
		row[4][10]='brick';

		row[5][1]='brick';
		row[5][2]='brick';
		row[5][3]='brick';
		row[5][4]='brick';
		row[5][5]='brick';
		row[5][6]='brick';
		row[5][7]='brick';
		row[5][8]='brick';
		row[5][9]='brick';
		row[5][10]='brick';
	}
};