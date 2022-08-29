import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './controller/categoriaController';
import { ProdutoController } from './controller/produtoControlle';
import { Categoria } from './model/categoria';
import { Produto } from './model/produto';



@Module({
  imports: [TypeOrmModule.forRoot({
    "url": "postgres://cgzyjrlp:anMoW6HuQzCOK1kne_NxU9-Ng0HxUwIo@kesavan.db.elephantsql.com/cgzyjrlp",
    "type": "postgres",
    "synchronize": true,
    "entities": [Produto,Categoria]
    
}), TypeOrmModule.forFeature([Produto,Categoria])],
  controllers: [ProdutoController, CategoriaController],
  
})
export class AppModule {}
