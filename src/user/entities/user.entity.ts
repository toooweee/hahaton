import {BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Student} from "../../student/entities/student.entity";
import {UniversityAgent} from "../../university-agent/entities/university-agent.entity";
import {Employee} from "../../employee/entities/employee.entity";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    fio: string;

    @Column()
    role: string

    @OneToOne(() => Student, student => student.user, { eager: true, cascade: true })
    @JoinColumn()
    student: Student;

    @OneToOne(() => Employee, employee => employee.user, { eager: true, cascade: true })
    @JoinColumn()
    employee: Employee;

    @OneToOne(() => UniversityAgent, agent => agent.user, { eager: true, cascade: true })
    @JoinColumn()
    universityAgent: UniversityAgent;
}
