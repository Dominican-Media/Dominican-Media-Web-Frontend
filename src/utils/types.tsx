export type modalGenericType = {
  [key: string]: boolean;
};

export type blogItemType = {
  image: null | File | string;
  title: string;
  description: string;
  caption: string;
  category: string[];
  type: string;
  content: string;
  facebookUrl: string;
  xUrl: string;
  instagramUrl: string;
  createdAt?: string | Date;
  previewImage?: string | null;
  isFeatured: boolean;
  slug?: string;
  user: userType;
  likeCount: number;
  readCount: number;
};

export type categoriesType = {
  title: string;
  _id: string;
};

export type userType = {
  email: string;
  firstName: string;
  lastName: string;
  image?: string | null | File;
  phone?: string;
  gender?: string;
  role?: string;
  password?: string;
  bio: string;
};

export type requestType = {
  isLoading: boolean;
  data: any;
  error: any;
  id?: string;
};

export type usersCommentType = {
  comment: string;
  likeCount: number;
  slug: string;
  userName: string;
  _id: "6876bcdfc03f8043f56ed1cb";
};

export type serviceType = {
  description: string;
  image: string;
  title: string;
  _id: string;
};
