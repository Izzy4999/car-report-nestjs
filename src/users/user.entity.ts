import { Report } from 'src/reports/reports.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;

  @OneToMany(()=> Report, (report)=>report.user)
  reports: Report[]

  @AfterInsert()
  logInsert() {
    console.log('insrted user with id', this.id);
  }
  @AfterUpdate()
  logUpdate() {
    console.log('update user with id', this.id);
  }
  @AfterRemove()
  logRemove() {
    console.log('Removed user with id', this.id);
  }
}
