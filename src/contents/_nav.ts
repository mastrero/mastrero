import { BsInboxes, BsBookmarks } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { IoIosGitNetwork } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';

export default [
  {
    name: 'About',
    to: '#about',
    icon: FaRegUser,
  },
  {
    name: 'Skills',
    to: '#skills',
    icon: GiSkills,
  },
  {
    name: 'Work',
    to: '#work',
    icon: IoIosGitNetwork,
  },
  {
    name: 'Projects',
    to: '#projects',
    icon: BsInboxes,
  },
  {
    name: 'Blog',
    to: 'https://mastrero.me/blog',
    isExternal: true,
    icon: BsBookmarks,
  },
  {
    name: 'Contact',
    to: '#contact',
    icon: RiContactsLine,
  },
  {
    name: 'Resume',
    to: 'https://resue.me',
    icon: HiOutlineDocumentDuplicate,
    isExternal: true,
  },
];
