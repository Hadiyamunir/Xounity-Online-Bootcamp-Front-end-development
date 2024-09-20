// Create a logic for a coffee shop that has an default value for the customer's age and displays:
//- "You get a 10% discount" if they are 65 or older
//- "You get a 5% discount" if they are a student (18-25)
//- "No discount" otherwise

let customerAge = +prompt("Enter your age:");
if(customerAge >= 65){
            alert("You get a 10% discount");
        }
        else if(customerAge >= 18 && customerAge <= 25 && confirm("Are you a student?")){
            alert("You get a 5% discount");
        }
        else {
            alert("No discount");
        }
