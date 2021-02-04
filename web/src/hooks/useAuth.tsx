import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

import api from '../services/api';

interface User {
  id: string;
  username: string;
  role: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@MaktubHeroes:token');
    const user = localStorage.getItem('@MaktubHeroes:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const reseponse = await api.post('sessions', { username, password });

    const { token, user } = reseponse.data;

    localStorage.setItem('@MaktubHeroes:token', token);
    localStorage.setItem('@MaktubHeroes:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@MaktubHeroes:token');
    localStorage.removeItem('@MaktubHeroes:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
