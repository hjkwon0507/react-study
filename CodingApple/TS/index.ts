// index.ts
class User {
  name :string;
  private familyName :string = 'kim';
  constructor(a){
    this.name = a + this.familyName // 민수kim
  }

  이름변경함수(){
    this.familyName = 'park'
  }
}
let 유저1 = new User('민수');
유저1.이름변경함수();
console.log(유저1)
