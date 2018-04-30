var Document     = require('camo').Document;

class Task extends Document {
  constructor() {
    super();
    this.schema({
        description: String
    });
  }
}
