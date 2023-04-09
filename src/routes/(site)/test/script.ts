// script used to manually test for adding accounts to the db

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.account.create({
        data: {
          uid: '1',
          username: 'test_input_user',
          password: 'test_input_password',
          firstname: 'Test1_fname',
          last_name: 'Test1_lname',
          is_tutor: true,
          phone_number: '714-888-8888',
          Subject: 'science',
        },
      })
      console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })