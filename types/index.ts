export interface IBannerImage {
  url?: string;
  title?: string;
}
export interface Isys {
  id: string;
  firstPublishedAt: string;
  publishedAt: string;
}
export interface IPost {
  key: any;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  bannerImage: IBannerImage;
  tags: Array<string | number>;
  sys: Isys;
}

export interface IFormData {
  [name: string]: string;
}

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
