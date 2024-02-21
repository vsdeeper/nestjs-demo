import { ApiProperty } from '@nestjs/swagger';

export class CreateTodolistDto {
  @ApiProperty({ description: '名称', required: true, example: '李四' })
  readonly name: string;

  @ApiProperty({ description: '年龄', required: false, example: 18 })
  readonly age?: number;

  @ApiProperty({ description: '性别', required: false, example: true })
  readonly isMale?: boolean;

  @ApiProperty({
    description: '描述',
    required: false,
    example: '他是一个可爱的人',
  })
  readonly desc?: string;

  readonly test?: { name?: string };
}
