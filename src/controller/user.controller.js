import { UserService } from "../services/services.js";

class UserController {
  static UCDetails = async (req, res) => {
    let data = await UserService.USDetails();
    res.status(data.status).json(data.body);
  };
}

export default UserController;
