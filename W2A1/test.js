mocha.setup("bdd");
let assert = chai.assert;

describe("sum",function(){
    let test1=[1,2,3,4,5];
    it(`summation of ${test1} is 15`,function(){
        assert.equal(sum(test1),15);
    });
    let test2=[4,-8,1,0,-5];
    it(`summation of ${test2} is 0`,function(){
        assert.equal(sum(test2),-8);
    });

});
describe("multiply",function(){
    let test1=[1,2,3,4,5];
    it(`multiplication of ${test1} is 120`,function(){
        assert.equal(multiply(test1),120);
    });
    let test2=[-6,4,1,0,-5];
    it(`multiplication of ${test2} is 0`,function(){
        assert.equal(multiply(test2),0);
    });
    let test3=[-2,-2,-3,-4,-5];
    it(`multiplication of ${test3} is -240`,function(){
        assert.equal(multiply(test3),-240);
    });
   
});
describe("reverse",function(){
    it("reverse of Henock is kconeH",function(){
        assert.equal(reverse("Henock"),"kconeH");
    });
    it("reverse of java is avaj",function(){
        assert.equal(reverse("java"),"avaj");
    });
    it("reverse of link is kinl",function(){
        assert.equal(reverse("link"),"knil"); 
    });
});
describe("filterLongWords",function(){
    let testData=["a","le","God","love","beloved"];
    it(`filter ${testData} with 4 is ["beloved"]`,function(){
        assert.deepEqual(filterLongWords(testData,4),["beloved"]);
    })
    it(`filter ${testData} with 3 is ["love","beloved"]`,function(){
        assert.deepEqual(filterLongWords(testData,3),["love","beloved"]);
    })
    it(`filter ${testData} with 1 is ["le","God","love","beloved"]`,function(){
        assert.deepEqual(filterLongWords(testData,1),["le","God","love","beloved"]);
    });
});