const { test, expect, it} = require('@jest/globals');
const { describe } = require('yargs');
const { Employee }= require('../lib/Employee');

// import { Employee } from '../lib/Employee';



test('Employee', () => {
    const name = 'phil';
    const id = '20';
    const email = 'email@.com';
    let testClass = new Employee(name, email, id);
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
           expect(result).toEqual('Employee')
        } )

    });

    
})
