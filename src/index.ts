import { registerDecorator } from 'class-validator';
import ISO6391 from 'iso-639-1';

/**
 * Validating input and see if it match the ISO-639-1 schema
 */
export function IsISO6391() {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsISO6391',
      target: object.constructor,
      propertyName: propertyName,
      validator: {
        validate(value: string) {
            return ISO6391.validate(value.toLocaleLowerCase());
        },
      },
    });
  };
}