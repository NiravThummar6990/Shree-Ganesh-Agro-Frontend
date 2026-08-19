import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars"
import { LoginForm } from "@/components/login-form"

export default function Login() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1F13] bg-gradient-to-br from-[#0B1F13] via-[#132A1B] to-[#1F3D23] p-4 md:p-10">
      <div className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#D9A404] opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 z-0 h-96 w-96 rounded-full bg-[#B5651D] opacity-20 blur-[120px]" />

      <GravityStarsBackground className="absolute inset-0 z-[1]" />

      <div className="relative z-10 w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}
