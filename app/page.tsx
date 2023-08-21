import Link from 'next/link';
import Logo from '@/components/logo';
import TextField from '@/components/ui/text-field';

export default function Home() {
  return (
    <div className="flex relative min-h-screen bg-[#1D2735] flex-col items-center justify-center p-24">
      <div className="top-8 left-10 absolute">
        <Logo />
      </div>

      <div className="bg-white p-8  w-1/3 rounded-2xl shadow-[0px_34px_114px_0px_rgba(0,0,0,0.08)]">
        <h1 className="text-3xl font-bold text-black text-center pb-8">
          Connectez-vous a votre espace
        </h1>

        <form className="flex flex-col space-y-8">
          <TextField
            label="Email"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
          />

          <TextField
            label="Mot de passe"
            id="password"
            name="password"
            placeholder="Mot de passe"
            type="password"
          />

          <Link
            href="/dashboard"
            className="bg-primary text-center hover:bg-[#349684] text-white rounded-lg py-3 px-5"
          >
            Se connecter
          </Link>
        </form>
      </div>
    </div>
  );
}
