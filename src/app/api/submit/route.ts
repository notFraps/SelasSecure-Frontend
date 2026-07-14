// app/api/submit/route.ts
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    console.log("API /api/submit called, body:", body);
    return new Response(JSON.stringify({ ok: true, received: body }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API /api/submit error:", err);
    return new Response(JSON.stringify({ error: "server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
