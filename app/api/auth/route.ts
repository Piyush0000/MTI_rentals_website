import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Mock authentication logic
  if (body.email && body.password) {
    // In a real application, you would verify credentials against a database
    return NextResponse.json({ 
      message: 'Authentication successful', 
      token: 'mock-jwt-token-' + Math.random().toString(36).substring(7),
      user: {
        id: 1,
        name: 'John Doe',
        email: body.email
      }
    });
  } else {
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );
  }
}

export async function GET() {
  // Mock user validation
  return NextResponse.json({ 
    message: 'User is authenticated',
    user: {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    }
  });
}