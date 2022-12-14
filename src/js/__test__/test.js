/* eslint-disable no-unused-vars */
import {
  Character,
  member1,
  member2,
  member3,
  member4,
  Team,
  eks1,
} from '../task1';

test('TEST-OK1', () => {
  const f = () => {
    eks1.add(member1.type);
    const obj = Object.fromEntries(eks1.members.entries());
    return obj;
  };
  expect(f()).toEqual({ Zombie: 'Zombie' });
});

test('TEST-OK2', () => {
  const f = () => {
    eks1.add(member3.type);
    eks1.add(member4.type);
    const obj = Object.fromEntries(eks1.members.entries());
    return obj;
  };
  expect(f()).toEqual({ Magician: 'Magician', Zombie: 'Zombie', дровосек: 'дровосек' });
});

test('TEST-ERR1', () => {
  const f = () => {
    eks1.add(member1.type);
    eks1.add(member1.type);
    return this.members;
  };
  expect(f).toThrow('Ошибка! Такой персонаж уже в команде.');
});

test('TEST-OK3', () => {
  const f = () => {
    eks1.addAll(member1.type, member2.type, member2.type);
    const obj = Object.fromEntries(eks1.members.entries());
    return obj;
  };
  expect(f()).toEqual({
    Daemon: 'Daemon',
    Magician: 'Magician',
    Zombie: 'Zombie',
    дровосек: 'дровосек',
  });
});

test('TEST-OK4', () => {
  const f = () => {
    const member5 = new Character();
    member5.type = 'Men';
    const member6 = new Character();
    member6.type = 'Woman';
    eks1.add(member5.type);
    eks1.add(member6.type);
    eks1.toArray();
    const obj = Object.fromEntries(eks1.members.entries());
    return obj;
  };
  expect(f()).toEqual({
    Daemon: 'Daemon',
    Magician: 'Magician',
    Men: 'Men',
    Woman: 'Woman',
    Zombie: 'Zombie',
    дровосек: 'дровосек',
  });
});
