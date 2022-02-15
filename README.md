# iso-639-1-class-validator

A [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) validator for the [class-validator](https://github.com/typestack/class-validator)

# Install

```bash
npm install iso-639-1-class-validator
```

# Usage

```typescript
class Database {
    /**
     * expect locale code, example: `zh`, `en`...
     */
    @IsISO6391()
    localeCode: string;
    ...
}
```