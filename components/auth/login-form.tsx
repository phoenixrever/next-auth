'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTransition, useState } from 'react';
import { LoginSchema } from '@/schemas';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CardWrapper from '@/components/auth/card-wrapper';
import { login } from '@/actions/login';

export function LoginForm() {
  const [isPeding, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  // 1. Define your form.

  //z.infer 是 Zod 库中的一个工具函数，用于从 Zod schema 中推断出相应的 TypeScript 类型 (LoginSchema中定义了什么对象)
  const form = useForm<z.infer<typeof LoginSchema>>({
    //创建一个基于 Zod schema 的表单验证解析器。它会根据传入的 Zod schema 来验证表单数据是否符合指定的模式
    resolver: zodResolver(LoginSchema),
    //表单初始化时的值
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof LoginSchema>) {
    setError('');
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    startTransition(() => {
      login(values).then((data) => {
        if (data) {
          setError(data.error);
        }
      });
    });
  }

  return (
    <CardWrapper
      name="🔒登録"
      errorMessage={error}
      backButtonHref="/auth/sing-in"
      backButtonLabel="新規登録"
      showSocial
    >
      {/* useForm方法创建的对象属性（例如 resolver、defaultValues 等）传递给 <Form> 组件。 */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ユーザー名：</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="phoenixrever@gmail.com"
                        {...field}
                        disabled={isPeding}
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>パスワード：</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} disabled={isPeding} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button className="w-full mt-6">Create account</Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
