"use client";

import { useState } from "react";
import { db } from "@/lib/firebaseClient";
import { addDoc, collection } from "firebase/firestore";

type Status = "idle" | "submitting" | "success" | "error";

export function useFirestoreSubmit<T extends Record<string, unknown>>(
  collectionName: string,
) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submit = async (data: T, extraFields?: Record<string, unknown>) => {
    setStatus("submitting");
    setErrorMessage(null);

    try {
      await addDoc(collection(db, collectionName), {
        ...data,
        ...extraFields,
        timestamp: new Date(),
      });
      setStatus("success");
      return true;
    } catch (err) {
      console.error(`${collectionName} submit error:`, err);
      setErrorMessage("Something went wrong. Please try again.");
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
