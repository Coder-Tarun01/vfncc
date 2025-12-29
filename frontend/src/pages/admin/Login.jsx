import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../../utils/api';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.login(formData);
      
      if (response.error) {
        setError(response.error);
      } else {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        navigate('/admin/dashboard');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#f9f7f5' }}>
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-[#f4b400] bg-white shadow-xl p-8 space-y-6">
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold" style={{ color: '#720000' }}>Admin Login</h1>
            <p className="text-gray-600">Sign in to access the admin panel</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
                placeholder="admin@example.com"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '👁️‍🗨️' : '👁️'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold text-white transition disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#720000' }}
            >
              {loading ? 'Logging in...' : 'Sign In'}
            </button>
          </form>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/admin/register" className="font-semibold" style={{ color: '#720000' }}>
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

