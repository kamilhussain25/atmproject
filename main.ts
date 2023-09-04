import inquirer from "inquirer";
import chalk from "chalk";




interface usertype {
    pin: number;
    balance: number;
    name: string;

}
const user: usertype = {
    pin: 123,
    name: "kamil hussain",
    balance: 100000,

}


console.log(chalk.green("WELCOME TO MYBANK ATM MACHINE"))
console.log(chalk.bgBlack.black("Here is your pin code:123"))
let answer: any = await inquirer.prompt({
    message: "please enter your pin",
    type: "number",
    name: "pin"

})
let countinuetras: boolean = true





if (Number(answer.pin) !== user.pin) {
    console.log(chalk.red(`You have entered invalid pin ${answer.pin}`))
}
else {
    while (countinuetras == true) {

        let answer = await inquirer.prompt([{
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw", "Fast cash", "Balance inquiry", "Deposit", "Exit"],
            name: "operation"
        }, {
            message: "Select an amount",
            type: "list",
            choices: [500, 1000, 5000, 10000, 20000, 30000],
            name: "amount",
            when(answer) {
                return answer.operation == "Fast cash"
            }

        }, {

            message: "enter your amount",
            name: "amount",
            when(answer) {
                return answer.operation == "Withdraw"
            }
        }, {
            message: "enter your amount",
            name: "add",
            type: "number",
            when(answer) {
                return answer.operation == "Deposit"
            }
        }, {
            message: "Do you want to exit",
            name: "exit",
            type: "confirm",
            when(answer) {
                return answer.operation == "Exit"
            }
        }



        ]);
        if (answer.operation == "Balance inquiry") {
            console.log(chalk.bold.yellowBright(`your balance is : ${user.balance}`))
            countinuetras = true;
        }
        else if (answer.operation == "Deposit") {
            let result = user.balance = user.balance + answer.add
            console.log(chalk.bgBlue(`your balance after adding amount:${result}`))
            countinuetras = true
        }
        else if (answer.operation == "Exit") {
            console.log(chalk.bgMagenta("Thank you for using Atm"))
            countinuetras = false
        }
        else {
            let result1 = user.balance = user.balance - answer.amount;
            console.log(chalk.bold.magentaBright(`Now your new balance is ${result1}`))
            countinuetras = true;
        }





    }



}




