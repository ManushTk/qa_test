import { connectToDatabase } from '../../../lib/mongodb';

// Named export for POST method
export async function POST(req) {
    const { name, email, password, role } = req.body;
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(role)

    if (!name || !email || !password || !role) {
        return new Response(
            JSON.stringify({ message: 'All fields are required' }),
            { status: 400 }
        );
    }

    try {
        const db = await connectToDatabase();
        const usersCollection = db.collection('userinfo'); // Replace 'users' with your desired collection name

        // Insert new user data
        const result = await usersCollection.insertOne({
            name,
            email,
            password, // In production, make sure to hash the password
            role,
            createdAt: new Date(),
        });

        return new Response(
            JSON.stringify({ message: 'User created successfully', user: result.ops[0] }),
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ message: 'An error occurred. Please try again.' }),
            { status: 500 }
        );
    }
}
