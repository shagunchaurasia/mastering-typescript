class Department{

    private employees: string[] = [];
    constructor(private readonly id: string, private name: string){
        
    }

    describe(this: Department){
        console.log("Department: "+ this.id + " "+ this.name);
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }


}

const software = new Department("1","Software");
software.describe();
software.addEmployee("Shagun Chaurasia");
software.addEmployee("Rohit Chaurasia");
console.log(software);

const accounting = new Department("2","Accounting");
accounting.describe();
accounting.addEmployee("Anoop Gupta");
accounting.addEmployee("Indu Tokas");
accounting.printEmployeeInformation();

// const accountingCopy = {name: 'Accounting Copy', describe: accounting.describe};
// accountingCopy.describe();