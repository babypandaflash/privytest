import { PrivyProvider, usePrivy } from '@privy-io/react-auth';

// 🔑 REPLACE THIS with your App ID from Privy dashboard (https://dashboard.privy.io)
const PRIVY_APP_ID = 'cmj7qvm7c015sji0cqb9bdnxx';

function AuthContent() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  if (!ready) {
    return (
      <div className="container">
        <div className="loading">Loading Privy...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>🔐 Welcome</h1>
      <p className="subtitle">
        {authenticated ? 'You are logged in!' : 'Please login or sign up to continue'}
      </p>

      {!authenticated ? (
        <>
          <div className="auth-buttons">
            <button className="btn btn-primary" onClick={login}>
              Login / Sign Up
            </button>
          </div>

          <div className="features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Login with Email or Social Media</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Connect Crypto Wallets</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>High-Level Security</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Multi-Chain Support</span>
            </div>
          </div>
        </>
      ) : (
        <div className="user-info">
          <h3>✨ User Information</h3>
          
          {user?.email && (
            <p>
              <strong>📧 Email:</strong> {user.email.address}
            </p>
          )}
          
          {user?.wallet && (
            <p>
              <strong>👛 Wallet:</strong> {user.wallet.address.slice(0, 6)}...{user.wallet.address.slice(-4)}
            </p>
          )}
          
          {user?.google && (
            <p>
              <strong>🔗 Google:</strong> {user.google.email}
            </p>
          )}
          
          {user?.twitter && (
            <p>
              <strong>🐦 Twitter:</strong> @{user.twitter.username}
            </p>
          )}
          
          <p>
            <strong>🆔 User ID:</strong> {user?.id.slice(0, 8)}...
          </p>

          <button className="btn btn-logout" onClick={logout}>
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  // Validate App ID
  if (PRIVY_APP_ID === 'YOUR_PRIVY_APP_ID') {
    return (
      <div className="container">
        <h1>⚠️ Configuration Required</h1>
        <div className="warning-box">
          <h3>App ID Not Configured!</h3>
          <p>Please follow these steps:</p>
          <ol>
            <li>Go to <a href="https://dashboard.privy.io" target="_blank" rel="noopener noreferrer">dashboard.privy.io</a></li>
            <li>Sign up or login to your account</li>
            <li>Create a new application (New App)</li>
            <li>Copy your <strong>App ID</strong></li>
            <li>Open file <code>src/App.jsx</code></li>
            <li>Replace <code>YOUR_PRIVY_APP_ID</code> on line 4 with your App ID</li>
            <li>Save the file and refresh the page</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ['email', 'wallet', 'google', 'twitter'],
        appearance: {
          theme: 'light',
          accentColor: '#667eea',
          logo: 'https://your-logo-url.com/logo.png', // Optional: replace with your logo
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      <AuthContent />
    </PrivyProvider>
  );
}

export default App;
