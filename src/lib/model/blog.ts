export async function getBlogs() {
    try{
        const response = await fetch("http://127.0.0.1:8000/api/blog/getall" , {
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

export async function addBlog(blog: FormData) {
    try {
    const res = await fetch("http://localhost:8000/api/blog/create", {
      method: "POST",
      body: blog,
    });

  if (!res.ok) {
    let details = "";
    try {
      const err = await res.json();
      details = JSON.stringify(err, null, 2);
    } catch {
      details = res.statusText;
    }
    throw new Error(`Failed to create blog: ${details}`);
}

    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    throw err; // rethrow so components can handle it
  }
}