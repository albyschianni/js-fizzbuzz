// programma che stampi numeri da 1 a 100, quando divisibili per 3 "Fizz", per 5 "Buzz", per entrambi "FizzBuzz"

// ciclo stampa numeri da 1 a 100

const contenitore = document.querySelector(".container");

for (let i = 1; i <= 100; i++){
    
    const element = document.createElement("div");

    element.classList.add("box");
    contenitore.append(element);

    if ((i % 5 === 0) && (i % 3 === 0)){

        let FizzBuzz = "FizzBuzz"
        console.log(FizzBuzz);
        element.append(FizzBuzz);
        element.style.backgroundColor="red"

    } else if (i % 5 === 0){

        let Buzz = "Buzz";
        console.log(Buzz);
        element.append(Buzz);
        element.style.backgroundColor="yellow"

    } else if (i % 3 === 0){

        let Fizz = "Fizz";
        console.log(Fizz);
        element.append(Fizz);
        element.style.backgroundColor="green"
        

    } else {
        console.log("interazione", i)
        element.append(i);
    }
}


// condizione divisibilità numeri 

