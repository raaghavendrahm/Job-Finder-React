// It is an array of objects. Note that it is a JS file, not a JSON file (object of array of objects). So, this is exported by default unlike json file where no export is done. This data is directly imported into App where as for json file fetch is used.

export const vacancies = [
  {
    id: 1,
    title: 'Frontend React Developer (Beginner)',
    company: 'Raaghu UI',
    city: 'Shivamogga',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, minima eius. Est rem ipsam rerum molestiae voluptatibus eveniet, dolor quod.',
  },

  {
    id: 2,
    title: 'Backend Node.js Developer (Intermediate)',
    company: 'Raani Technologies',
    city: 'Hosuru',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, minima eius. Est rem ipsam rerum molestiae voluptatibus eveniet, dolor quod.',
  },

  {
    id: 3,
    title: 'FullStack Developer (Senior)',
    company: 'Makku Infotech',
    city: 'Demlapura',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, minima eius. Est rem ipsam rerum molestiae voluptatibus eveniet, dolor quod.',
  },
];
