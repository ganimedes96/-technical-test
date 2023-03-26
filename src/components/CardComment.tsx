import { User } from 'phosphor-react';
import { CommentsProps } from '../@types/IComments';

export const CardComment = ({ name, email, body, id, testId }: CommentsProps) => {
  return (
    <div
      data-testid={`comment${testId}`}
      className='flex items-center justify-center w-full gap-5 text-gray-200 bg-gray-600 p-2 rounded'
      key={id}>
      <div className='bg-gray-400 rounded-full p-4'>
        <User size={32} color='#49cdee' />
      </div>
      <div className='flex flex-col items-start justify-center gap-2'>
        <h3 className='text-blue-500'>Name: {name}</h3>
        <span className='font-semibold'>Email: {email}</span>
        <p>{body}</p>
      </div>
    </div>
  );
};
