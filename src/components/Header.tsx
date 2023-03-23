import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='max-w-[1200px] w-full mx-auto py-8 px-5'>
      <nav className='flex items-center justify-between '>
        <div className='flex items-end justify-center '>
          <h2 data-testid="logo01" className='text-gray-100 font-semibold text-4xl'>Dev</h2>
          <h3 data-testid="logo02" className='text-yellow-400 font-medium'>.Blog</h3>
        </div>
        <div className='flex items-center justify-center gap-10 text-gray-100 text-xl'>
          <NavLink to='/' title='Home'>
            Home
          </NavLink>
          <NavLink to='/users' title='Home'>
            Users
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
