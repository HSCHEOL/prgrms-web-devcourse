import User from "../../model/userModel";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "already exists." });
    }
    const saveUser = await userData.save();
    res.status(200).json(saveUser);
  } catch (errer) {
    res.status(500).json({ error: "연결 실패" });
  }
};
