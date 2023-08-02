//DESAFIO FIZZBUZZ

let num = 1

while(num >= 1 && num <= 100){
    if(num % 5 == 0 && num % 3 == 0){
        console.log('FizzBuzz')
        num++
    }else if (num % 5 == 0) {
        console.log('Buzz')
        num++
    }else if (num%3==0) {
        console.log('Fizz')
        num++
    }else {
        console.log(num)
        num++
    }
}
