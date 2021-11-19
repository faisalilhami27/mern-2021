import Link from "next/link";
import styles from "../../../styles/Sign-In.module.css";

export default function SignInForm() {
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
      <div className="pt-30">
        <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email
          Address
        </label>
        <input type="email"
               className="form-control rounded-pill text-lg"
               id="email"
               name="email"
               autoComplete="off"
               aria-describedby="email"
               placeholder="Enter your email address"
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password"
               className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input type="password"
               className="form-control rounded-pill text-lg"
               id="password"
               name="password"
               aria-describedby="password"
               placeholder="Your password"
        />
      </div>
      <div className={`${styles['button-group']} d-flex flex-column mx-auto pt-40`}>
        <a className={`btn ${styles['btn-sign-in']} fw-medium text-lg text-white rounded-pill mb-16`}
           href="#"
           role="button"
        >
          Continue to Sign In
        </a>
        <Link href="/sign-up">
          <a className={`btn ${styles['btn-sign-up']} fw-medium text-lg color-palette-1 rounded-pill`}
             role="button"
          >
            Sign
            Up
          </a>
        </Link>
      </div>
    </>
  );
}
