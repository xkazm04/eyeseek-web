import { getSession, signOut } from 'next-auth/react';


type UserProps= {
    user: string,
}

function UserProfile({ user }: UserProps) {
    return (
        <div>
            <h4>User session:</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
              {/* @ts-ignore */}
            <button onClick={() => signOut({ redirect: '/' })}>Sign out</button>
        </div>
    );
}
       {/* @ts-ignore */}
export async function getServerSideProps(context) {
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

export default UserProfile;