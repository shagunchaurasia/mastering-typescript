class Department{

    name: string;

    constructor(n:string){
        this.name = n;
    }

    describe(this: Department){
        console.log("Department: "+ this.name);
    }
}

const software = new Department("Software");
const accounting = new Department("Accounting");

console.log(software);
console.log(accounting);

software.describe();
accounting.describe();


const accountingCopy = {name: 'Accounting Copy', describe: accounting.describe};
accountingCopy.describe();