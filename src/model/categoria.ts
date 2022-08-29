import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from 'typeorm';
import { Produto } from './produto';


@Entity()
export class Categoria{

    @PrimaryGeneratedColumn()
    id:number

    @Column({length:120})
    nome:string;

    @Column({length:10})
    ordenacao: string;

    @CreateDateColumn()
    data_criacao:Date
    
    @Column({length:255})
    descricao:string;

    @OneToMany(type => Produto, produto => produto.categoria)
    produtos:Produto[]



 
}