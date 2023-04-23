import { useState } from 'react';
import { useTheme } from '../utils/helper';

function ProfileDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const { darkMode, toggleDarkMode } = useTheme();

  const handleToggle = () => {
    toggleDarkMode();
  };


  return (
    <div >
      <img className='h-8 cursor-pointer' src="https://imgs.search.brave.com/MVkxgCvk9BbBt-8q9QfuBPtpsGBnO21SeZG2AAd2Vnc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9vcGVu/Y2xpcGFydC5vcmcv/aW1hZ2UvMjQwMHB4/L3N2Z190b19wbmcv/MjQ3MzE5L2Fic3Ry/YWN0LXVzZXItZmxh/dC0zLnBuZw" alt="user-pic" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className={`absolute top-18 right-10 w-50 p-6 border rounded-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
         <ul>
          <li>   
            <button onClick={handleToggle}><input
  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
  type="checkbox"
  role="switch"
  id="flexSwitchCheckDefault" />
<label
  className="inline-block pl-[0.15rem] hover:cursor-pointer"
  for="flexSwitchCheckDefault"
  >{darkMode?'Light':'Dark'} Mode</label
></button>
         </li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Help & feedback</a></li>
          <li><a href="#">Sign out</a></li>
        </ul>
        </div>
        
      )}
    </div>
  );
}

export default ProfileDropDown;