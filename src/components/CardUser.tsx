import { UserCircle } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { UserProps } from '../@types/IUser';

export const CardUser = ({ id, username, name, email }: UserProps) => {
  return (
    <div
      data-testid={`user${id}`}
      key={id}
      className='flex flex-col w-[250px] p-2 bg-gray-500 rounded border-t-4 border-sky-500 text-gray-200 items-center justify-center gap-4'>
      <div>
        <UserCircle size={70} weight='light' color='#49cdee' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <strong>{name}</strong>
        <span>{username}</span>
        <span>{email}</span>
      </div>
      <NavLink
        to={`/user/${id}`}
        className='text-yellow-600 border-yellow-600 border-2 rounded-xl w-full text-center m-2'>
        More details
      </NavLink>
    </div>
  );
};
