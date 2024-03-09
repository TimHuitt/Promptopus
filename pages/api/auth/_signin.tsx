import { getProviders, signIn } from "next-auth/react";
import { BuiltInProviderType } from 'next-auth/providers';

type Provider = {
  id: string
  name: string
  type: BuiltInProviderType
  signinUrl: string
  callbackUrl: string
}

export default function SignIn({ providers }) {
  const providersList: Provider[] = Object.values(providers.map(provider => provider as Provider))
  return (
    <>
      <div>
        {/* Iterate over providers and create a sign-in button for each */}
        {providersList.map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
      <div>
        {/* Add your signup link below */}
        <a href="/path-to-your-signup">Sign up</a>
      </div>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do direct database queries.
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}