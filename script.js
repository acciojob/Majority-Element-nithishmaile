//your code here

function majorityElement(arr){
	let majorityTimes=Math.floor(arr.length/2);
	let newMap=new Map()

	for(let num of arr){
		nemMap.set(num,(newMap.get(num)+1)||0)
	}

	for(let [key,value] of newMap){
		if(value>majorityTimes){
			return key
		}
	}
}

majorityElement([2,1,2])
