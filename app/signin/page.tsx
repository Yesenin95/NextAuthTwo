import { GithubButton } from "@/components/GitubButton";
import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

export default async function Signin() {
   return (
      <div className="stack">
         <h1>SignIn</h1>
         <GoogleButton />
         <GithubButton />
         <div>or</div>
         <SignInForm />
      </div>
   );
}
