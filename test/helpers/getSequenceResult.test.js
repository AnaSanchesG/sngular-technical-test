import { getSequenceResult } from "../../src/helpers/getSequenceResult"

describe('Pruebas en componente no visual de cálculo para la secuencia', () => { 
    test('Prueba para el caso n=0', () => {
        const result = getSequenceResult(0);
        expect(result).toBe(1)
     });

     test('Prueba para el caso n=1', () => {
        const result = getSequenceResult(1);
        expect(result).toBe(2)
     });

     test('Prueba para el caso n=2', () => {
        const result = getSequenceResult(2);
        expect(result).toBe(3)
     });

     test('Prueba para el caso n=3', () => {
        const result = getSequenceResult(3);
        expect(result).toBe(11)
     });

     test('Prueba para el caso n=4', () => {
        const result = getSequenceResult(4);
        expect(result).toBe(22)
     });

     test('Prueba para el caso n=5', () => {
        const result = getSequenceResult(5);
        expect(result).toBe(39)
     });

     test('Prueba para el caso n=6', () => {
        const result = getSequenceResult(6);
        expect(result).toBe(59)
     });

     test('Prueba para el caso n=7', () => {
        const result = getSequenceResult(7);
        expect(result).toBe(92)
     });

     test('Prueba para el caso n=8', () => {
        const result = getSequenceResult(8);
        expect(result).toBe(133)
     });

     test('Prueba para el caso n=9', () => {
        const result = getSequenceResult(9);
        expect(result).toBe(195)
     });

     test('Prueba para el caso n=10', () => {
        const result = getSequenceResult(10);
        expect(result).toBe(278)
     });
 })