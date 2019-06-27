import $ from "jquery";

const helpers = {
  serializeFormJSON: function(arraySerialized) {
    let object = {};
    $.each(arraySerialized, function() {
      if (object[this.name]) {
        if (!object[this.name].push) {
          object[this.name] = [object[this.name]];
        }
        object[this.name].push(this.value || "");
      } else {
        object[this.name] = this.value || "";
      }
    });
    return JSON.stringify(object);
  }
};

export default helpers;
