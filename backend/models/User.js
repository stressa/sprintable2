var Document     = require('camo').Document;

class User extends Document {
  constructor() {
    super();
    this.schema({
        email: String,
        password: String,
        token: String
    });
  }
}
