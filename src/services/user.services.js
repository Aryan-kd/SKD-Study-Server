import models from "../models/models.js";

class UserService {
  static USDetails = async () => {
    const data = {
      status: 200,
      body: models.user,
    };

    return data;
  };
}

export default UserService;
