import Team from "../Team.js";
import Bowman from "../Characters/Bowman.js";

test('Team add character', () => {
    const team = new Team();
    const character = new Bowman('name1');
    team.add(character);
    expect(team.members.size).toBe(1);
});

test('Character already exists', () => {
    const team = new Team();
    const character = new Bowman('name1');
    team.add(character);
    expect(() => team.add(character)).toThrow(`Character ${character.name} is already in the team`);
});

test('Add all characters', () => {
    const team = new Team();
    const character1 = new Bowman('name1');
    const character2 = new Bowman('name2');
    const character3 = new Bowman('name3');
    team.addAll(character1, character2, character3);
    team.addAll(character1, character2, character3);
    expect(team.members.size).toBe(3);
});

test('Team to Array', () => {
    const team = new Team();
    const character1 = new Bowman('name1');
    const character2 = new Bowman('name2');
    const character3 = new Bowman('name3');
    team.addAll(character1, character2, character3);
    expect(team.toArray()).toEqual([character1, character2, character3]);
});
