const config = {
  username: {
    placeholder: "Username",
    rules: [{
      required: true,
      message: 'Please input your username!'
    }]
  },
  email: {
    type: "email",
    placeholder: "Email",
    rules: [{
      required: true,
      message: 'Please input your email!'
    }]
  },
  age: {
    placeholder: "Age",
    rules: [{
      required: true,
      message: 'Please input your age!'
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
