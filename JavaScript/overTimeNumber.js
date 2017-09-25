function noOvertime(no, works) { 
	while(no>0){
		let largestNumberInWorks = Math.max.apply(Math,works);
		let largestNumberIndex = works.indexOf(largestNumberInWorks);
		works[largestNumberIndex] -= 1;
		no -= 1;
	}
	return getOverTimeNumber(works);
}

function getOverTimeNumber(works){
	var answer = 0;
	for(var i=0, item; item = works[i]; i++){
		answer += item*item;
	}
	return answer;
}

console.log(noOvertime(4,[4,3,3]))
