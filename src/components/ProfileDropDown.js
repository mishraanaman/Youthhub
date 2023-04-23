import { useState } from 'react';

function ProfileDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  // other logic here

  return (
    <div >
      <img className='h-8 cursor-pointer' src="https://imgs.search.brave.com/MVkxgCvk9BbBt-8q9QfuBPtpsGBnO21SeZG2AAd2Vnc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9vcGVu/Y2xpcGFydC5vcmcv/aW1hZ2UvMjQwMHB4/L3N2Z190b19wbmcv/MjQ3MzE5L2Fic3Ry/YWN0LXVzZXItZmxh/dC0zLnBuZw" alt="user-pic" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div class="absolute top-18 right-10 w-50 p-6 border rounded-xl bg-white">
         <ul>
          <li><a href="#">Appearance:Light</a></li>
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