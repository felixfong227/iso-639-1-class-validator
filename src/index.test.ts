import { IsString, validateOrReject } from "class-validator";
import { IsISO6391 } from ".";

describe('Validate ISO 639-1 code', () => {
    
    test('value "en" should pass', async () => {
        
        class DummyClass {
            @IsISO6391()
            iso639CodeLowerCase: string;
        }
        
        const dummyEntity = new DummyClass();
        dummyEntity.iso639CodeLowerCase = 'en';
        
        await expect(validateOrReject(dummyEntity)).resolves.not.toThrow();
        
    });
    
    test('value "EN" should pass', async () => {
        
        class DummyClass {
            @IsISO6391()
            iso639CodeLowerCase: string;
        }
        
        const dummyEntity = new DummyClass();
        dummyEntity.iso639CodeLowerCase = 'EN';
        
        await expect(validateOrReject(dummyEntity)).resolves.not.toThrow();
        
    });
    
});