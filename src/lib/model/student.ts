export async function getCourse() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/getall-course", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { success: false, errors: errorData.errors || [errorData.message || "Request failed"] };
    }

    return await response.json();
  } catch (err) {
    return { success: false, errors: [err.message] };
  }
}



