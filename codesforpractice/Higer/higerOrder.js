function customeOperation(nums, operation, ...extraargs) {
    let result=[];

    for (const num of nums) {
        result.push(operation(num, ...extraargs));
    }
    return result;
}

function square(num) {
    return num*num;
}

const adding  = (num,value) => {
 return num+value;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(customeOperation(numbers,square));
console.log(customeOperation(numbers,adding,10))