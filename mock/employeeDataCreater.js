const { faker } = require('@faker-js/faker');

let db = {
    users: []
}

const mockDataMaxCount = 50

for (let i = 1; i < mockDataMaxCount; ++i) {
    db.users.push({
        id: i,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
    })
}

console.log(JSON.stringify(db))


// モック用データの用意　実行コマンドメモ UTF-8 文字コード注意
// node .\mock\employeeDataCreater.js > .\mock\db.json