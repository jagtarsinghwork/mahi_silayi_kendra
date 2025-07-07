export type Analytics = {
  total_revenue: number;
  total_sale: number;
};

export type QuestionData = {
  id: number;
  text: string;
};

export type Subscription = {
  id: number;
  plan_name: string;
  validity: number;
  type: string;
  life_time: boolean;
  duration_days: number;
  price: number;
  discount: number;
  created_at: string;
  updated_at: string;
  group: number;
};

export type PaymentProductResponse = {
  id: number;
  user: string;
  questions_data: QuestionData[];
  title: string;
  banner_img: string;
  desc: string;
  price: number;
  discount: number;
  thank_note: string;
  redirect_url: string;
  googel_pixel_id: string | null;
  facebook_pixel_id: string | null;
  email: string;
  phone_number: string;
  gst_info: boolean;
  media_url: string;
  create_at: string;
  update_at: string;
  product_uuid: string;
};

export type PaymentData = {
  id: number;
  title: string;
  product_file: string;
  price: number;
  expires: string;
  revenue: number;
  product_link: string;
  product_uuid: string;
};
export type OrederVerifyData = {
  id: number;
  status: string;
  cashfree_order_id: string;
};

export type LockMessageType = {
  id: number;
  title: string;
  product_file: string;
  product_img: string;
  product_video: string;
  price: string;
  expire: string;
  revenue: number;
  product_link: string;
  product_uuid: string;
  categroy: number;
  desc: string;
};

export type SalesAnalyticsType = {
  id: number;
  title: string;
  product_type: 'payment' | 'telegram' | 'lockmessage';
  amount: number | null;
  user_status: string;
  payment_status: boolean;
  email: string;
  create_at: string;
};

export type TelegramGroupType = {
  id: number;
  category: number;
  group_title: string;
  group_desc: string;
  phone_number: string;
  channel_name: string;
};

export type TelegramProductType = {
  id: number;
  title: string;
  group_name: string;
  status: boolean;
  product_uuid: string;
  questions_data: QuestionData[];
  subscribe_plan: Subscription[];
  desc: string;
  banner_img: string;
  avatar: string;
  gst_info: boolean;
  create_at: string;
  update_at: string;
  group: number;
  category: number;
};

export type ApiResponse<T> = {
  status: string;
  data: T;
};

export type ListResponse<T> = {
  count: number;
  results: T[];
};

export type ListApiResponse<T> = ApiResponse<ListResponse<T>>;

export type PayoutApiResponse = {
  id: number;
};
