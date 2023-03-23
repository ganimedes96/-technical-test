interface CardPostProps {
  title: string;
  body: string;
}

export const CardPost = ({ title, body }: CardPostProps) => {
  return (
    <div className='flex flex-col items-start justify-center gap-4'>
      <h2 className='text-yellow-400 text-2xl font-semibold'>{title}</h2>
      <p className='text-gray-200 text-xl'>{body}</p>
    </div>
  );
};
