describe("Salary Tests", ()=> {
  it("should verify susan's salary was increased", ()=> {
    susan = {
        salary : 50000,
        taxWithheld: 10000
    }

    giveRaise(susan, 2000);

    expect(susan.salary).toEqual(52000)
  })
})