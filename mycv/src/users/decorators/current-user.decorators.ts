import { ExecutionContext, createParamDecorator } from "@nestjs/common";

/*why a decoratot and interceptor
Param decorators exist outside the DI system, so out decorators cant get an instance of UserService directly
solution:make an interceptor to get the current user , then user the value produced by it in the decorators
**/

//never mean we can not pass argument from @CurrentUser('dipendra.bista@cotiviti.com')
export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest(); //context is used for other WebSockets,http and rpc as well
    console.log("I am signing as ", request.session.userId);
    return request.CurrentUser;
  },
);
