const dictionary = {
  attributes: {
    email: 'E-mail Address',
  },
  custom: {
    name: {
      required: () => 'Name can not be empty',
      max: 'The name field may not be greater than 10 characters',
    },
  },
};

export default dictionary;
