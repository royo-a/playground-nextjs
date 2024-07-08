'use server';

export const createUser = async (prevState, formData) => {
  return {
    message: 'User created successfully.',
  };
};

export const send = async (message) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 4000);
  });
};
