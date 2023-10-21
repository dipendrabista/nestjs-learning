import { ExecutionContext, createParamDecorator } from "@nestjs/common";

//never mean we can not pass argument from @CurrentUser('dipendra.bista@cotiviti.com')
export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log("I am signing as ", request.session.userId);

    return "hi there";
  },
);
