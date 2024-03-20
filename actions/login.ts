//app 外面的文件夹默认是 client端 这边只是演示 我不准备用 next的后端处理 spring 显然更好
import * as z from 'zod';
import axios from 'axios';
import { LoginSchema } from '@/schemas';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = await LoginSchema.safeParseAsync(values);
  if (validatedFields.success) {
    return { error: 'ユーザー名またはパスワードは間違っています！' };
  }

  // return { succsee: 'ACCESS GRANTED！' };
};
