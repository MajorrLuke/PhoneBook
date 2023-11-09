const { PrismaClient } = require('./generated/client');
const prisma = new PrismaClient();

async function alimentar() {
  await prisma.user.create({
    data: {
      name: 'Major',
      phoneNumbers: {
        create: { number: '(34) 99682-2318' },
      },
    },
  });

  await prisma.user.create({
    data: {
      name: 'Lucas Cornachioni',
      phoneNumbers: {
        create: [{ number: '(34) 99682-2318'}, {number: '(34) 92222-2222' },],
      },
    },
  });

  await prisma.user.create({
    data: {
      name: 'Jéssica de Brito',
      phoneNumbers: {
        create: [{ number: '(34) 99682-2318'}, {number: '(34) 92222-2222' }, {number: '(34) 92222-2222' }, {number: '(34) 92222-2222' }, {number: '(34) 92222-2222' }, {number: '(34) 92222-2222' }, {number: '(34) 92222-2222' }, {number: '(34) 92222-2222' },],
      },
    },
  });

  // Add more users and phone numbers as needed

  await prisma.$disconnect();
}



alimentar().catch((e) => {
  throw e;
});