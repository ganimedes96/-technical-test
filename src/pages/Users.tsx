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
      <div className="flex items-center justify-center gap-4 text-gray-200 my-16">
        <div className="w-48 h-px bg-gray-300" />
        <h2 className="text-2xl text-center ">List Users</h2>
        <div className="w-48 h-px bg-gray-300" />
      </div>
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
