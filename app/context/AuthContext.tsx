'use client';

import {SessionProvider} from 'next-auth/react';


interface AuthConextProps {
    children: React.ReactNode;
}
const AuthContext = ({
    children
}: AuthConextProps) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthContext
