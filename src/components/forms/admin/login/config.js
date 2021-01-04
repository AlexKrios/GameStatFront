const config = {
    username: {
        placeholder: "Username",
        rules: [{
            required: true,
            message: 'Please input your username!'
        }]
    },
    password: {
        type: "password",
        placeholder: "Password",
        rules: [{
            required: true,
            message: 'Please input your password!'
        }]
    }
}

export default config;
