let b=parseInt(prompt("enter the month"));
	let a=new Date();
	a.setMonth(b);
	let res=a.getMonth();
	if(res>=0 && res<=4)
	{
		console.log("sammer");
	}
	else if(res>=5 && res<=8)
	{
		console.log("winnter");
	}
	else if(res>=9 && res<=11)
	{
	console.log("fall");
	}