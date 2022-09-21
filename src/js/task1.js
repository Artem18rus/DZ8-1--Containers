export class Character {
  type
};

export const member1 = new Character();
member1.type = "Zombie";
export const member2 = new Character();
member2.type = "Daemon";
export const member3 = new Character();
member3.type = "Magician";
export const member4 = new Character();
member4.type = "дровосек";

export class Team {
  constructor() {
    this.members = new Set();
  }
    add(name) {
      const arr = Array.from(this.members);
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] == name) {
          throw new Error('Ошибка! Такой персонаж уже в команде.');
        }
      }
      this.members.add(name);
    }
  
    addAll(...list) {
      list.forEach(item => this.members.add(item));
      return this.members;
    }

    toArray() {
      const arrTotal = Array.from(this.members);
      return arrTotal;
    }
}
export const eks1 = new Team();

//eks1.add(member1.type)
//eks1.add(member2.type)
//eks1.add(member3.type)
//eks1.add(member4.type)
//eks1.addAll(member1.type, member2.type, member2.type)
//eks1.toArray()
