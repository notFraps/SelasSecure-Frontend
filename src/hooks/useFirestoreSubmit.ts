"use client";

import { useState } from "react";
import { db } from "@/lib/firebaseClient";
import { addDoc, collection } from "firebase/firestore";

type Status = "idle" | "submitting" | "success" | "error";

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("TIMEOUT")), ms),
    ),
  ]);
}

export function useFirestoreSubmit<T extends Record<string, unknown>>(
  collectionName: string,
) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submit = async (data: T, extraFields?: Record<string, unknown>) => {
    setStatus("submitting");
    setErrorMessage(null);
    console.log(`[${collectionName}] submit starting`, { data, extraFields });

    try {
      const docRef = await withTimeout(
        addDoc(collection(db, collectionName), {
          ...data,
          ...extraFields,
          timestamp: new Date(),
        }),
        15000,
      );
      console.log(`[${collectionName}] submit succeeded`, docRef.id);
      setStatus("success");
      return true;
    } catch (err) {
      console.error(`[${collectionName}] submit error:`, err);
      if (err instanceof Error && err.message === "TIMEOUT") {
        setErrorMessage(
          "This is taking longer than expected. Please check your connection and try again.",
        );
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
      setStatus("error");
      return false;
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorMessage(null);
  };

  return { status, errorMessage, submit, reset };
}
