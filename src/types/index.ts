export type Navbar_Props = {
  tabs: Array<any>;
};

export type Content_Props = {
  tabs: any;
};

export interface Input_Props {
  placeholder?: string;
  size?: 'xs' | 'sm' | 'md' | 'xl';
  variant?: 'outline' | 'unstyled' | 'flushed' | 'filled';
  borderRadius?: string;
  type?: 'text' | 'email' | 'tel';
  isRequired?: boolean;
  icon?: React.FC;
  name: string;
  value?: string | any;
  update?: Function;
  id?: string;
}
