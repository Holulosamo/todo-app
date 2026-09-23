import * as z from 'zod';

const noSpecialCharacters = /^[a-zA-Z0-9]+$/

const emailRule = z.email("Enter a valid email address like name@example.com").nonempty("Email is required");
const passwordRule = z.string().transform(value => value.replace(/\s+/g, '')).pipe(z.string().min(7, "Your password must be at least 7 characters long"))

export const registerSchema = z.object({
   "register-username": z.string().transform(value => value.replace(/\s+/g, ''))
    .pipe(z.string().min(5, "Username must be at least 4 characters long").max(15, "Username is too long"))
    .refine((val) => noSpecialCharacters.test(val ?? ""), 'Username doesnt support special characters'),
    "register-email": emailRule,
    "register-password": passwordRule
})