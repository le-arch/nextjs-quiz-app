// components/ProtectedRoute.tsx
import { useRouter } from 'next/router';
import { useAppStore } from '../lib/store';

const ProtectedRoute = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const user = useAppStore((state) => state.user);

    if (typeof window !== 'undefined') {
      if (!user) {
        router.replace('/login');
        return null;
      }
      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default ProtectedRoute;