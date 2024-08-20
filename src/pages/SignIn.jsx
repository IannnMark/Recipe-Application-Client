export default function SignIn() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button>Sign in</button>
        <div className="flex gap-3 mt-5">
          <p>Dont have an account?</p>
          <span className="text-blue-600">Sign up</span>
        </div>
      </form>
    </div>
  );
}
