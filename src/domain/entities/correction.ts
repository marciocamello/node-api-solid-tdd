import { Entity } from "../../core/domain/Entity";

type CorrectionProps = {
    grade: number;
    submissionId: string;
    createdAt: Date;
}

export class Correction extends Entity<CorrectionProps>{

    private constructor(props: CorrectionProps, id?: string) {
        super(props, id);
    }

    static create(props: CorrectionProps, id?: string): Correction {
        // if (props.grade < 0 || props.grade > 10) {
        //     throw new Error("Grade must be between 0 and 10");
        // }

        return new Correction(props, id);
    }
}