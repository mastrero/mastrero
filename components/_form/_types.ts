export interface ITextArea {
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
  resize?:
    | 'vertical'
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'block'
    | 'both'
    | 'horizontal'
    | 'inline'
    | 'none';
}

export interface IInput extends Omit<ITextArea, 'resize'> {}
