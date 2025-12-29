import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api';

const Dashboard = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    // Check if user is authenticated
    if (!localStorage.getItem('token')) {
      navigate('/admin/login');
      return;
    }
    fetchMedia();
  }, [navigate]);

  const fetchMedia = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await api.getAllMedia();
      if (data.error) {
        setError(data.error);
      } else {
        setMedia(data);
      }
    } catch (err) {
      setError('Failed to load media');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const response = await api.uploadMedia(file);
      if (response.error) {
        setError(response.error);
      } else {
        await fetchMedia(); // Refresh media list
        e.target.value = ''; // Reset input
      }
    } catch (err) {
      setError('Failed to upload file');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this media?')) return;

    try {
      const response = await api.deleteMedia(id);
      if (response.error) {
        setError(response.error);
      } else {
        await fetchMedia(); // Refresh media list
      }
    } catch (err) {
      setError('Failed to delete media');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/admin/login');
  };

  // Use the URL from API response instead of hardcoded URL
  const getMediaUrl = (item) => {
    // Use the URL from API response if available
    if (item.url) {
      return item.url;
    }
    // Fallback: construct URL from filename (shouldn't happen if API is correct)
    const baseUrl = import.meta.env.BASE_URL || '/vfncc/';
    return `${baseUrl}uploads/${item.filename}`;
  };

  return (
    <div className="min-h-screen" style={{ background: '#f9f7f5' }}>
      <div className="container section-padding space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-display" style={{ color: '#720000' }}>
              Admin Dashboard
            </h1>
            <p className="text-gray-700">Welcome back, {user.username}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg text-white font-semibold transition"
            style={{ backgroundColor: '#720000' }}
          >
            Logout
          </button>
        </div>

        {/* Upload Section */}
        <div className="rounded-2xl border border-[#f4b400] bg-white shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Upload Media</h2>
          <div className="flex items-center gap-4">
            <label className="flex-1 cursor-pointer">
              <input
                type="file"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
                accept="image/*,video/*,.pdf"
              />
              <div className="border-2 border-dashed rounded-lg p-6 text-center transition"
                   style={{ borderColor: '#720000' }}>
                {uploading ? (
                  <p style={{ color: '#720000' }}>Uploading...</p>
                ) : (
                  <div className="space-y-1">
                    <p className="text-gray-900 font-semibold">Click to select file</p>
                    <p className="text-gray-600 text-sm">Images, Videos, or PDFs (Max 10MB)</p>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Media Gallery */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Uploaded Media</h2>
          
          {loading ? (
            <p className="text-gray-600 text-center py-8">Loading media...</p>
          ) : media.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No media uploaded yet</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {media.map((item) => (
                <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  {item.file_type === 'image' && (
                    <img
                      src={getMediaUrl(item)}
                      alt={item.original_filename}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  {item.file_type === 'video' && (
                    <video
                      src={getMediaUrl(item)}
                      className="w-full h-48 object-cover"
                      controls
                    />
                  )}
                  {item.file_type === 'pdf' && (
                    <div className="w-full h-48 bg-[#f4b400]/20 flex items-center justify-center text-3xl text-gray-700">
                      📄
                    </div>
                  )}
                  
                  <div className="p-4 space-y-2">
                    <p className="text-gray-900 font-semibold truncate">{item.original_filename}</p>
                    <p className="text-gray-600 text-xs">
                      {(item.file_size / 1024 / 1024).toFixed(2)} MB • {item.file_type}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-gray-500 text-xs">
                        {new Date(item.uploaded_at).toLocaleDateString()}
                      </span>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1 text-sm rounded text-white transition"
                        style={{ backgroundColor: '#720000' }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

