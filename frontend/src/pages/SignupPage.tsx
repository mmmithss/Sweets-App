import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const SignupPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const { signUpMutation, isPending, error } = useSignup();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);
    signUpMutation(user);
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
          {/* Name */}
          <div className="form-control">
            <div className="flex flex-col gap-2 ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={user.name}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, name: e.target.value }))
                }
                className="input input-bordered input-secondary w-full"
                required
              />
            </div>
          </div>

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

          {/* Admin Toggle */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Admin Access</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={user.isAdmin}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, isAdmin: e.target.checked }))
                }
              />
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary mt-2">
            {isPending ? (
              <>
                <span className="loading loading-spinner"></span>
                <span>Loading...</span>
              </>
            ) : (
              <>Sign Up</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
