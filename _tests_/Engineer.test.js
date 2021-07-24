const { test, expect, it} = require('@jest/globals');
const { describe } = require('yargs');
const { Engineer }= require('../lib/Engineer');

// import { Engineer } from '../lib/Engineer';



test('Engineer', () => {
    const name = 'phil';
    const id = '20';
    const email = 'email@.com';
    const gitHub = 'gitHub UserName';
    let testClass = new Engineer(name, email, id, gitHub);
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
           expect(result).toEqual('Engineer')
        } )

    });

    describe('getGithub()', () => {
        it('should return the given Github as string', () => {
           const result = testClass.getGithub();
           expect(result).toEqual(gitHub)
        } )

    });

    
})
