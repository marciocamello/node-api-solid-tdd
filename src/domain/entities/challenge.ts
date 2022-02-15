import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
    title: string;
    instructionsUrl: string;
}

export class Challenge extends Entity<ChallengeProps>{

    private constructor(props: ChallengeProps, id?: string) {
        super(props, id);
    }

    static create(props: ChallengeProps, id?: string): Challenge {
        return new Challenge(props, id);
    }
}