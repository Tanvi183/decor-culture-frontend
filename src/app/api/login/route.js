export async function POST(req) {
  const { email, password } = await req.json();

  // Mock user
  const mockUser = {
    email: 'user@gmail.com',
    password: '123456',
    name: 'sana ullah',
  };

  if (email === mockUser.email && password === mockUser.password) {
    // Just return the data, let client-side handle cookie setting
    return new Response(
      JSON.stringify({
        token: 'mock-jwt-token-123456',
        user: { name: mockUser.name, email: mockUser.email },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ message: 'Invalid credentials' }),
    { status: 401, headers: { 'Content-Type': 'application/json' } }
  );
}