import { prisma } from "./lib/prisma";

// async function createUser() {
//     const user = await prisma.user.create({
//         data: {
//             name: "Alan",
//             email: "alan@email.com",
//             age: 20,
//         },
//     });

//     console.log(user);

//     const users = await prisma.user.findMany();

//     console.log(users);
// }

// createUser();

// async function getUsers() {
//     const users = await prisma.user.findMany();
//     console.log(users);
// }

async function createUser2() {
    const usuario = await prisma.user.create({
        data: {
            name: "Jorgin",
            email: "jorgin@email.com",
            age: 20,
            work: "Motorista",
        },
    });
}

createUser2();
