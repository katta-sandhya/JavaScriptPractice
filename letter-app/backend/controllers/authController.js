import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { token } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ user: decoded });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export const logout = (req, res) => {
  res.status(200).json({ message: "User logged out" });
};
