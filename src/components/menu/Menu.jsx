import React from 'react'
import MenuItem from './MenuItem'
import MailIcon from '../icons/MailIcon'
import InternetIcon from '../icons/InternetIcon'
import FolderIcon from '../icons/FolderIcon'
import UrlIcon from '../icons/UrlIcon'

const Menu = () => {
  return (
    <div className='w-full h-full grid grid-cols-1 grid-rows-[11rem_11rem_11rem_11rem_11rem_11rem] gap-4 px-7 md:grid-cols-3 md:grid-rows-2 md:gap-[3rem] md:p-10'>
        <MenuItem itemInfo={{ name: 'Email Security', url: '/email-security', icon: <MailIcon/> }} />
        <MenuItem itemInfo={{ name: 'Network Security', url: '/network-security', icon: <InternetIcon/> }} />
        <MenuItem itemInfo={{ name: 'File Security', url: '/file-security', icon: <FolderIcon/> }} />
        <MenuItem itemInfo={{ name: 'URL Security', url: '/url-security', icon: <UrlIcon /> }} />
        <MenuItem itemInfo={{ name: 'Tool 5', url: '/' }} />
        <MenuItem itemInfo={{ name: 'Tool 6', url: '/' }} />
    </div>
  )
}

export default Menu