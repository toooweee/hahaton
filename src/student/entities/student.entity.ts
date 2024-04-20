import {BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../user/entities/user.entity";

@Entity()
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    university: string;

    @Column()
    faculty: string;

    @Column()
    department: string;

    @Column()
    group: string;

    @Column()
    course: string;

    @OneToOne(() => User, user => user.student)
    user: User;
}
