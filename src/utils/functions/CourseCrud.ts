
type Items = {
    _id: string;
    title: string;
    description: string;
    duration: string;
    instructor: string;
  };
  
  // Helper function for API requests
  const apiRequest = async (url: string, method: string, body?: any) => {
    
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
      });
  
      const data = await response.json();
        return data;
          
    } catch (error:any) {
      console.log("API Error:", error);
      return error ;
    }
  };
  
  // CRUD Functions
  export const UpdateCourse = (data: Items) =>

    apiRequest(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/courses/${data._id}`,
      "PUT",
      data
    );
  
  export const DeleteCourse = (Id: string) =>
     apiRequest(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/courses/${Id}`,
      "DELETE"
    );
  
  export const AddCourse = (data: { title: string; description: string; duration: string; instructor: string; }) =>    
    apiRequest(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/addcourse`,
      "POST",
      data
    );
  
    export const GetAllCourses = async () => {
      console.log(process.env.NEXT_PUBLIC_SERVER_URL); // Debug check
      return apiRequest(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/courses`,
        "GET"
      );
    };
    
  
  export const GetSingleCourse = (Id: string) =>
    apiRequest(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/single/${Id}`,
      "GET"
    );
  
  export const enrollInCourse = (ownerId:string, Id: string) =>  
    apiRequest(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${ownerId}/enroll/${Id}`,
      "POST"
    );