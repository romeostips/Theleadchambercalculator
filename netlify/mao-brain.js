export async function handler(event) {
  try {
    const body = JSON.parse(event.body);
    const arv = Number(body.arv);
    const repair = Number(body.repair);

    if (isNaN(arv) || isNaN(repair)) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid ARV or Repair value" })
      };
    }

    const mao = Math.round(arv * 0.7 - repair);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        arv: arv,
        repair_cost: repair,
        mao: mao
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: err.message })
    };
  }
}
