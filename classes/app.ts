class Department{

    private employees: string[] = [];
    constructor(private readonly id: string, private name: string){
        
    }

    describe(this: Department){
        console.log(`Department: ${this.id}  -  ${this.name}`);
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }


}


class ITDepartment extends Department{

    constructor(id:string, public admins:string[]){
        super(id, "IT");
        this.admins = admins;
    }
}


class AccountingDepartment extends Department{
    constructor(id: string, private reports: string[]){
        super(id,"Accounting");
        this.reports = reports;
    }

    addReport(text: string){
        this.reports.push(text)
    }

    printReports(){
        console.log(this.reports)
    }
}


const accounting = new AccountingDepartment("1",[]);
accounting.describe();
accounting.addEmployee("Anoop Gupta");
accounting.addEmployee("Indu Tokas");
accounting.printEmployeeInformation();
accounting.addReport("Finalcial Report")
accounting.printReports();


const software = new ITDepartment("2", ['Shagun Chaurasia']);
software.describe();
software.addEmployee("Rohit Chaurasia")
software.printEmployeeInformation();

