import { wait } from './wait';
export const getTodos = async (): Promise<Todo[]> => {
  await wait(1000); // штучне очікування

  return fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
    res.json(),
  );
};

export const getUser = async (userId: number): Promise<User> => {
  await wait(1000); // для демонстрації Loader

  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    res => res.json(),
  );
};
