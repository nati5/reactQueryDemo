import { Controller, Get, Render } from "@nestjs/common";
import { readJson } from "../consts/utilities";
@Controller()
export class AppController {
  @Get()  
  root() {
    return { data: "bye" };
  }

  @Get("/movies")
 async getMovies() {
    const movies =  await readJson('movies')
    return { data: movies};
  }
}
