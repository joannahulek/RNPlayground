
let A = [1,2,3,4,5,6,7,8,9,0]
let B = [1,3,4,5,3,6,2,6,5,5,3]
let C = []

let T = []
let p=1
isPrime = true

//condition ? exprIfTrue : exprIfFalse

B.sort()

function addIfIsPrime(counter, value) {
    for (let i = 2; i <= counter / 2; i++) {
        if (counter % i === 0) {
            isPrime = false
            break;
        }
    }

    if (isPrime) {
        T.push(value)
    }
}

for (let i=0; i<B.length; i++){
    if (B[i]==B[i+1]){
        p++
    } else{
        addIfIsPrime(p, B[i])
        p=1
    }
}