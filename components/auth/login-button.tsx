'use client';
// app目录下使用navigation
import { useRouter } from 'next/navigation';
/**
    `asChild` 属性通常用于在父组件中控制子组件的外观和行为。它的存在可以让父组件更加灵活地决定如何使用子组件。

    以下是 `asChild` 属性可能的用途：

    1. **样式控制**: 父组件可以根据需要为子组件提供不同的样式。例如，当 `asChild` 为 `true` 时，父组件可以为子组件添加额外的样式或者更改子组件的外观。

    2. **交互控制**: 父组件可以根据 `asChild` 属性决定是否需要对子组件的交互进行特殊处理。例如，当 `asChild` 为 `true` 时，父组件可能需要监听子组件的特定事件并作出相应的响应。

    3. **条件渲染**: 父组件可以根据 `asChild` 属性决定是否需要渲染子组件。例如，当 `asChild` 为 `false` 时，父组件可以选择不渲染子组件，或者渲染另一个不同的组件。

    4. **逻辑处理**: 父组件可以根据 `asChild` 属性决定是否需要对子组件的逻辑进行特殊处理。例如，当 `asChild` 为 `true` 时，父组件可能需要传递额外的属性或者状态给子组件。

    总之，`asChild` 属性可以帮助父组件更好地控制子组件的行为和外观，从而实现更灵活和可重用的组件设计。
 */

interface LoginButtonPorps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonPorps) => {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login');
  };

  if (mode === 'modal') {
    return <span>TODO Implement modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
