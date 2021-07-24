const { test, expect, it} = require('@jest/globals');
const { describe } = require('yargs');
const { Intern }= require('../lib/Intern');

// import { Intern } from '../lib/Intern';



test('Intern', () => {
    const name = 'phil';
    const id = '20';
    const email = 'email@.com';
    const school = 'holt school';
    let testClass = new Intern(name, email, id, school);
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

    });

    describe('getRole()', () => {
        it('should return the given role as string', () => {
           const result = testClass.getRole();
           expect(result).toEqual('Intern')
        } )

    });

    describe('getSchool()', () => {
        it('should return the given school as string', () => {
           const result = testClass.getSchool();
           expect(result).toEqual(school)
        } )

    });

    
})