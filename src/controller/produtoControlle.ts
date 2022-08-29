import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoSchema } from "../schemas/produto.schema";
import { Repository } from "typeorm";
import { Produto } from "../model/produto";
import { Categoria } from "../model/categoria";



 @Controller('/produto')
export class ProdutoController{


   
    constructor(
        @InjectRepository(Produto) private model: Repository<Produto>,)
        {}
    

        @Post()
        public async create(@Body() body:ProdutoSchema): Promise<{produto: object}>{
            const produtocriado = await this.model.save(body);
            return {produto: produtocriado}
        }

        @Get(':id')
        public async getid(@Param('id', ParseIntPipe) id:number): Promise<{produto: object}>{
            const produto = await this.model.findOne({where: {id}});
            if(!produto){
                throw new NotFoundException('Produto com id não cadastrado!!!')
            }
            return {produto: produto}
        
        }

        @Get()
        public async getAll(): Promise<{produto: Produto[]}>{
            const list = await this.model.find({relations:["categoria"]});
            return {produto: list};
        }

        @Put(':id')
        public async update(@Param('id', ParseIntPipe) id:number,@Body() body:ProdutoSchema): Promise<{Message: Object}>{
           var produto = await this.model.findOne({where: {id}});
            if(!produto){
                throw new NotFoundException(`Produto com  o id ${id} não cadastrado!!!`)
            }
    
            await this.model.update({id},body)
    
            return {Message: "Atualizado com sucesso"}
        }

        @Delete(':id')
        public async delete(@Param('id', ParseIntPipe) id:number,@Body() body:ProdutoSchema): Promise<{Message: Object}>{
            var produto = await this.model.findOne({where: {id}});
             if(!produto){
                throw new NotFoundException(`Produto com  o id ${id} não cadastrado!!!`)
            }
     
            await this.model.delete({id})
     
            return {Message: "excluido com sucesso"}
        }
}