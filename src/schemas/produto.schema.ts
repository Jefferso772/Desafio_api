import {IsString,IsNumber,Min,MaxLength} from 'class-validator'
export class ProdutoSchema{

    @IsString()
    @MaxLength(120)
    titulo:string;

    @IsNumber()
    @Min(0)
    preco: number;

    
    @IsString()
    @MaxLength(255)
    descricao:string;


}