import { FaLinkedinIn, FaGithub, FaTwitter, FaBlog } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPerson } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { GrUserWorker, GrCloudComputer } from 'react-icons/gr';

export const nav_links = [
  {
    name: 'About',
    url: '#about',
    emoji: '👨🏻',
    icon: IoIosPerson,
  },
  {
    name: 'Blog',
    url: '#blog',
    emoji: '✍🏻',
    icon: FaBlog,
  },
  {
    name: 'Work',
    url: '#work',
    emoji: '👨🏻‍💻',
    icon: GrUserWorker,
  },
  {
    name: 'Projects',
    url: '#projects',
    emoji: '📄',
    icon: GrCloudComputer,
  },
  {
    name: 'Contact',
    url: '#contact',
    emoji: '📞',
    icon: RiContactsLine,
  },
];

export const SocialLinks = [
  {
    name: 'LinkedIn: @ArunKumar Nadikattu',
    url: 'https://www.linkedin.com/in/arunkumar-nadikattu',
    icon: FaLinkedinIn,
  },
  {
    name: 'GitHub: @mastrero',
    url: 'https://github.com/mastrero',
    icon: FaGithub,
  },
  {
    name: 'Twitter: @iKnowToCode',
    url: 'https://twitter.com/iKnowToCode',
    icon: FaTwitter,
  },
  {
    name: 'Email: arunaiekhil@gmail.com',
    url: 'mailto:arunaiekhil@gmail.com',
    icon: AiOutlineMail,
  },
];
