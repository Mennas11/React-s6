
function Login() {
  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="email" placeholder="Email" required />
        <br /><br />
        <input type="password" placeholder="Password" required />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
