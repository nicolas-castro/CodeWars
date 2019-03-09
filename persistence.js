const persistence = x => {
	if (x < 10)
		return 0;
	let total = 1;
	while(x >= 1)
    {
     total *= x%10; 
	 x = parseInt(x/10);
    }
	return total < 10 ? 1 : 1 + persistence(total);
}