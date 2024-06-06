class Example {
	static staticVariable = 'GeeksforGeeks';
	//static variable defined
	static staticMethod() {
		return 'staticVariable : ' + this.staticVariable;
	}
}
// static method called
console.log(Example.staticMethod());
