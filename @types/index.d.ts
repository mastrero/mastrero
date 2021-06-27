import { IconType } from 'react-icons/lib';

export declare type HeaderMenuProps = { isOpen: boolean; onClose: () => void };
export declare type NavLinksProps = { name: string; url: string; emoji?: string; icon?: IconType };
export declare type SocialLinksProps = { name: string; url: string; icon?: IconType };
export declare type GridAreaType = { gridArea: Array<string> | string };
