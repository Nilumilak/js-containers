export default class BaseCharacter {
    #typeList = [
        'Bowman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
    ];

    constructor(name, type, attack = 0, defence = 0) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;

        if (name.length < 2 || name.length > 10) {
            throw new Error('Name cannot be either less than 2 or bigger than 10');
        }

        if (!this.#typeList.includes(type)) {
            throw new Error('Wrong type');
        }
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error(`${this.type}, ${this.name} is dead`);
        }
        this.level += 1;
        this.health = 100;
        this.attack *= 1.2;
        this.defence *= 1.2;
    }

    damage(points) {
        if (this.health <= 0) {
            throw new Error(`${this.type}, ${this.name} is dead`);
        }
        this.health -= points * (1 - this.defence / 100);
    }
}
