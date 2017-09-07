Loops

var students = [ "john", "paul", "ringo" ]

for (INIT; BREAK CONDITION; POST-ITERATION)	{
	SOMETHING TO DO;
}

for (var i = 0; i < students.length;) {
	console.log(i);
}

OR use WHILE

var i = 0
while (i < students.length) {
	console.log(students[i]);
	i += 1;
}

EXAMPLE CODE USING A LOOP TO ITERATE

var students = [ "Bob", "Ben", "Ringo" ]

var bNames = "";

for (var i = 0; i < names.length; i += 1) {
	if (names[i][0] ==== "B") {
		bNAmes = names[i] + " " +bNames;
	}
}

console.log(bNames.trim());

