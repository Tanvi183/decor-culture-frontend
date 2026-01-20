export async function POST() {
  // Simple logout response - client handles cookie clearing
  return new Response(
    JSON.stringify({ message: 'Logged out successfully' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}