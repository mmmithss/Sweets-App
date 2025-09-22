import { useState } from "react";
import { useLogin } from "../hooks/useLofin";

const SignupPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { loginMutation, isPending, error } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);
    loginMutation(user);
    console.log(error);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        {/* error message when occured */}
        {error && (
          <div className="alert alert-error">
            <span>{error.message}</span>
          </div>
        )}
        {/* form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="form-control ">
            <div className="flex flex-col gap-2 ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={user.email}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, email: e.target.value }))
                }
                className="input input-bordered input-secondary w-full"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-control">
            <div className="flex flex-col gap-2 ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="********"
                value={user.password}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
                className="input input-bordered input-secondary w-full"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary mt-2">
            {isPending ? (
              <>
                <span className="loading loading-spinner"></span>
                <span>Loading...</span>
              </>
            ) : (
              <>Login</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
