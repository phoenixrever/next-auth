//TODO 还是不使用swr 了太麻烦 这边不删留着包装axios函数
import useSWR from 'swr';
import axios from 'axios';

//useSWR 是一个react hook 导致useRequest 只能在组件方法中使用 自定义是不行的。
export default function useRequest(request, { initialData, ...config } = {}) {
  return useSWR(
    request && JSON.stringify(request),
    () => axios(request || {}).then((response) => response.data),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        headers: {},
        data: initialData,
      },
    }
  );
}
