function getUsers() {
  const userList = [
    {
      _id: '5b21ca3eeb7f6fbccd471815',
      username: 'AdamCuffe',
      email: 'adamjcuffe@gmail.com',
      role: 'Admin',
      designation: 'Quantity Surveyor',
    },
    {
      _id: '5b21ca3eeb7f6fbscd471815',
      username: 'AdamBrown',
      email: 'adam.brown@graham.co.uk',
      role: 'Admin',
      designation: 'Senior Quantity Surveyor',
    },
  ]

  return userList
}

module.exports = {
  getUsers,
}
