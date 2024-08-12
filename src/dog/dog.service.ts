import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
        return "Wow-Wow"
    }

    public introduce(): string {
        return "Hello my name is Doggy"
    }
}
