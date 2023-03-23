import { useEffect, useState } from 'react';
import { UserProps } from '../@types/IUser';
import { CardUser } from '../components/CardUser';
import { api } from '../services/api';

export const Users = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  const fetchUsers = async () => {
    const { data } = await api.get('users');
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!users) {
  return <div>Loading...</div>
}

  return (
    <>
      <h2 className='text-gray-200 text-2xl font-semibold'>User list:</h2>
      <div className='flex flex-wrap gap-8  justify-center items-center mt-6'>
        {users.map((user) => (
          <CardUser
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
        ))}
      </div>
    </>
  );
};
