'use client';

import { Sun, Moon } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className='w-12 h-6 border-[1.5px] border-gray-500 #53C28B70 rounded-[30px] flex justify-between items-center relative px-0.5 cursor-pointer'
      onClick={toggle}
    >
      <div>
        <Sun size={18} className='text-amber-500 stroke-2' />
      </div>
      <div>
        <Moon size={18} className='text-amber-500 stroke-2' />
      </div>

      <div
        className={`w-[18px] h-[18px] bg-[#53C28B] rounded-full absolute ${
          mode === 'light' ? 'left-0.5' : 'right-0.5'
        }`}
      />
    </div>
  );
};

export default DarkModeToggle;
