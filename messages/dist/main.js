"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const messeges_module_1 = require("./messeges.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(messeges_module_1.MessegesModule);
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map