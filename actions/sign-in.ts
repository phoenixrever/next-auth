//app 外面的文件夹默认是 client端 这边只是演示 我不准备用 next的后端处理 spring 显然更好
import * as z from 'zod';
import axios from 'axios';
import { LoginSchema, SignInSchema } from '@/schemas';

export const signIn = async (values: z.infer<typeof SignInSchema>) => {
  const validatedFields = await SignInSchema.safeParseAsync(values);
  if (validatedFields.success) {
    return { error: 'ユーザー名またはパスワードは間違っています！' };
  }

  // return { succsee: 'ACCESS GRANTED！' };
};
