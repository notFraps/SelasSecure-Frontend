// app/api/submit/route.ts
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    return new Response(JSON.stringify({ ok: true, received: body }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "server error" }), {
      status: 500,
    });
  }
}
