import { NextResponse } from "next/server"; // Must for next.js
import Mailjet from "node-mailjet";

export async function POST(req) {
  // Must be POST for post and GET for get...
  const { name, email, phone, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const mailjet = Mailjet.apiConnect(
    // Mailjet API call
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY,
  );

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL,
            Name: "Cliente de Blancodent.com",
          },
          To: [
            {
              Email: process.env.MAILJET_TO_EMAIL,
              Name: "Gestión Clínica Blancodent",
            },
          ],
          Subject:
            "Nuevo mensaje desde el formulario de contacto en Blancodent.com",
          TextPart: `Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone}\nMensaje: ${message}`,
        },
      ],
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
