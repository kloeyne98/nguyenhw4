const r = Number(prompt("Enter the circle radius: "));

const circle ={ 
    radius: r, 

    circumference: function() { 
        return 2 * Math.PI * this.radius
    }, 
    area () {
        return Math.PI * Math.pow(this.radius, 2); 
    }
}
console.log(`Its circumference is ${circle.circumference().toFixed(2)}`); 
console.log(`Its area is ${circle.area().toFixed(2)}`);
console.log("Kloey's Output from Homework 4 - Excerse 3");