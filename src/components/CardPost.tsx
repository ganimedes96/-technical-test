interface CardPostProps {
  title: string;
  body: string;
  testId: number
}

export const CardPost = ({ title, body, testId }: CardPostProps) => {
  return (
    <div data-testid={`post${testId}`}  className='flex flex-col items-start justify-center gap-4'>
      <h2 className='text-yellow-400 text-2xl font-semibold'>{title}</h2>
      <p className='text-gray-200 text-xl'>{body}</p>
    </div>
  );
};
