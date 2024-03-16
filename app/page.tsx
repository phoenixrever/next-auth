import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import LoginButton from '@/components/auth/login-button';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Home() {
  console.log('Home 还是 server端组件');
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-600 to-black">
      <div className="space-y-6 text-center">
        <h1
          // 注意这边的添加字体
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            font.className
          )}
        >
          🔒Auth
        </h1>

        <p className="text-white text-lg">俺の小さい認証サービス</p>

        {/* 
          为什么这边不使用button自己的OnClick事件是因为：
          Button 添加了onClick交互之后 整个Home页面就必须是client的了
          用client组件LoginButton 包裹后 只有Button自己是cilent组件
          Home 还是server端的
        */}
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
