// function aaa(){
// 	const apple = 10

// 	return function bbb(){
// 		const banana = 5
// 		console.log(banana)
// 		console.log(apple)
// 	}
// }

// aaa()()

// 실행 결과
// 5
// 6

// 함수 선언식
// function aaa(apple){

// 	return function bbb(banana){
// 		console.log(banana)
// 		console.log(apple)
// 	}
// }

// aaa(2)(3)

// 실행 결과
// 2 => aaa에 넣은 인자값
// 3 => bbb에 넣은 인자값

// 화살표 함수로 변경
// const aaa = (apple)=>{
// 	return (banana)=>{
// 				console.log(apple)
// 				console.log(banana)
// 		}
// }

// aaa(2)(3)

// 중괄호 생략
// const aaa = (apple)=>(banana)=>{
//     console.log(apple)
//     console.log(banana)
// }

// aaa(2)(3)

// 중괄호 생략
// const aaa = (apple)=>(banana)=>(tomato){
//     console.log(apple)
//     console.log(banana)
//     console.log(tomato)
// }

// aaa(2)(3)(4)
