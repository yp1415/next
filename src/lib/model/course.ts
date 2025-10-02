export async function getCourse() {
    try{
        const response = await fetch("http://127.0.0.1:8000/api/course/getall" , {
            method :"GET",
            credentials : "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                }
        });

        const data = await response.json()

        if (!response.ok) {
            return { success: false, errors: data.errors || [data.message] };
        }

    return { success: true, data };
    
    } catch (error: any) {
    return { success: false, errors: [error.message || "Unknown error"] };
}
}

export async function deleteCourse(id: number) {
  const response = await fetch(`http://127.0.0.1:8000/api/course/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Delete failed: ${response.status}`);
  }

  if (response.status !== 204) {
    return await response.json();
  }

  return null;
}

export async function addCourse(course: FormData)
{
  try {
    const res = await fetch("http://localhost:8000/api/course/create", {
      method: "POST",
      body: course,
    });

  if (!res.ok) {
    let details = "";
    try {
      const err = await res.json();
      details = JSON.stringify(err, null, 2);
    } catch {
      details = res.statusText;
    }
    throw new Error(`Failed to create course: ${details}`);
}

    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    throw err; // rethrow so components can handle it
  }
}