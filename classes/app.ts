class Department{

    protected employees: string[] = [];
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
    addEmployee(name: string) {
        if(name==="Shagun Chaurasia"){
            return;
        }
        this.employees.push(name);
    }
}


class AccountingDepartment extends Department{

    private lastReport : string;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error("No report found")
    }

    set mostRecentReport(value:string){
        if(!value){
            throw new Error("Please enter a valid value");
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]){
        super(id,"Accounting");
        this.reports = reports;
        this.lastReport = reports[0]
    }

    
    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text;
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
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Financial Report");
console.log(accounting.mostRecentReport);
accounting.printReports();


const software = new ITDepartment("2", ['Shagun Chaurasia']);
software.describe();
software.addEmployee("Rohit Chaurasia")
software.addEmployee("Shagun Chaurasia")
software.printEmployeeInformation();

