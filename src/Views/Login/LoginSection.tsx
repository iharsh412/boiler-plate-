import './loginSection.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import ImageSection from './LoginImage.tsx';
import { signInWithGoogle, logout } from '../../firebase.ts';
import { Link } from 'react-router-dom';
import ICONS from '../../assets';

export default function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(); // Get Firebase Auth instance

  useEffect(() => {
    // Check for existing logged-in user on mount
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [auth, navigate]);

  function onClickPhone() {
    navigate('/loginphone');
  }

  async function onClickGoogle() {
    const result = await signInWithGoogle();
    if (result) {
      setUser(result.user);
      navigate('/');
    }
    console.log(result?.user?.getIdToken(), 'user');
  }

  return (
    <div className="loginPageParent">
      <div className="loginPageChild">
        <ImageSection />
        {user ? (
          <>
            <p>Welcome, {user.displayName}!</p>
            <button
              type="button"
              onClick={() => {
                logout();

                navigate('/');
              }}
            >
              logout
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="countinue_with_phone_parent"
              onClick={onClickPhone}
            >
              <span className="continue_with_phone_icon">
                <img src={ICONS.phone} alt="phone" />
              </span>
              <span className="continue_with_phone_text">
                Continue with phone
              </span>
            </button>

            <button
              type="button"
              className="continue_with_google_parent"
              onClick={onClickGoogle}
            >
              <span className="continue_with_google_icon">
                <img src={ICONS.google} alt="google" />
              </span>
              <span className="continue_with_google_text">
                Continue with Google
              </span>
            </button>

            <span className="login_Or_section">OR</span>
            <Link to="/" type="button" className="login_login_with_email">
              Login with Email
            </Link>
          </>
        )}

        <footer className="login_footer_parent">
          <p className="login_footer_first_section">
            All your personal details are safe with us
          </p>
          <p className="login_footer_second_section">
            If you continue, you are accepting OLX Terms and Conditions and
            Privacy Policy
          </p>
        </footer>
      </div>
    </div>
  );
}
