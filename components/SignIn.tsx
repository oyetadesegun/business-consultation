import { signIn } from "next-auth/react"

export default function SignIn() {
  return (
    <button
      type="button"
      onClick={() => signIn("google")}
      className="mt-3"
    >
      Sign in with Google
    </button>
  )
}
