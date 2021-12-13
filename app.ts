

function check_Anagram(str1:string,str2:string){
    if(str1.length != str2.length){
        return false
    }

    if(str1.split('').sort().join('') != str2.split('').sort().join('')){
        return false
    }

    return true

    
}

function check_OneCommon(arr1:any[],arr2:any[]){
    let ele1:any,ele2:any
    for(ele1 of arr1){
        for(ele2 of arr2){
            if(ele1==ele2){
                return true;
            }
        }

    }
    return false

}




console.log("############-START-###############")
console.log("anagram checker1: ", check_Anagram("apple","paple") );
console.log("anagram checker1: ", check_Anagram("apple","ppaple") );


let arr1 = "goodbye" .split('')
let arr2 = "hello" .split('')
let arr3 = "Watsup" .split('')
let arr4 = "eWhatsup" .split('')

console.log("OneCommon checker1: ",check_OneCommon(arr1,arr2))
console.log("OneCommon checker2: ",check_OneCommon(arr2,arr3))
console.log("OneCommon checker3: ",check_OneCommon(arr4,arr3))
console.log("OneCommon checker4: ",check_OneCommon(arr4,arr1))
console.log("OneCommon checker5: ",check_OneCommon(arr2,arr1))
console.log("OneCommon checker6: ",check_OneCommon(arr2,arr4))





console.log("############-END-###############")