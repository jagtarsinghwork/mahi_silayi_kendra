// export type User = {
//   first_name: string;
//   email: string;
//   clientgoal: 1;
//   phone_number: string;
//   profile_image: string;
// };

export type ClientGoal = {
  id: number;
  text: string;
};

export type User = {
  _id: string;
  first_name: string;
  last_name?: string;
  email: string;
  phone_number: string;
  user_name: string;
  profile_image?: string;
  verified: boolean;
  is_activated: boolean;
  status: 'active' | 'inactive' | 'suspended';
  role: 'admin' | 'user' | 'superadmin';
  location: {
    latitude: string;
    longitude: string;
  };
  live: number;
  refer_code: string;
  refered_by: string;
  uuid: string;
  withdraw_number: string;
  bank_accounts: Array<{
    account_number: string;
    ifsc_code: string;
    account_holder: string;
    bank_name: string;
  }>;
  upi_id: string;
  telegramId: string | null;
  telegramNumber: string | null;
  isSuperAdmin: boolean;
  isLoggedIn: boolean;
  language: string;
  createdAt: string;
  updatedAt: string;
  password?: string; // Only for forms, should never be returned by API
  otp?: string | null;
  __v?: number;
};
