const expect = require('chai').expect;

const fizzbuzzer = require('../fizzBuzzer');

describe("fizzBuzzer", function() {
	it("should return fizz-buzz if number divisble by 15", function(){
			const normalCases = [
				{num:15, expected:"fizz-buzz"},
				{num:30,expected:"fizz-buzz"},
				{num:135,expected:"fizz-buzz"}
			];
			normalCases.forEach(function(input){
				const answer = fizzbuzzer(input.num);
				expect(answer).to.equal(input.expected);
			});
	});
	it("should return buzz if number divisble by 5 and not divisble by 15", function(){
			const normalCases = [
				{num:5, expected:"buzz"},
				{num:30,expected:"fizz-buzz"},
				{num:150,expected:"fizz-buzz"}
			];
			normalCases.forEach(function(input){
				const answer = fizzbuzzer(input.num);
				expect(answer).to.equal(input.expected);
			});
	});
	it("should return fizz if number divisble by 3 and not divisble by 15", function(){
			const normalCases = [
				{num:3, expected:"fizz"},
				{num:30,expected:"fizz-buzz"},
				{num:21,expected:"fizz"}
			];
			normalCases.forEach(function(input){
				const answer = fizzbuzzer(input.num);
				expect(answer).to.equal(input.expected);
			});
	});
  it('should raise error if num is not of type number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      'a',
      '1',
      false
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzbuzzer(input);
      }).to.throw(Error);
    });
  });	
});