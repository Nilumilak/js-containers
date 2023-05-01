import ErrorRepository from "../ErrorRepository";

test('Get Error', () => {
    const errors = new ErrorRepository();
    expect(errors.translate(1)).toBe('Error 1');
});

test('Get Unknown Error', () => {
    const errors = new ErrorRepository();
    expect(errors.translate(4)).toBe('Unknown Error');
});
