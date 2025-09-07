export async function register(
  name: string, 
  email: string, 
  password: string, 
  password_confirmation: string) 
  {

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation,
        }),
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

export async function login(
  email: string,
  password: string,
) {
  try{
    const response = await fetch("http://127.0.0.1:8000/api/login",{
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      })
  })
  
      const data = await response.json();

  if (!response.ok) {
    return { success: false, errors: data.errors || [data.message] };
  }

  return { success: true, data };
      
  } catch (error: any) {
    return { success: false, errors: [error.message || "Unknown error"] };
  }
}