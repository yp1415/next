import { time } from "console";

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

export async function deleteCourse(id : number){
    const response = await fetch(`http://127.0.0.1:8000/api/courses/${id}` , {
        method :"DELETE",
            credentials : "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
    })

    return await response.json();
}