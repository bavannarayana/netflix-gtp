export const validate = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
      password
    );

  if (!isEmailValid) return "Invalid Email address";
  if (!isPasswordValid) return "Invalid password";

  return null;
};
