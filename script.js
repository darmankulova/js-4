//TASK
// function numFunc(arr){
//      return arr.map((el) => el * 2)
// }
// console.log(numFunc([1,2,3,4,5]))

//TASK
// function numCheck(arr){
//      return arr.map((el) => el * el)
// }
// console.log(numCheck([1,2,3,4,5]))

//TASK
//['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR']
// function string(arr){
//      return arr.map((el) => el.toUpperCase())
// }
// console.log(string(['lorem', 'ipsum', 'dolor']))

//TASK
// ['lorem', 'ipsum', 'dolor'] => [1,2,3]
// function array(arr){
//      return arr.map((el,idx)=>idx + 1)
// }
// console.log(array(['Lorem', 'ipsum', 'dolor']))

//TASK
// ['lorem', 'ipsum', 'dolor', 'sit'] => [5,5,5,3]
// function lengthCheck(str){
//      return str.map(el => el.length)
// }
// console.log(lengthCheck(['Lorem', 'ipsum', 'dolor', 'sit']))

//TASK
// ['lorem', 'ipsum', 'dolor'] => ['Lorem', 'ipsum', 'Dolor']
// function stringCheck(array){
//      let result =array.map((el,idx) => idx % 2 === 0 ? el[0].toUpperCase() + el.slice(1)
//          : el[0].toLowerCase() + el.slice(1) )
//      return result
// }
// console.log(stringCheck(['lorem', 'ipsum', 'dolor']))

//TASK
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'
// function stringCheck(arr){
//      return arr.map(items => items.split(" ")).join('-')
// }
// console.log(stringCheck(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

//TASK
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'
// function stringCheck(arr){
//      return arr.map(items => items.split(" ")).join('/')
// }
// console.log(stringCheck(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

//TASK
//['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'
// function stringCheck(arr){
//      return arr.map(items => items.split(" ")).join(' ')
// }
// console.log(stringCheck(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

//TASK
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']
// function stringCheck(arr){
//      return arr.filter((el,idx)=> idx % 2 === 0)
// }
// console.log(stringCheck(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

//TASK
//[1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']
// function numberString(arr){
//      return arr.concat(arr)
// }
// console.log(numberString([1123, 'qwe']))

//TASK
// [null, undefined] => [null, undefined, null, undefined]
// function nullUndefined(arr){
//      return arr.concat(arr)
// }
// console.log(nullUndefined([null, undefined]))

//TASK
// 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'
//     function stringCheck(array){
//      return array.filter((el,idx)=> idx % 2 === 0).join(' ')
//     }
// console.log(stringCheck(['lorem ipsum dolor sit amet']))

//TASK
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
// function loremIpsum(arr){
//    return arr.concat('consectetur', 'adipiscing', 'elit')
// }
// console.log(loremIpsum(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

//TASK
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]
// function numberCheck(num){
//      return num.filter(item => typeof item === "number")
// }
// console.log(numberCheck([123,33,444,'22',55,66,77,88,99]))

//TASK
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]
// function numberCheck(array){
//     let result =array.filter((item) => typeof item !== "string");
//     let result2 =array.find((item) => typeof item === "string");
//     console.log([...result,+result2])
// }
// console.log(numberCheck([123,33,444,'22',55,66,77,88,99]))


//TASK
//['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']
// function stringCheck(str){
//      return str.filter((item,idx)=> idx % 2 === 0)
// }
// console.log(stringCheck(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

//TASK
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']
// function stringCheck(str){
//      return str.filter((item,idx)=> idx % 2 !== 0)
// }
// console.log(stringCheck(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))