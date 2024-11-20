'use client';

import { useState } from 'react';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');

    const handleSubmit = async (e) => {

        // console.log(name,email,password)

        e.preventDefault();

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, role }),
            });
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 to-blue-300">
            <div className="w-full max-w-md p-8 rounded-xl shadow-xl bg-white/90 backdrop-blur-sm mx-4 md:mx-0 transform transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Create Account</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Role</label>
                        <select 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white"
                        >
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="mentor">Mentor</option>
                            <option value="eduvocate-sub-admin">Eduvocate sub admin</option>
                            <option value="eduvocate-super-admin">Eduvocate super admin</option>
                            <option value="company-representative">Company representative</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" 
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                            placeholder="Create a password"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02]"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;