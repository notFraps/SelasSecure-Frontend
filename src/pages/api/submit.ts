// // pages/api/submit.ts
// import type { NextApiRequest, NextApiResponse } from "next";
// import admin from "firebase-admin";

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
//       // private key needs newline characters
//       privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//     }),
//   });
// }

// const db = admin.firestore();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method !== "POST") return res.status(405).end();

//   const { fullName, email, phone, message, token } = req.body;

//   // Basic validation
//   if (!fullName || !email)
//     return res.status(400).json({ error: "Missing fields" });

//   // Optional: verify reCAPTCHA token or App Check token here

//   try {
//     const docRef = await db.collection("submissions").add({
//       fullName,
//       email,
//       phone: phone || null,
//       message: message || null,
//       source: "mortgage-referral-form",
//       createdAt: admin.firestore.FieldValue.serverTimestamp(),
//     });
//     return res.status(200).json({ id: docRef.id });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Server error" });
//   }
// }
