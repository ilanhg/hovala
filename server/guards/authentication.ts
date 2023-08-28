const jwt = require("jsonwebtoken");
                    

export const VALID_TOKENS: { [key: string]: string } = {};
export const REFRESH_TOKENS: { [key: string]: string } = {};

export function generateAccessToken(payload:any) {
  return jwt.sign(payload ,process.env.ACCESS_TOKEN_SECERT ,{expiresIn: "3h"}
  );
}

export function authenticatToken(req: any, res: any, next: any) {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];
  if (accessToken == null)
    return res.sendStatus(401).send("unauthorized for this action");
  jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECERT,(err: any, email: any) => {
      if (err) {
        return res.sendStatus(403);
      } else if (VALID_TOKENS[email] != accessToken) {
        return res.status(401).send("Unauthorized for action!");
      }
      req.email = email;
      next();
    }
  );
}

