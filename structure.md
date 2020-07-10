# Project Structure Template

(see https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81)
We can generate Core and Shared modules right after the creation of our new project. That way, we will be prepared for generation of additional components and services right from the start.

Run ng generate module core. Then create index.ts file in the core folder and re-export the CoreModule itself. We will be re-exporting additional public services which should be available in the whole application during further development.

That being done, we can do the same for shared module.

* core.module.ts
 with index.ts
* shared.module.ts
 with index.ts
* (feature).module.ts

each in its own directory under /app.


# Stackblitz example for this dashboard

https://stackblitz.com/edit/angular-zov92z?file=src%2Fapp%2Frouting%2Frouting.module.ts