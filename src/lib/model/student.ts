import { time } from "console";

export async function getCourse(
    title : string,
    price : number,
    time : string,
    days : string,
    start_of_class : string,
    is_active : boolean,
    session_count : string,
    students_count : string,
    prerequisite : string
) {
    try{
        const response = await fetch("http://127.0.0.1:8000/api/getall-course" , {
            method :"GET",
            credentials : "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                },
            body: JSON.stringify({
                title,
                price,
                time,
                days,
                start_of_class,
                is_active,
                session_count,
                students_count,
                prerequisite
                }),
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