export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    //So, a server-side validation error occured.
    //Server side validation returns a string error message, so parse as text instad of JSON
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In real app, would likely acall[] an erro loggin service.
export function handleError(error) {
  //eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
