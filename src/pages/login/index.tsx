import React, {Fragment, useState} from 'react';
// Fragment là 1 thẻ rỗng

type LoginProps = {
    viewName?: string,
    username: string,
    password: string
};

function Login (props :LoginProps) {
    const {
        viewName = 'Login',
        username,
        password
    } = props;
    console.log('Login view render');
    const [usernameValue, setUsernameValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    // ~ const viewName = props.viewName || 'Login';

    // Tat cac cac the trong return phai dong goi trong 1 the cha
    // the cha la the bat ky hoac Fragment
    console.log(usernameValue, passwordValue);

    const onSubmit = () :any => {
        const data = {
            username: usernameValue,
            password: passwordValue
        };

        console.log(data);
    }
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder='username'
                    onChange={(event) => setUsernameValue(event.target.value)}
                    />
                <input
                    type="password"
                    placeholder='password'
                    onChange={(event) => setPasswordValue(event.target.value)}
                />
                <button type='button' onClick={() => onSubmit()}>Submit</button>
            </form>
        </>
        // <Fragment>
        //     <p>{viewName}</p>
        //     <p>Username: {username}</p>
        // </Fragment>
    );
}

// Export
export const USER_LOGIN = 'tuannda3';
export const USER_REGISTER = 'abcde';
// {USER_LOGIN, USER_REGISTER}
// Import {USER_LOGIN} from './pages/login'

// Default: 1 file chi duoc default 1 thang
// Khi import se khong can dung ngoac
export default Login;
