import React from 'react'

const page = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-200">
            <div className="w-full max-w-sm p-8 rounded-lg shadow-md bg-green-200 mx-4 md:mx-0">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Enter your details</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Login
                    </button>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-gray-700">Don't have an account?</p>
                        <u>
                            <a href="/logincomponents/signup" className="text-sky-700 hover:text-sky-800 transition">
                                Create an account
                            </a>
                        </u>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default page
