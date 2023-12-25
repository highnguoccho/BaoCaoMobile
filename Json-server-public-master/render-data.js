// const faker = require('faker');
// const fs = require('fs');
// faker.locale = "vi";
// const randomClassList = (n)=>{
//     const classList = [];
//     if(n <= 0) return [];
//     //Loop
//     Array.from(new Array(n)).forEach(()=>{
//         const _class = {
//             id:faker.random.uuid(),
//             totalStudent:faker.random.number(40),
//             supervising_Teacher:`${faker.name.lastName()} ${faker.name.firstName()}`,
//             avatar_Teacher:faker.image.avatar(400,400)
//         }
//         classList.push(_class)
//     })
//     return classList;
// }
// const randomStudentList = (classList, studentOfClass)=>{
//     const studentList = [];
//     if(studentOfClass <= 0) return [];
//     for(const e of classList){
//         Array.from(new Array(studentOfClass)).forEach(()=>{
//             const student = {
//             class_id:e.id,
//             id:faker.random.uuid(),
//             name:`${faker.name.lastName()} ${faker.name.firstName()}`,
//             sex:faker.name.gender(),
//             medium_score:Number.parseFloat(faker.random.number(10)),
//             avatar:faker.image.avatar(400,400)
//             };
//             studentList.push(student)
//         })
//     }
//     return studentList;
// }
// (()=>{
//     const classList = randomClassList(20)
//     const studentList = randomStudentList(classList,1)

//     const db = {
//         class: classList,
//         students:studentList
//     };
//     //write db obj to db.json
//     fs.writeFile('./db.json',JSON.stringify(db),()=>{
//         console.log('Write successfully')
//     });
// })()

const faker = require('faker');
const fs = require('fs');

faker.locale = "vi";

const randomTableList = (n) => {
    const tableList = [];
    if (n <= 0) return [];

    for (let i = 1; i <= n; i++) {
        const table = {
            id: faker.random.uuid(),
            number: i,
            capacity: faker.random.number({ min: 2, max: 10 })
        };
        tableList.push(table);
    }
    return tableList;
};

const randomMenuItemList = (n) => {
    const menuItemList = [];
    if (n <= 0) return [];

    for (let i = 1; i <= n; i++) {
        const menuItem = {
            id: faker.random.uuid(),
            name: faker.lorem.words(),
            price: faker.random.number({ min: 10, max: 100 }),
            description: faker.lorem.sentence()
        };
        menuItemList.push(menuItem);
    }
    return menuItemList;
};

const randomOrderList = (tableList, menuItemList, numOrdersPerTable) => {
    const orderList = [];
    if (numOrdersPerTable <= 0) return [];

    for (const table of tableList) {
        for (let i = 0; i < numOrdersPerTable; i++) {
            const randomMenuItem = faker.random.arrayElement(menuItemList);
            const order = {
                id: faker.random.uuid(),
                table_id: table.id,
                item_id: randomMenuItem.id,
                quantity: faker.random.number({ min: 1, max: 5 }),
                timestamp: faker.date.recent(),
                menuItem: randomMenuItem
            };
            orderList.push(order);
        }
    }
    return orderList;
};
const randomUserList = (n) => {
    const userList = [];
    if (n <= 0) return [];

    for (let i = 1; i <= n; i++) {
        const user = {
            id: faker.random.uuid(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        };
        userList.push(user);
    }
    return userList;
};
(() => {
    const numTables = 10;
    const numMenuItems = 20;
    const numOrdersPerTable = 5;
    const numUsers = 5; // Số lượng người dùng

    const tableList = randomTableList(numTables);
    const menuItemList = randomMenuItemList(numMenuItems);
    const orderList = randomOrderList(tableList, menuItemList, numOrdersPerTable);
    const userList = randomUserList(numUsers); // Thêm danh sách người dùng

    const db = {
        tables: tableList,
        menuItems: menuItemList,
        orders: orderList,
        users: userList // Thêm thông tin người dùng vào cơ sở dữ liệu
    };

    fs.writeFile('./db.json', JSON.stringify(db), () => {
        console.log('Restaurant database created successfully.');
    });
})();