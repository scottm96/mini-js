var	game=[		
    [".",	".",	".",	".",	".",	".",	".",	".",	"."],
    [".",	".",	".",	".",	".",	".",	".",	".",	"."],
    [".",	".",	".",	".",	".",	".",	".",	".",	"."],
    [".",	".",	".",	".",	".",	".",	".",	".",	"."],
    [".",	".",	".",	".",	".",	".",	".",	".",	"."],
    [".",	".",	".",	".",	".",	".",	".",	".",	"."],
    [".",	".",	".",	".",	".",	".",	".",	".",	"."],
    [".",	".",	".",	".",	".",	".",	".",	".",	"."],
    [".",	".",	".",	".",	".",	".",	".",	".",	"."],
];
var	board	=	document.createElement("PRE");
document.body.appendChild(board);
var	button=document.createElement("BUTTON");
button.onclick	=	fire
var	t=document.createTextNode("Fire!");
    document.body.appendChild(button);
    button.appendChild(t);

function drawBoard()	{
    var	boardContents	=	"";
    var	i;		
    var	j;
    for	(i=0;	i<9;	i++)	{
        for	(j=0;	j<9;	j++)	{
            boardContents	=	boardContents	+	game[i][j]+"	";
            //	Append	array	contents	for	each	board	square
        }
        boardContents	=	boardContents	+	"<br>";
        //	Append	a	line	break	at	the	end	of	each	horizontal	line
        }		
        return	boardContents;
}
board.innerHTML	=	drawBoard();
//	Display	the	board	on	the	page	using	the	above	function
var	x=prompt("Where	would you like to place	your cruiser?	Enter an X coordinate:	(0-8)");
var	y=prompt("Where	would you like to place your cruiser?	Enter a	Y	coordinate:	(0-8)");
var	direction=prompt("Place	(h)orizontally,	(v)ertically");
x	=	Number(x);		//	Convert	the	string	returned	by	"prompt"	into a	number
y	=	Number(y);		//	Convert	the	string	returned	by	"prompt"	into a	number
if	(direction[0]	==	"h")	{
    var	c;
    for	(c	=	x;	c	<	(x	+	4);	c++){
        game[y][c]	=	'4';
    }
}
//	Draw	cruiser	vertically
if	(direction[0]	==	"v")	{
    var	c;
    for	(c	=	y;	c	<	(y	+	4);	c++){
        game[c][x]	=	'4';
    }
}
board.innerHTML	=	drawBoard();	//	Redraw	board	with	cruiser added
//	Function	for	firing	a	shot	when	the	"Fire!	button	is	pressed
function	fire()	{
    var	fireX=prompt("Where	would	you	like	to	fire?	Enter	an	X coordinate:	(0-8)");
    var	fireY=prompt("Where	would	you	like	to	fire?	Enter	a	Y coordinate:	(0-8)");
    fireX	=	Number(fireX);
    //	Convert	the	string	returned	by	"prompt"	into	a	number
    fireY	=	Number(fireY);
    //		Convert	the	string	returned	by	"prompt"	into	a	number
    if	(game[fireY][fireX]	==	".")	{
    //	Check	if	the	specified	coordinate	is	occupied	by	thecruiser
        alert("Missed.");
    }
    else	if	(game[fireY][fireX]	==	"*")	{
        alert("You	already	hit	the	ship	there.");
    }	else	{
        alert("Kaboom!	You	hit	a	ship");
        game[fireY][fireX]	=	"*";
        board.innerHTML	=	drawBoard();
        //	Redraw	board	with	hit	marker	at	specified	coordinate
    }

    var	shipfound;		
    var	i;		
    var	j;
    //	Check	if	there	are	any	ships	remaining	on	the	board
    for	(i=0;	i<9;	i++)	{
        for	(j=0;	j<9;	j++)	{
            if	(game[i][j]	!=	"."	&&	game[i][j]	!=	"*")	{
                shipfound	=	true;
                //	Set	to	true	if	a	ship	is	found
            }
        }
    } if (!shipfound)	{
        //	If	no	ships	are	found	end	the	game
        alert("All	ships	have	been	sunk.	Well	done	Captain!	Gameover");
        document.body.removeChild(button);
        //	Remove	the	fire	button	from	the	page	after	game	over
    }
}