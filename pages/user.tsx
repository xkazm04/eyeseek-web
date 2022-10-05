import { getSession, signOut } from 'next-auth/react';

// gets a prop from getServerSideProps
type UserProps= {
    user: string,
    context: any
}

function User({ user }: UserProps) {
    return (
        <div>
            <h4>User session:</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
              {/* @ts-ignore */}
            <button onClick={() => signOut({ redirect: '/' })}>Sign out</button>
        </div>
    );
}

export async function getServerSideProps({context}: UserProps) {
    const session = await getSession(context);
    
    // redirect if not authenticated
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: { user: session.user },
    };
}

export default User;