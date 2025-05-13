function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isValid = username === "user" && password === "password";
      if (isValid) {
        resolve({ token: "12345", message: "Login successful!" });
      } else {
        reject({ error: "Invalid credentials", statusCode: 401 });
      }
    }, 1000);
  });
}
function fetchUserProfile(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "12345") {
        resolve({ name: "John Doe", email: "john@example.com" });
      } else {
        reject({ error: "Invalid token", statusCode: 403 });
      }
    }, 1000);
  });
}

(async () => {
  try {
    let res = await loginUser("user", "password");
    console.log(res.message);
    let profile = await fetchUserProfile(res.token);
    console.log(`Profile Name - ${profile.name}, Email - ${profile.email}`);
  } catch (error) {
    console.error(`Error: ${err?.error} (Status Code: ${err?.statusCode})`);
  }
})();

/**
1. GEC - Creation
Outer: null, this: window
LE:[Employee: fn ], tdz:[personalbar, Manager]

2. GEC - execution
Outer: null, this: window
LE: [{Employee:fn, Manager: fn, person: Object, manager: obj}]

3. FEC - creation new Manager
Outer: global, this: obj
LE: [{f:'Anna Smith', s:95000 f: 500, arguments: obj}]

4. FEC - execution
Outer: global, this: obj
LE: [{f:'Anna Smith', s:95000 f: 500, arguments: obj}]

5. FEC - creation super
outer: global, this: obj
LE: [{f:'Anna Smith', s:95000 f: 500, arguments: obj}]

6. FEC - execution super
outer: global, this: obj
LE: [{f:'Anna Smith', s:95000 f: 500, arguments: obj}]

7. FEC - creation toString
Outer: global, this: manager
LE: [{ arguments: obj}]

8. FEC - execution toString
Outer: global, this: manager
LE: [{ arguments: obj}]

*/
