import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Eres el asistente virtual de "Salteñas Doña Rosa", un restaurante boliviano especializado en salteñas (empanadas bolivianas con un jigote jugoso).

Información del restaurante:
- Nombre: Salteñas Doña Rosa
- Especialidad: Salteñas artesanales bolivianas hechas a mano
- Menú: Salteña de Pollo (Bs. 8), Salteña de Carne (Bs. 8), Salteña Mixta (Bs. 9), Salteña de Charque (Bs. 10), Api con Pastel (Bs. 6), Jugo de Tumbo (Bs. 4)
- Horario: Lunes a Sábado, 7:00 AM - 12:00 PM
- Dirección: Calle Comercio #123, La Paz, Bolivia
- Teléfono: +591 7 123 4567
- Pedidos por WhatsApp

Reglas:
- Responde siempre en español, de forma cálida y amigable
- Sé breve y directo
- Si preguntan cómo hacer un pedido, indica que pueden usar el botón de WhatsApp en la página
- Si preguntan algo que no sabes, sugiere que contacten por WhatsApp
- Puedes recomendar salteñas según los gustos del cliente`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Demasiadas solicitudes, intenta en un momento." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Servicio temporalmente no disponible." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Error del servicio AI" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Error desconocido" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
