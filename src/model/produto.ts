import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn}from 'typeorm'
import { Categoria } from './categoria';

@Entity("produto")
export class Produto{
    
     
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:120})
    titulo:string;

    @Column({ nullable: false, type: "float" })
    preco: number;

    // @Column({ type: 'timestamptz' })
    // dataCriacao:Date
    
    @Column({length:255})
    descricao:string;

    @ManyToOne(type=>Categoria, produtos => this)
    @JoinColumn({name:'categoria_id'})
    categoria:Categoria;

}