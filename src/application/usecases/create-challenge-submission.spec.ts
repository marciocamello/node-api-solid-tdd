import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallengesRepository } from "../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../tests/repositories/in-memory-students-repository";
import { CreateChallengeSubmission } from "./send-challenge-submission";

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {

        const studentsRepository = new InMemoryStudentsRepository();
        const challengesRepository = new InMemoryChallengesRepository();

        const student = Student.create({
            name: 'John Doe',
            email: 'email@teste.com'
        });

        const challenge = Challenge.create({
            title: 'Challenge 1',
            instructionsUrl: 'http://www.instrucoes.com',
        });

        studentsRepository.items.push(student);
        challengesRepository.items.push(challenge);

        const useCase = new CreateChallengeSubmission(
            studentsRepository,
            challengesRepository,
        );

        const response = await useCase.execute({
            studentId: student.id,
            challengeId: challenge.id,
        });

        expect(response).toBeTruthy();
    });

});