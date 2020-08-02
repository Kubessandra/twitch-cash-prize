import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import log from 'loglevel';

import UserAuthContext from './context';

interface UserAuthProviderProps {
  children: React.ReactNode;
}

function UserAuthProvider({ children }: UserAuthProviderProps): JSX.Element {
  const [user, setUser] = useState<TwitchUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    log.debug('[Mount] UserAuthProvider');
  }, []);

  const onAuth = useCallback(async (userFromAuth: TwitchUser): Promise<void> => {
    log.debug('User authenticated, ', userFromAuth);

    const config = {
      headers: { Authorization: `Bearer ${userFromAuth.token}` },
    };
    const result = await axios.get('http://localhost:8080/v1/auth', config);
    log.debug('[result], ', result);
    setUser(userFromAuth);
    setLoading(false);
  }, []);

  useEffect(() => {
    window.Twitch.ext.onAuthorized(onAuth);
  }, [onAuth]);

  return (
    <UserAuthContext.Provider value={{
      user,
      loading,
    }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export default UserAuthProvider;
