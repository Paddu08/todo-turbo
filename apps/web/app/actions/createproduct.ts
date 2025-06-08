"use server";

import { revalidateTag } from "next/cache";

export default async function createTodo(formData: FormData) {
  const name = formData.get("name") as string;
  const task = formData.get("task") as string;
  const completed = formData.get("completed") === "on";

  const payload = { name, task, completed };




  try {
    const response = await fetch(`${process.env.API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log("✅ Product created:", result);
    revalidateTag("todos")
  } catch (error) {
    console.error("❌ Error creating product:", error);
  }
}
