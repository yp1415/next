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