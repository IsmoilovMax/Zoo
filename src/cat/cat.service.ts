import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello(): string {
        return "MweoW"
    }
    
    public introduce(): string {
        return "My name is Tommy"
    }
}
