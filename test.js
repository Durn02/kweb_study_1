var Person = function(name) {
    this.name = name;
}
  
Person.prototype.getName = function() {
    return this.name;
}
  
var hello = new Person('test');

module.exports = hello  // Person { name: 'test' }
// exports = hello // {}
// exports.hello = hello // { hello: Person { name: 'test' } }