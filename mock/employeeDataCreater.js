const { faker } = require('@faker-js/faker');

let db = {
    users: []
}

const mockDataMaxCount = 20

for (let i = 1; i < mockDataMaxCount; ++i) {
    db.users.push({
        id: i,
        employeeId: faker.finance.routingNumber(),
        department1: faker.name.jobArea(),
        department2: faker.name.jobType(),
        employeeClass: faker.company.companyName(),
        name: faker.name.firstName() + " " + faker.name.lastName(),
        name: faker.name.firstName() + " " + faker.name.lastName(),
        mailAddress: faker.internet.email(),
        position: faker.name.jobTitle(),
        joiningDate: faker.date.past(),
        retirementDate: "",
        suspensionDate: "",
        secondedDate: "",
        secondedDestination: "",
        maidenName: "",
        remarks: "",
    })
}

console.log(JSON.stringify(db))


// モック用データの用意　実行コマンドメモ UTF-8 文字コード注意
// node .\mock\employeeDataCreater.js > .\mock\db.json