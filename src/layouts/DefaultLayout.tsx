import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';


export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className='max-w-[1000px] w-full mx-auto py-8 px-5'>
        <div>
          <Outlet /> 
        </div>
      </main>
    </>
  );
};
