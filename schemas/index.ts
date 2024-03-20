import * as z from 'zod';

//接收string 参数
async function checkIfEmailIsValid(email: string) {
  if (email === 'phoenixrever@gmail.com') return false;
  return true;
}

//z.object() 是 Zod 库中用于声明一个对象模式的方法,并且可以在该对象中定义各种属性及其验证规则。
export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.')
    .refine(async (e) => {
      // Where checkIfEmailIsValid makes a request to the backend
      // to see if the email is valid.
      return await checkIfEmailIsValid(e);
    }, 'This email is aready registed!'),
  password: z.string(),
});
