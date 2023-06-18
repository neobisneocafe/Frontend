import { MultiStep } from "@/features/auth/login";
import './Page.scss'


export function LoginPage() {
  return (
    <div className="loginPage">
        <h1>Login page</h1> 
        <MultiStep/>
    </div>
  )
}