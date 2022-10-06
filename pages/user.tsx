import { getSession, signOut } from 'next-auth/react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10%;
`

const ProfileBox = styled.div`
    padding: 5%;
    display: flex;
    flex-direction: column;
    max-width: 20%;
    word-wrap: break-word;
    border: 1px solid white;
`

const Balance = styled.div`
    display: flex;
`

const EmulatorBox = styled.div`
    padding: 5%;
    width: 380px;
    height: 453px;
    border: 1px solid white;
`


   {/* @ts-ignore */}
function User(user) {
    return ( 
    <Container>
        <ProfileBox>
            <h4>User profile:</h4>
            <Balance>Balance</Balance>
            {user && <>{user.address}</>}
            <pre>{JSON.stringify(user, null, 2)}</pre>
              {/* @ts-ignore */}
            <button onClick={() => signOut({ redirect: '/' })}>Sign out</button>
        </ProfileBox>
        <EmulatorBox>
            Emulator

        </EmulatorBox>
    </Container>
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

export default User;