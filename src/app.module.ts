import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { User } from './users/entities/user.entity';
import { Restaurant } from './restaurants/entities/restaurant.entity';
import { Recipe } from './recipes/entities/recipes.entity';
import { Auth } from './auth/entities/auth.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Restaurant, Recipe, Auth],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    RecipesModule,
    RestaurantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
