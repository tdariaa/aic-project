import './Authentication.css';
import {AuthProps} from '../../types/types'

// export interface AuthProps {
//   children: React.ReactNode
// }

export const Authentication: React.FC<AuthProps> = ({children, buttonText, authLink, authText}) => {
  return (
    <section className="auth">
      <div className="auth__container">
        <form className="auth__form">
          {children}
          <button className="auth__button">
            <div className="auth__button_line" />
            <div className="auth__button_line" />
            <span className="auth__button-text">{buttonText}</span>
          </button>
          <p className="auth__text">
            {authText}
            <a href="" className="auth__link">
              {authLink}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
