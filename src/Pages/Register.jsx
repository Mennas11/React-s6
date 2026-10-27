
function Register() {
  return (
    <section>
      <h2>Register</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="text" placeholder="Name" required />
        <br /><br />
        <input type="email" placeholder="Email" required />
        <br /><br />
        <input type="password" placeholder="Password" required />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Register;
