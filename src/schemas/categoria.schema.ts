import { IsNumber, IsString, MaxLength, Min } from "class-validator";

export class CategoriaSchema{

    @IsString()
    @MaxLength(120)
    nome:string;

    @IsNumber()
    @Min(0)
    preco: number;

  

    @IsString()
    ordenacao: string;


    @IsString()
    @MaxLength(255)
    descricao:string;


}