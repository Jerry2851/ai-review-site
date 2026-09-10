export default async (req, context) => {
  const body = await req.json();
  const query = body.query || "No query provided";

  const response = await fetch("https://api.monkedev.com/fun/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: `Summarize product reviews for: ${query}. Keep it short and helpful.`
    })
  });

  const data = await response.json();

  return new Response(JSON.stringify({ result: data.response }), {
    headers: { "Content-Type": "application/json" }
  });
};
