import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'vsdeeper',
  database: 'nest_admin',
  autoLoadEntities: true,
  synchronize: true, // 根据实体自动创建数据库表，生产建议关闭
};
export default config;
