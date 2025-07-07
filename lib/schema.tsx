import { z } from "zod";

const PHONE_REGEX =
  /^\+?\d{1,4}?[-.\s]?(?:\(?\d{1,4}\)?[-.\s]?)*\d{3,4}[-.\s]?\d{3,4}$/;
const URL_REGEX =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;
const NAME_REGEX = /^[A-Za-z][A-Za-z0-9\s]*$/;
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  phone: z
    .string()
    .min(1, { message: "Phone Number is required" })
    .regex(PHONE_REGEX, {
      message: "Phone Number is invalid",
    }),
});

export const signUpSchema = z.object({
  phone_number: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(PHONE_REGEX, {
      message: "Phone number is invalid",
    }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  clientgoal: z.string().min(1, {
    message: "Client Goal is required",
  }),
  first_name: z
    .string()
    .min(1, { message: "First Name is required" })
    .regex(NAME_REGEX, {
      message: "first name is invalid",
    }),

  accept_terms: z.boolean().refine((val) => val === true, {
    message: "Please accept the terms policy.",
  }),
});

export const lockMessageSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  message: z.string().optional(),
  image: z.instanceof(File).optional(),
  video: z.instanceof(File).optional(),
  file: z.instanceof(File).optional(),
  category: z.string().min(1, { message: "Category is required" }),
  // price: z.number().min(5, { message: "Price is required" }),
  price: z.string().min(5, { message: "Price is required" }),
  // price: z
  //   .string()
  //   .transform((val) => Number(val))
  //   .refine((val) => val >= 5, {
  //     message: "Minimum price must be ₹5",
  //   }),

  expiry: z
    .date({
      required_error: "Expiry time is required",
    })
    .optional()
    .default(new Date()),
});

export const paymentLinkSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  banner: z.instanceof(File, { message: "Banner is required" }),
  description: z.string().optional(),
  currency: z.enum(["INR", "USD", "EUR"]),
  price: z.string().min(1, { message: "Price is required" }),
  showDiscount: z.boolean().optional(),
  discountedPrice: z.string().optional(),
  thankYouMsg: z.string().optional(),
  redirectUrl: z.string().min(1, { message: "Redirect URL is required" }),
  facebookPixelId: z.string(),
  googlePixelId: z.string(),
  email: z.string().email(),
  phone: z.string().min(1, {
    message: "Phone number is required",
  }),
  gstin: z.string(),
  questions: z
    .array(
      z.object({
        id: z.number(),
        text: z.string().min(1, { message: "Title is required" }),
      })
    )
    .optional(),
  product: z.instanceof(File, { message: "Product is required" }),
});

export const customerInfoSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  phone: z
    .string()
    .min(1, {
      message: "Phone number is required",
    })
    .regex(PHONE_REGEX, {
      message: "Phone Number is invalid",
    }),
});

export const otpSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export const tgOtpSchema = z.object({
  otp: z.string().min(5, {
    message: "Your one-time password must be 5 characters.",
  }),
});

export const bookDemoSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  phone: z
    .string()
    .min(1, { message: "Phone Number is required" })
    .regex(PHONE_REGEX, {
      message: "Phone Number is invalid",
    }),
  socialProof: z
    .string()
    .min(1, { message: "Social Proof is required" })
    .regex(URL_REGEX, {
      message: "URL is invalid",
    }),
  note: z.string(),
  terms: z.boolean().refine((val) => val === true, {
    message: "Please accept the terms policy.",
  }),
});

export const telegramOtpSchema = z.object({
  phone: z
    .string()
    .min(1, { message: "Phone Number is required" })
    .regex(PHONE_REGEX, {
      message: "Phone Number is invalid",
    }),
});

export const tgCommunitySchema = z
  .object({
    group: z.string().optional(),
    channelTitle: z.string().optional(),
    category: z.string().min(1, { message: "Category is required" }),
  })
  .refine((data) => data.channelTitle || data.group, {
    message: "Either channel title or group is required",
    path: ["channelTitle"],
  });

export const tgProductSchema = z.object({
  title: z.string().min(1, { message: "Phone Number is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  description: z.string().optional(),
  avatar: z.instanceof(File).optional(),
  banner_img: z.instanceof(File).optional(),
  subscriptions: z
    .array(
      z.object({
        id: z.number(),
        name: z.string().min(1, { message: "Plan Name is required" }),
        validity: z.string(),
        type: z.enum(["1", "7", "30", "360"]),
        price: z.string().min(1, { message: "Price is required" }),
        showDiscount: z.boolean().optional(),
        discountPrice: z.string().optional(),
      })
    )
    .nonempty({ message: "Subscriptions can't be empty" }),
  gstin: z.string(),
  questions: z.array(
    z.object({
      id: z.number(),
      text: z.string(),
    })
  ),
});
