import ErrorRepository from '../ErrorRepository';

describe('translate() method', () => {
    const errorRepository = new ErrorRepository();
    errorRepository.errors.set('001', 'Error1 text');
    
    test('should return error text', () => {
        expect(errorRepository.translate('001')).toBe('Error1 text');
    });

    test('should throw error', () => {
        expect(() => errorRepository.translate('002')).toThrow(Error('Unknown error'));
    });
});