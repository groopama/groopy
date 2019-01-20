const messages = [
  {
    _id: 1,
    text: 'Salut Groopy, je me demandais si les Kellogs étaient équilibrées au petit-déjeuner ?',
    createdAt: new Date(Date.UTC(2018, 10, 15, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Pol',
      avatar: require('../assets/images/empty_profile.png')
    }
  },
  {
    _id: 2,
    text: 'Salut Pol ! Non, ces céréales contiennent 34g de sucre par portion et ne sont pas recommandées !',
    createdAt: new Date(Date.UTC(2018, 10, 15, 17, 21, 0)),
    user: {
      _id: 2,
      name: 'Groopy',
      avatar: require('../assets/logo_chat.png')
    }
  },
  {
    _id: 3,
    text: 'Groopy, je me sens mal. Que dois-je faire ?',
    createdAt: new Date(Date.UTC(2018, 10, 16, 14, 1, 0)),
    user: {
      _id: 1,
      name: 'Pol',
      avatar: require('../assets/images/empty_profile.png')
    }
  },
  {
    _id: 4,
    text: 'As tu vérifié ta glycémie récemment ?',
    createdAt: new Date(Date.UTC(2018, 10, 16, 14, 2, 0)),
    user: {
      _id: 2,
      name: 'Groopy',
      avatar: require('../assets/logo_chat.png')
    }
  }
];

export default messages;