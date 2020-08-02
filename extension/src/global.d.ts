interface Window {
  Twitch: {
    ext: {
      onAuthorized: (callback: (user: TwitchUser) => Promise<void>) => void;
    };
  };
}

interface TwitchUser {
  channelId: string;
  clientId: string;
  token: string;
  userId: string;
}
