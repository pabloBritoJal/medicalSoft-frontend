export async function registerDoctor(
  name: string,
  email: string,
  token: string
) {
  const response = await fetch("http://localhost:3000/doctors/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Token de Firebase
    },
    body: JSON.stringify({ name, email }),
  });

  if (!response.ok) {
    throw new Error("Failed to register doctor");
  }

  return await response.json();
}
