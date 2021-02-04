import { PropsWithChildren } from 'react';
import { AuthProvider } from './useAuth';

export function AppProvider({ children }: PropsWithChildren<unknown>) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
