export async function getStudents() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/user/getall", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, errors: data.errors || [data.message] };
    }

    return { success: true, data };
  } catch (error: any) {
    return { success: false, errors: [error.message || "Unknown error"] };
  }
}




export async function addStudent(student: any) {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/user/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(student),
    });

    const data = await response.json();
    console.log("Data: ", data);
    
    if (!response.ok) {
      let errors: string[] = [];

      if (Array.isArray(data.errors)) {
        errors = data.errors.flat();
      } else if (data.errors && typeof data.errors === "object") {
        errors = Object.values(data.errors).flatMap((val: any) =>
          Array.isArray(val) ? val : [val]
        );
      } else {
            console.error("Network or other error:", errors);
      }

      return { success: false, errors };
    }

    // موفقیت → دیتا رو برمی‌گردونیم
    return { success: true, data };
  } catch (error: any) {
    return { success: false, errors: [error.message || "خطای ناشناخته"] };
  }
}