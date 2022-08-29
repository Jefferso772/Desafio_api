import { Body, Controller, Delete, Get, Inject, Injectable, NotFoundException, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../model/categoria";
import { Repository } from "typeorm";
import { CategoriaSchema } from "../schemas/categoria.schema";
CategoriaSchema


@Controller('/categoria')
export class CategoriaController{

    constructor(
        @InjectRepository(Categoria) private categoriaRepository: Repository<Categoria>,
      ) {}

    @Post()
    public async create(@Body() body:CategoriaSchema): Promise<{categoria: Object}>{
       const produtocriado = await this.categoriaRepository.save(body);
       return {categoria: produtocriado}
    }

    @Get(':id')
    public async getid(@Param('id', ParseIntPipe) id:number): Promise<{categoria: object}>{
        const produtocriado = await this.categoriaRepository.findOne({where: {id}});
        if(!Categoria){
            throw new NotFoundException('Categoria com id nao cadastrado!')
        }
        return {categoria: Categoria}
    }

    @Get('/:id/produto')
    public async getProdtosByCategoria(@Param('id', ParseIntPipe) id:number): Promise<{categoria: object}>{
        const categoria = await this.categoriaRepository.findOne({where: {id}});
        if(!categoria){
            throw new NotFoundException('Categoria com id não cadastrado!!!')
        }
        const list = await this.categoriaRepository.findOne({ relations:['produtos'], where: {id}, order:{produtos:{id: categoria.ordenacao === "descend" ? 'DESC' : 'ASC', }} });

        return {categoria: list}
    }

    @Get()
    public async getAll(): Promise<{categoria: Categoria[]}>{
        const list = await this.categoriaRepository.find();
        return{categoria: list};
    }

    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id:number,@Body() body:CategoriaSchema): Promise<{Message: Object}> {
        var categoria = await this.categoriaRepository.findOne({where: {id}});
        if(!categoria){
            throw new NotFoundException(`Categoria com o id ${id} nao cadastrado` )
        }
        await this.categoriaRepository.update({id}, body)

        return {Message: "Atualizado com Sucesso"}
    }

    @Delete(':id')
    public async deletar(@Param('id', ParseIntPipe) id:number,@Body() body:CategoriaSchema): Promise<{Message: Object}>{
        var categoria = await this.categoriaRepository.findOne({where: {id}});
        if(!categoria){
            throw new NotFoundException(`Categoria com id ${id} nao cadastrado!`)
        }

        await this.categoriaRepository.delete({id})
    
        return {Message: "Excluido"}
    }



}