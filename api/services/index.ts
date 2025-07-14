export const apiUrl = {
  payments: {
    createPayments: '/payments/create-payments/',
    fetch: '/payments/payment/:paymentId',
    payments: '/payments/payments/',
    // fetchAll: "/account/payment-link/",
  },
  testers: {
    createTesters: '/testers/create-testers/',
    testers: '/testers/testers/',
    fetch: '/testers/tester/:testerId',
    // fetchAll: "/account/payment-link/",
  },
  analytics: {
    createAnalytics: '/analytics/create-analytics/',
    analytics: '/analytics/analytics/',
    fetch: '/analytics/analytics/:c',
    // fetchAll: "/account/payment-link/",
  },
  settings: {
    addSettings: '/analytics/addSettings/',
    getSettings: '/analytics/getSettings/',
  },
  order: {
    create: '/account/razorpay/create_order/',
    createCashfree: '/account/cashfreepayment/create_order/',
    createCashfreeVerifyOrder: '/account/cashfreepayment/verifyOrder/',
  },
  dashboard: {
    create: '/dashboard/razorpay/create_order/',
    createCashfree: '/account/cashfreepayment/create_order/',
    createCashfreeVerifyOrder: '/account/cashfreepayment/verifyOrder/',
  },
  apps: {
    apps: '/apps/apps/',
    createApps: '/apps/create-apps/',
    editApp: '/apps/apps',
  },
  auth: {
    signUp: '/account/registor/',
    signIn: '/users/appsignin',
    verifyOtp: '/account/registor/submitotp',
    user: '/users//admin/my-account',
    goal: '/account/clientgoal/',
    updateProfile: '/account/registor/userupdate/',
  },
  company: {
    getCompany: '/company/get-company',
    createCompany: '/company/create-company',
    updateCompany: '/company/update-company',
  },
  lockMessage: {
    fetchAll: '/account/lock-messages/',
    create: '/account/lock-messages/',
    fetch: '/account/lockmessage/:messageId',
    update: '/account/lock-messages/:messageId/',
    delete: '/account/lock-messages/:messageId/',
  },
  telegram: {
    fetch: '/account/telegram/:telegramId',
    fetchAll: '/account/telegram/product_list/',
    verifyOtp: '/account/telegram/getotp/',
    authentication: '/account/telegram/telegram_authentication/',
    createGroup: '/account/telegram/telegram_creategroup/',
    createProduct: '/account/telegramproduct/',
  },

  customer: {
    create: '/account/addcustomer/',
    verify: '/account/addcustomer/verify/',
  },
  bookDemo: {
    create: '/account/bookdemo/',
  },
  message: {
    create: '/account/shareus/',
  },
  salesAnalytics: {
    fetchAll: '/account/analyticdata/',
  },
  payout: {
    fetchAll: '/account/payout/',
  },
  account: {
    aadharOtpSend: '/account/aadhar/otp/',
    aadharVerify: '/account/aadhar/verify/',
    pancardverify: '/account/pancard/verify/',
    emailsendotp: '/account/email/otp',
    emailverify: '/account/email/verify',
    accountdetails: 'account/userbankdetails/',
  },
  category: {
    list: '/account/coursefield/',
  },
};
