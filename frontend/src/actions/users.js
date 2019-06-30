import { setToken, setUserId } from "../auth";

export const login = function(result) {
  if (result.token != null) {
    setToken(result.token);
    setUserId(result.token, result.userId);
    window.location.reload();
  } else {
    alert(result.message);
  }
};
