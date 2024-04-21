import { BaseEntity, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class UniversityAgent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // todo

  @OneToOne(() => User, (user) => user.universityAgent)
  user: User;
}
