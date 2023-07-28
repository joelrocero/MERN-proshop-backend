import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('qwerty123456', 10),
    isAdmin: true,
  },
  {
    name: 'mario',
    email: 'mario@gmail.com',
    password: bcrypt.hashSync('qwerty123456', 10),
  },
  {
    name: 'luigi',
    email: 'luigi@gmail.com',
    password: bcrypt.hashSync('qwerty123456', 10),
  },
]

export default users

