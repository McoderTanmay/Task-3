export const baseUrl = "https://602e7c2c4410730017c50b9d.mockapi.io/users";

export const getRequest = async (url) => {
  try {
    const response = await fetch(url);
    const data = response;
    return data;
  } catch (error) {
    console.log("!",error);
    return error;
  }
};

export const postRequest = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body:JSON.stringify(data),
  });
  if (!response.ok) {
    console.log("Error");
    return { error: true, message: "An error occoured ", response };
  }
  console.log(response);
  return response;
};
