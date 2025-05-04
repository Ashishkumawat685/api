export const config = {
  runtime: "edge", // Bun-compatible (fast serverless)
};

let wishList = [
  { id: 1, name: "iPhone 15", price: 999 },
  { id: 2, name: "MacBook Pro", price: 1999 },
];

export default async function handler(req) {
  const { method } = req;
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (method === "GET") {
    return new Response(JSON.stringify(wishList), {
      headers: { "Content-Type": "application/json" },
    });
  }

  if (method === "POST") {
    const body = await req.json();
    const newItem = { id: Date.now(), ...body };
    wishList.push(newItem);
    return new Response(JSON.stringify(newItem), {
      headers: { "Content-Type": "application/json" },
    });
  }

  if (method === "PATCH") {
    const body = await req.json();
    const index = wishList.findIndex((item) => item.id == id);
    if (index === -1) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
      });
    }
    wishList[index] = { ...wishList[index], ...body };
    return new Response(JSON.stringify(wishList[index]), {
      headers: { "Content-Type": "application/json" },
    });
  }

  if (method === "DELETE") {
    wishList = wishList.filter((item) => item.id != id);
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Method Not Allowed", { status: 405 });
}
