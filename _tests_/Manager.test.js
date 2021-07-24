const { test, expect, it} = require('@jest/globals');
const { describe } = require('yargs');
const {Manager} = require('../lib/Manager');


test('Manager', () => {
    const name = 'phil';
    const id = '20';
    const email = 'email@.com';
    const officeNumber = '124';
    const testClass = new Manager(name, id, email, officeNumber) ;
    describe('getName()', () => {
        it('should return the given name as string', () => {
           const result = testClass.getName();
           expect(result).toEqual(name)
        } )

    });

    describe('getEmail()', () => {
        it('should return the given email as string', () => {
           const result = testClass.getEmail();
           expect(result).toEqual(email)
        } )

    });

    describe('getId()', () => {
        it('should return the given id as string', () => {
           const result = testClass.getId();
           expect(result).toEqual(id)
        } )

    })

    describe('getRole()', () => {
        it('should return the given role as string', () => {
           const result = testClass.getId();
           expect(result).toEqual('Employee')
        } )

    });
    
})