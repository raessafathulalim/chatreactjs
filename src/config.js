import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

const tokenProvider = new TokenProvider({
  url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/aaa66a0f-fb99-4e6e-8e41-b6d995198cd0/token"
});

const chatManager = new ChatManager({
  instanceLocator: "v1:us1:aaa66a0f-fb99-4e6e-8e41-b6d995198cd0",
  userId: "reactjsph", 
  tokenProvider: tokenProvider
});


export { chatManager }