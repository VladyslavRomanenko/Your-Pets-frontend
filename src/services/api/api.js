import axios from "axios";

const connectionsApi = axios.create({
  baseURL: "https://petgrammers-backend.onrender.com/api",
});

/**
  |============================
  | Set token
  |============================
*/
export const setToken = (token) => {
  connectionsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  connectionsApi.defaults.headers.common.Authorization = ``;
};

/**
  |============================
  | Auth and User Controllers
  |============================
*/
// Registration new user
export const register = async (user) => {
  const { data } = await connectionsApi.post("/auth/register", user);
  return data;
};

// Login user
export const login = async (user) => {
  const { data } = await connectionsApi.post("/auth/login", user);
  setToken(data.token);
  return data;
};

// Logout user
export const logout = async () => {
  await connectionsApi.post("/auth/logout");
  clearToken();
};

//Current
export const getCurrentUser = () => {
  const data = connectionsApi.get("/auth/current");
  return data;
};

export const updateUserData = async (user) => {
  const data = await connectionsApi.patch("/auth/user", user);
  return data;
};

export const updateAvatar = async (avatar) => {
  const data = await connectionsApi.patch("/auth/user/avatar", avatar);
  return data;
};

export const fetchUserData = async () => {
  const data = connectionsApi.get("/user-info");
  return data;
};

export const updateToken = async (refreshToken) => {
  const { data } = await connectionsApi.post("/auth/refresh-token", {
    refreshToken,
  });
  setToken(data.token);
  return data;
};

/**
  |============================
  | News and Friends Controllers
  |============================
*/

export const fetchNews = ({ page = 1, limit = 6 }) => {
  const data = connectionsApi.get("/news", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const fetchNewsBySearch = async ({
  page = 1,
  limit = 6,
  searchQuery,
}) => {
  const data = connectionsApi.get(`/news/${searchQuery}`, {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const fetchFriends = ({ page = 1, limit = 6 }) => {
  const data = connectionsApi.get("/friends", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

/**
  |============================
  | Notices and Pets Controllers
  |============================
*/

export const addNewPet = (pet) => {
  const data = connectionsApi.post("/pets", pet);
  return data;
};

export const deletePet = (petId) => {
  const data = connectionsApi.delete(`/pets/${petId}`);
  return data;
};

// ------- PUBLIC ------- //

export const fetchNoticesBySearch = async ({
  page = 1,
  limit = 12,
  searchQuery,
}) => {
  const data = connectionsApi.get(`/notices/query/${searchQuery}`, {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const fetchNoticesByCategory = async ({ page, limit, category }) => {
  const data = connectionsApi.get(`/notices/search/${category}`, {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const fetchNoticesByCategoryAndSearch = async ({
  page,
  limit,
  category,
  searchQuery,
}) => {
  const data = connectionsApi.get(
    `/notices/search/${category}/${searchQuery}`,
    {
      params: {
        page,
        limit,
      },
    }
  );
  return data;
};

export const fetchNoticeById = async (noticeId) => {
  const data = connectionsApi.get(`/notices/${noticeId}`);
  return data;
};

export const fetchFilteredNotices = async ({
  age,
  sex,
  category = "sell",
  page = 1,
  limit = 12,
  searchQuery,
}) => {
  const data = connectionsApi.get("/notices/filter/by", {
    params: {
      age,
      sex,
      category,
      page,
      limit,
      title: searchQuery,
    },
  });
  return data;
};

// ------- PRIVATE ------- //

export const fetchAllNotices = async () => {
  const data = connectionsApi.get("/notices/get/all");

  return data;
};

export const fetchOwnNotices = async ({
  age,
  sex,
  page = 1,
  limit = 12,
  searchQuery,
}) => {
  const data = connectionsApi.get("/notices", {
    params: {
      age,
      sex,
      page,
      limit,
      title: searchQuery,
    },
  });
  return data;
};

export const fetchFavoriteNotices = async ({
  age,
  sex,
  page = 1,
  limit = 12,
  searchQuery,
}) => {
  const data = connectionsApi.get("/notices/get/favorites", {
    params: {
      age,
      sex,
      page,
      limit,
      title: searchQuery,
    },
  });
  return data;
};

export const addNewNotice = (notice) => {
  const data = connectionsApi.post("/notices", notice);
  return data;
};

export const addOrDeleteFavoriteNotice = (noticeId) => {
  const data = connectionsApi.patch(`/notices/${noticeId}/favorite`);
  return data;
};

export const deleteOwnNotice = (noticeId) => {
  const data = connectionsApi.delete(`/notices/${noticeId}`);
  return data;
};
