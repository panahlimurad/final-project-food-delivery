// GET TOKEN FOR POST
// const userJSONData = localStorage.getItem("userData")
// const userData = JSON.parse(userJSONData)
// const token = userData?.user?.access_token

// POST FOR USER
export async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
// GET FOR RESTAURANT
export async function getRestaurant(restaurantName) {
  try {
    const apiUrl = `https://foody-api.vercel.app/api/restuarants?search=${restaurantName}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Error:" + response.status);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
// GET FOR PRODUCT
export async function getProducts(restaurantId) {
    try {
      const apiUrl = `https://foody-api.vercel.app/api/restuarants/${restaurantId}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Error:" + response.status);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
}
// POST FOR PRODUCTS dont work yet
export async function postProducts(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer +${token}`
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error: " + response.status);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }


export async function postCategory(url, data){
    try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer +${token}`
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error("Error: " + response.status);
        }
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
}
// POST FOR RESTAURANT dont work yet
export async function postRestaurant(url, data){
    try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer +${token}`
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error("Error: " + response.status);
        }
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
}