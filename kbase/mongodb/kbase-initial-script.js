db = db.getSiblingDB('admin');
db.createUser({
  user: "admin",
  pwd: "kbase",
  roles: [{
    role: "root",
    db: "admin"
  }]
});
db.auth("admin", "kbase");

db = db.getSiblingDB('kbase');
db.createUser({
  user: "kbase",
  pwd: "kbase",
  roles: [{
    role: "dbOwner",
    db: "kbase"
  }]
});
